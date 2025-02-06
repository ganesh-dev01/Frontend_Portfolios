import { useContext, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Typography, Box, Avatar } from '@mui/material';
import { useRouter } from 'next/router';
import { Themecontext } from '@/Theme/Themestate';
import { supabase } from '@/lib/supabase';
import styles from '@/styles/auth_styles/signup.module.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
    const theme_data = useContext(Themecontext);
    theme_data.setTheme('dark');
    const router = useRouter();

    const [profilePic, setProfilePic] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setProfilePic(URL.createObjectURL(file));
        }
    };

    const handleAvatarClick = () => {
        fileInputRef.current?.click();
    };

    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = async (data: any) => {
        const { name, email, phone, password, confirmPassword } = data;

        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        try {
            const { data: existingUsers, error: fetchError } = await supabase
                .from('signup_table')
                .select('email')
                .eq('email', email);

            if (fetchError) {
                toast.error(fetchError.message);
                return;
            }

            if (existingUsers.length > 0) {
                toast.error('Email already exists. Please use a different email.');
                return;
            }

            const { user, error: authError }: any = await supabase.auth.signUp({
                email,
                password,
            });

            if (authError) {
                toast.error(authError.message);
                return;
            }

            let profileImageUrl = '';

            if (fileInputRef.current?.files?.[0]) {
                const file = fileInputRef.current.files[0];
                const filePath = `profile_images/${user?.id}_${file.name}`;

                const { data, error: storageError }: any = await supabase
                    .storage
                    .from('user_profile')
                    .upload(filePath, file);

                if (storageError) {
                    toast.error(storageError.message);
                    return;
                }

                // Get the public URL for the image
                const { data: imgurl, error: urlError }: any = supabase
                    .storage
                    .from('user_profile')
                    .getPublicUrl(filePath);

                if (urlError) {
                    toast.error(urlError.message);
                    return;
                }

                profileImageUrl = imgurl.publicUrl;
            }

            // Insert the user data into the "signup_table"
            const { data: signupData, error: insertError }: any = await supabase
                .from('signup_table')
                .insert([
                    {
                        name,
                        email,
                        password,
                        phone,
                        profile_image: profileImageUrl,
                    },
                ]);

            if (insertError) {
                toast.error(insertError.message);
                return;
            }

            toast.success("Check your email for verification");
            setTimeout(() => router.push('/auth/signin'), 2000);

        } catch (error: any) {
            toast.error('An error occurred: ' + error.message);
        }
    };


    return (
        <div className={styles[`main_${theme_data.theme}`]}>
            <div className={styles[`container_${theme_data.theme}`]}>
                <Typography variant="h4" className={styles.heading}>
                    Sign Up
                </Typography>

                <Box component="form" onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <Box className={styles.profilePicContainer}>
                        <Avatar
                            src={profilePic || ''}
                            className={styles.avatar}
                            onClick={handleAvatarClick}
                        />
                        <input
                            type="file"
                            accept="image/*"
                            className={styles.fileInput}
                            onChange={handleImageChange}
                            style={{ display: 'none' }}
                            ref={fileInputRef}
                        />
                    </Box>

                    <TextField
                        label="Name"
                        fullWidth
                        className={styles.input_field}
                        id={styles[`input_field_${theme_data.theme}`]}
                        {...register('name', { required: 'Name is required.' })}
                        error={!!errors.name}
                    />

                    <TextField
                        label="Email"
                        fullWidth
                        className={styles.input_field}
                        id={styles[`input_field_${theme_data.theme}`]}
                        {...register('email', {
                            required: 'Email is required.',
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: 'Enter a valid email address.',
                            },
                        })}
                        error={!!errors.email}
                    />

                    <TextField
                        label="Phone"
                        fullWidth
                        className={styles.input_field}
                        id={styles[`input_field_${theme_data.theme}`]}
                        {...register('phone', {
                            required: 'Phone number is required.',
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: 'Enter a valid 10-digit phone number.',
                            },
                        })}
                        error={!!errors.Phone}
                    />


                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        className={styles.input_field}
                        id={styles[`input_field_${theme_data.theme}`]}
                        {...register('password', {
                            required: 'Password is required.',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters.',
                            },
                        })}
                        error={!!errors.password}
                    />

                    <TextField
                        label="Confirm Password"
                        type="password"
                        fullWidth
                        className={styles.input_field}
                        id={styles[`input_field_${theme_data.theme}`]}
                        {...register('confirmPassword', {
                            required: 'Please confirm your password.',
                        })}
                        error={!!errors.confirmPassword}
                    />

                    <Box className={styles.signup_btn_container}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={styles.signup_btn}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Box>

                <Typography variant="body2" className={styles.helper_text}>
                    Already have an account?{' '}
                    <span
                        className={styles[`span_text_${theme_data.theme}`]}
                        onClick={() => router.push('/auth/signin')}
                    >
                        Sign in
                    </span>
                </Typography>
            </div>
            <ToastContainer position="top-center" autoClose={3000} />
        </div>
    );
};

export default Signup;

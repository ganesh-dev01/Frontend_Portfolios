import { useContext, useState, useRef, ChangeEvent, FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import { Avatar } from '@mui/material';
import { useRouter } from 'next/router';
import { Themecontext } from '@/Theme/Themestate';
import { supabase } from '@/lib/supabase';
import styles from '@/styles/auth_styles/signup.module.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
    name: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

const Signup: React.FC = () => {
    const theme_data = useContext(Themecontext);
    theme_data.setTheme('dark');
    const router = useRouter();

    const [profilePic, setProfilePic] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState(false);

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setProfilePic(URL.createObjectURL(file));
        }
    };

    const handleAvatarClick = () => {
        fileInputRef.current?.click();
    };

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setLoading(true);
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

            if (existingUsers && existingUsers.length > 0) {
                toast.error('Email already exists. Please use a different email.');
                return;
            }

            const { error: authError } = await supabase.auth.signUp({
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
                const filePath = `profile_images/${Math.abs(Math.random())}_${file.name}`;

                const { error: storageError } = await supabase
                    .storage
                    .from('user_profile')
                    .upload(filePath, file);

                if (storageError) {
                    toast.error(storageError.message);
                    return;
                }

                const { data: imgData } = await supabase
                    .storage
                    .from('user_profile')
                    .getPublicUrl(filePath);

                if (!imgData) {
                    toast.error('Failed to get public URL for the image');
                    return;
                }

                profileImageUrl = imgData.publicUrl;
            }

            const { error: insertError } = await supabase
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
            setTimeout(() => {
                setLoading(false);
                router.push('/auth/signin'), 2000
            }
            );

        } catch (error: unknown) {
            if (error instanceof Error) {
                toast.error('An error occurred: ' + error.message);
            }
        }
    };

    return (
        <div className={styles[`main_${theme_data.theme}`]}>
            <div className={styles[`container_${theme_data.theme}`]}>
                <h4 className={styles.heading}>Sign Up</h4>

                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <div className={styles.profilePicContainer}>
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
                    </div>

                    <input
                        placeholder="Name"
                        className={styles.input_field}
                        id={styles[`input_field_${theme_data.theme}`]}
                        {...register('name', { required: 'Name is required.' })}
                    />
                    {errors.name && <span>{errors.name.message}</span>}

                    <input
                        placeholder="Email"
                        className={styles.input_field}
                        id={styles[`input_field_${theme_data.theme}`]}
                        {...register('email', {
                            required: 'Email is required.',
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: 'Enter a valid email address.',
                            },
                        })}
                    />
                    {errors.email && <span>{errors.email.message}</span>}

                    <input
                        placeholder="Phone"
                        className={styles.input_field}
                        id={styles[`input_field_${theme_data.theme}`]}
                        {...register('phone', {
                            required: 'Phone number is required.',
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: 'Enter a valid 10-digit phone number.',
                            },
                        })}
                    />
                    {errors.phone && <span>{errors.phone.message}</span>}

                    <input
                        placeholder="Password"
                        type="password"
                        className={styles.input_field}
                        id={styles[`input_field_${theme_data.theme}`]}
                        {...register('password', {
                            required: 'Password is required.',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters.',
                            },
                        })}
                    />
                    {errors.password && <span>{errors.password.message}</span>}

                    <input
                        placeholder="Confirm Password"
                        type="password"
                        className={styles.input_field}
                        id={styles[`input_field_${theme_data.theme}`]}
                        {...register('confirmPassword', {
                            required: 'Please confirm your password.',
                        })}
                    />
                    {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

                    <div className={styles.signup_btn_container}>
                        <button type="submit" className={styles.signup_btn}>
                            {loading ? 'Loading...'
                                :
                                'Sign Up'
                            }
                        </button>
                    </div>

                    <div className={styles.account_redirect}>
                        <p>Already have an account? <a href="/auth/signin">Sign in</a></p>
                    </div>
                </form>
            </div>
            <ToastContainer position="top-center" autoClose={3000} />
        </div>
    );
};

export default Signup;

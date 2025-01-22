import Theme_button from '@/Components/Theme_button';
import styles from '@/styles/Auth_styles/signup.module.css';
import { ThemeContext } from '@/Theme/Themestate';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useRouter } from 'next/router';
import supabase from '@/lib/supabase';
import bcrypt from 'bcryptjs';

const Signup = () => {
    const theme_data = useContext(ThemeContext);
    const router = useRouter();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const { name, email, password, confirmPassword } = data;

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            const { data: authData, error: authError } = await supabase.auth.signUp({
                email,
                password,
            });

            if (authError) {
                alert(authError.message);
                return;
            }

            const { user } = authData;
            const { error: profileError } = await supabase
                .from('signup')
                .insert([
                    {
                        user_id: user.id,
                        role: 'user',
                        name,
                        email,
                        password: hashedPassword,
                    },
                ]);

            if (profileError) {
                alert(profileError.message);
            } else {
                alert('Signup successful! please check your email for verification.');
                router.push('/Auth/UserSignin');
            }
        } catch (err) {
            alert('An unexpected error occurred. Please try again.');
        }
    };



    return (
        <div className={styles[`main_${theme_data.theme}`]}>
            <Theme_button />

            <div className={styles[`container_${theme_data.theme}`]}>
                <Typography variant="h4" className={styles.heading}>
                    Sign Up
                </Typography>

                <Box
                    component="form"
                    className={styles.form}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <TextField
                        label="Name"
                        fullWidth
                        className={styles.input_field}
                        id={styles[`input_field_${theme_data.theme}`]}
                        {...register('name', { required: 'Name is required.' })}
                        error={!!errors.name}
                        helperText={errors.name?.message}
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
                        helperText={errors.email?.message}
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
                        helperText={errors.password?.message}
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
                        helperText={errors.confirmPassword?.message}
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
                        onClick={() => router.push('/Auth/UserSignin')}
                    >
                        Sign in
                    </span>
                </Typography>
            </div>
        </div>
    );
};

export default Signup;

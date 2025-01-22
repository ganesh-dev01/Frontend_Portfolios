import Theme_button from '@/Components/Theme_button';
import styles from '@/styles/Auth_styles/signin.module.css';
import { ThemeContext } from '@/Theme/Themestate';
import { useContext, useEffect } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import google_icon from '@/public/assets/icon/google_icon.png';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import supabase from '@/lib/supabase';

const Signin = () => {
    const theme_data = useContext(ThemeContext);
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const { email, password } = data;

        try {
            const { error } = await supabase.auth.signInWithPassword({ email, password });

            if (error?.message.includes('Email not confirmed')) {
                alert('Your email is not verified. Please check your inbox.');
                return;
            }

            if (error) {
                alert(error.message);
                return;
            }

            router.push('/User/Home');
        } catch (err) {
            alert('An unexpected error occurred. Please try again.');
        }
    };

    return (
        <div className={styles[`main_${theme_data.theme}`]}>
            <Theme_button />

            <div className={styles[`container_${theme_data.theme}`]}>
                {/* Sign-in Form */}
                <Typography variant="h4" className={styles.heading}>
                    Sign In
                </Typography>

                <Box
                    component="form"
                    className={styles.form}
                    onSubmit={handleSubmit(onSubmit)}
                >
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
                    <Typography className={styles.forgot_password}>
                        Forgot your password?
                    </Typography>

                    <Box className={styles.signin_btn_container}>
                        <Button className={styles.google_btn}>
                            <img src={google_icon.src} alt="Google Icon" />
                        </Button>

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={styles.signin_btn}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>

                <Typography variant="body2" className={styles.helper_text}>
                    Don't have an account?{' '}
                    <span
                        className={styles[`span_text_${theme_data.theme}`]}
                        onClick={() => router.push('/Auth/UserSignup')}
                    >
                        Sign up
                    </span>
                </Typography>
            </div>
        </div>
    );
};

export default Signin;

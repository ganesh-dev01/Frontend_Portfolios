import { useContext, useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Themecontext } from '@/Theme/Themestate';
import styles from '@/styles/auth_styles/signin.module.css';
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
    const theme_data = useContext(Themecontext);
    theme_data.setTheme('dark'); // By default dark theme

    const router = useRouter();
    const supabase = useSupabaseClient();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false); 

    const onSubmit = async (data: any) => {
        setLoading(true); 
        const { email, password } = data;

        const { error }: any = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            toast.error(error.message);
            setLoading(false); 
            return;
        }

        toast.success("Login successful! Redirecting...");
        setTimeout(() => {
            setLoading(false);
            router.push('/cms/user/dashboard');
        }, 2000);
    };

    return (
        <div className={styles[`main_${theme_data.theme}`]}>
            <div className={styles[`container_${theme_data.theme}`]}>
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

                    <Box className={styles.signin_btn_container}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={styles.signin_btn}
                            disabled={loading} 
                        >
                            {loading ? "Loading..." : "Sign In"}
                        </Button>
                    </Box>
                </Box>

                <Typography variant="body2" className={styles.helper_text}>
                    Don't have an account?{' '}
                    <span
                        className={styles[`span_text_${theme_data.theme}`]}
                        onClick={() => router.push('/auth/signup')}
                    >
                        Sign up
                    </span>
                </Typography>
            </div>

            <ToastContainer position="top-center" autoClose={3000} />
        </div>
    );
};

export default Signin;

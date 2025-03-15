import { useContext, useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import ThemeContext from '@/Theme/Themestate';
import styles from '@/styles/user/signin.module.css';
import { supabase } from '@/lib/supabaseClient';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const User_Signin: React.FC = () => {
    const theme_data = useContext(ThemeContext);
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: any) => {
        setLoading(true);
        const { email, password } = data;

        try {
            const { error } = await supabase.auth.signInWithPassword({ email, password });

            if (error) {
                toast.error(error.message);
            } else {
                toast.success("Signed in successfully!");
                setTimeout(() => router.push('/cms/user/dashboard'), 2000);
            }
        } catch (err) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles[`main_${theme_data?.theme}`]}>
            <ToastContainer autoClose={1500} />

            <div className={styles[`container_${theme_data?.theme}`]}>
                <Typography variant="h4" className={styles.heading}>
                    Sign In
                </Typography>

                <Typography variant="subtitle1" className={styles.subheading}>
                    Welcome to MediSched
                </Typography>

                <Box
                    component="form"
                    className={styles.form}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <TextField
                        label="Email"
                        fullWidth
                        className={`${styles.input_field} ${styles[`input_field_${theme_data?.theme}`]}`}
                        {...register('email', {
                            required: 'Email is required.',
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: 'Enter a valid email address.',
                            },
                        })}
                        error={!!errors.email}
                        InputLabelProps={{
                            style: { color: theme_data?.theme === "dark" ? "white" : "black" }
                        }}
                        InputProps={{
                            style: { color: theme_data?.theme === "dark" ? "white" : "black" }
                        }}
                    />

                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        className={`${styles.input_field} ${styles[`input_field_${theme_data?.theme}`]}`}
                        {...register('password', {
                            required: 'Password is required.',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters.',
                            },
                        })}
                        error={!!errors.password}
                        InputLabelProps={{
                            style: { color: theme_data?.theme === "dark" ? "white" : "black" }
                        }}
                        InputProps={{
                            style: { color: theme_data?.theme === "dark" ? "white" : "black" }
                        }}
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
                        className={styles[`span_text_${theme_data?.theme}`]}
                        onClick={() => router.push('/auth/user/signup')}
                    >
                        Sign up
                    </span>
                </Typography>
            </div>
        </div>
    );
};

export default User_Signin;
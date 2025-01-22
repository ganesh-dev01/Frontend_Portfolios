import Theme_button from '@/Components/Theme_button';
import styles from '@/styles/signin.module.css';
import { ThemeContext } from '@/Theme/Themestate';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { TextField, Button, Typography, Box } from '@mui/material';
import google_icon from '@/public/assets/icon/google_icon.png';
import supabase from '@/lib/supabase';
import { useDispatch } from 'react-redux';
import { AdminData } from '@/Redux/AdminSlice';
import { Cookies } from 'react-cookie';

const AdminSignin = () => {
    const theme_data = useContext(ThemeContext);
    const router = useRouter();
    const dispatch = useDispatch();

    const cookies = new Cookies();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const { email, password } = data;

        try {
            const { user, error } = await supabase.auth.signInWithPassword({ email, password });

            if (error) {
                console.error('Login Error:', error.message);
                alert('Invalid credentials. Please try again.');
            } else {
                const adminDetails = {
                    name: user?.user_metadata?.name || 'Admin',
                    role: user?.user_metadata?.role || 'Admin',
                    email: user?.email,
                };

                dispatch(AdminData(adminDetails));

                cookies.set('authToken', "admin_data1225452054", { path: '/' });

                alert('Login Successful');
                router.push('/Admin');
            }
        } catch (err) {
            console.error('Unexpected Error:', err);
            alert('Something went wrong. Please try again later.');
        }
    };

    return (
        <div className={styles[`main_${theme_data.theme}`]}>
            <Theme_button />

            <div className={styles[`container_${theme_data.theme}`]}>


                <Typography variant="h4" className={styles.heading}>
                    Admin Login
                </Typography>

                <Box
                    component="form"
                    className={styles.form}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {/* Email Field */}
                    <TextField
                        label="Email"
                        fullWidth
                        className={styles.input_field}
                        id={styles[`input_field_${theme_data.theme}`]}
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Invalid email format',
                            },
                        })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />

                    {/* Password Field */}
                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        className={styles.input_field}
                        id={styles[`input_field_${theme_data.theme}`]}
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters',
                            },
                        })}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />

                    <Typography className={styles.forgot_password}>
                        Forgot your password?
                    </Typography>

                    <Box className={styles.signin_btn_container}>


                        {/* <Button className={styles.google_btn}>
                            <img src={google_icon.src} alt="Google Icon" />
                        </Button> */}


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
                    Don't have an account? <span className={styles[`span_text_${theme_data.theme}`]}
                        onClick={() => router.push('/Auth/AdminSignup')}>Sign up</span>
                </Typography>
            </div>
        </div>
    );
};

export default AdminSignin;

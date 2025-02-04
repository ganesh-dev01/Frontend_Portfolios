import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useRouter } from 'next/router';
import { Themecontext } from '@/Theme/Themestate';
import styles from '@/styles/auth_styles/signup.module.css'


const Signup = () => {
    const theme_data = useContext(Themecontext);
    const router = useRouter();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <div className={styles[`main_${theme_data.theme}`]}>

            <div className={styles[`container_${theme_data.theme}`]}>

                <Typography variant="h4" className={styles.heading}>
                    Sign Up
                </Typography>

                <Box
                    component="form"
                    className={styles.form}
                >
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
        </div>
    );
};

export default Signup;

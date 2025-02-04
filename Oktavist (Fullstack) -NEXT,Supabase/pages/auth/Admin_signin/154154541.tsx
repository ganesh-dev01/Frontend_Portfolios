import styles from '@/styles/admin_styles/admin_signin.module.css'
import { Themecontext } from '@/Theme/Themestate';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';

const Admin_signin: React.FC = () => {
    const theme_data = useContext(Themecontext);
    const router = useRouter();


    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <div className={styles[`main_dark`]}>


            <div className={styles[`container_dark`]}>

                <Typography variant="h4" className={styles.heading}>
                    Admin
                </Typography>

                <Box
                    component="form"
                    className={styles.form}
                >
                    <TextField
                        label="Email"
                        fullWidth
                        className={styles.input_field}
                        id={styles[`input_field_dark`]}
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
                        id={styles[`input_field_dark`]}
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
            </div>
        </div>
    )
}

export default Admin_signin;
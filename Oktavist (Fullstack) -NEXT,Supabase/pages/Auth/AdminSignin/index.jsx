import Theme_button from '@/Components/Theme_button';
import styles from '@/styles/Auth_styles/signin.module.css';
import { ThemeContext } from '@/Theme/Themestate';
import { useContext } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import google_icon from '@/public/assets/icon/google_icon.png';

const AdminSignin = () => {
    const theme_data = useContext(ThemeContext);

    return (
        <div className={styles[`main_${theme_data.theme}`]}>
            <Theme_button />

            <div className={styles[`container_${theme_data.theme}`]}>

                {/* Sign-in Form */}
                <Typography variant="h4" className={styles.heading}>
                    Admin Login
                </Typography>

                <Box component="form" className={styles.form}>
                    <TextField
                        label="Email"
                        fullWidth
                        className={styles.input_field}
                        id={styles[`input_field_${theme_data.theme}`]}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        className={styles.input_field}
                        id={styles[`input_field_${theme_data.theme}`]}
                    />
                    <Typography className={styles.forgot_password}>
                        Forgot your password?
                    </Typography>

                    <Box className={styles.signin_btn_container}>

                        <Button className={styles.google_btn}>
                            <img src={google_icon.src} alt="Google Icon" />
                        </Button>

                        <Button
                            variant="contained"
                            color="primary"
                            className={styles.signin_btn}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>

                <Typography variant="body2" className={styles.helper_text}>
                    Don't have an account? <span className={styles[`span_text_${theme_data.theme}`]}>Sign up</span>
                </Typography>
            </div>
        </div>
    );
};

export default AdminSignin;

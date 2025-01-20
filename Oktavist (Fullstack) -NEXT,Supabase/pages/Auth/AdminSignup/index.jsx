import Theme_button from '@/Components/Theme_button';
import styles from '@/styles/Auth_styles/signup.module.css';
import { ThemeContext } from '@/Theme/Themestate';
import { useContext } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import google_icon from '@/public/assets/icon/google_icon.png';

const AdminSignup = () => {
    const theme_data = useContext(ThemeContext);

    return (
        <div className={styles[`main_${theme_data.theme}`]}>
            <Theme_button />

            <div className={styles[`container_${theme_data.theme}`]}>

                {/* Signup Form */}
                <Typography variant="h4" className={styles.heading}>
                    Admin Sign Up
                </Typography>

                <Box component="form" className={styles.form}>
                    <TextField
                        label="Name"
                        fullWidth
                        className={styles.input_field}
                        id={styles[`input_field_${theme_data.theme}`]}
                    />
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
                    <TextField
                        label="Confirm Password"
                        type="password"
                        fullWidth
                        className={styles.input_field}
                        id={styles[`input_field_${theme_data.theme}`]}
                    />

                    <Box className={styles.signup_btn_container}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={styles.signup_btn}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Box>

                <Typography variant="body2" className={styles.helper_text}>
                    Already have an account? <span className={styles[`span_text_${theme_data.theme}`]}>Sign in</span>
                </Typography>
            </div>
        </div>
    );
};

export default AdminSignup;

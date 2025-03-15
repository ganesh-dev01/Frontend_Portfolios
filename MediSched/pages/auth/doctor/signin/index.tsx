import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabaseClient';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import ThemeContext from '@/Theme/Themestate';
import styles from '@/styles/doctor/doctor_signin.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Doctor_Signin: React.FC = () => {
    const theme_data = useContext(ThemeContext);
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: any) => {
        setLoading(true);

        const { data: doctor, error } = await supabase
            .from('doctorSignup')
            .select('*')
            .eq('username', data.email)
            .eq('password', data.password)
            .single();

        if (error || !doctor) {
            toast.error("Invalid credentials!", { position: "top-center" });
            setLoading(false);
            return;
        }

        localStorage.setItem("doctor_session", JSON.stringify(doctor));

        toast.success("Login Successful!", { position: "top-center" });

        setTimeout(() => {
            router.push('/cms/doctor/dashboard');
        }, 1500);
    };

    return (
        <div className={styles[`main_${theme_data?.theme}`]}>
            <ToastContainer autoClose={1500} />

            <div className={styles[`container_${theme_data?.theme}`]}>
                <Typography variant="h4" className={styles.heading}>
                    Hello, Doctor
                </Typography>

                <Typography variant="subtitle1" className={styles.subheading}>
                    Welcome to MediSched
                </Typography>

                <Box component="form" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        label="Email"
                        fullWidth
                        className={`${styles.input_field} ${styles[`input_field_${theme_data?.theme}`]}`}
                        {...register('email', { required: 'Email is required.' })}
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
                        {...register('password', { required: 'Password is required.' })}
                        error={!!errors.password}
                        InputLabelProps={{
                            style: { color: theme_data?.theme === "dark" ? "white" : "black" }
                        }}
                        InputProps={{
                            style: { color: theme_data?.theme === "dark" ? "white" : "black" }
                        }}
                    />

                    <Box className={styles.signin_btn_container}>
                        <Button type="submit" variant="contained" color="primary" className={styles.signin_btn} disabled={loading}>
                            {loading ? "Logging in..." : "Sign In"}
                        </Button>
                    </Box>
                </Box>
            </div>
        </div>
    );
};

export default Doctor_Signin;
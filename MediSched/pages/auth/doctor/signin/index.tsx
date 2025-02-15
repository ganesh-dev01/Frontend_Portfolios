import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabaseClient';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import ThemeContext from '@/Theme/Themestate';
import styles from '@/styles/user/signin.module.css';
import { FaMoon, FaSun } from 'react-icons/fa';
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

    const changeTheme = () => {
        theme_data?.setTheme(theme_data?.theme === "light" ? "dark" : "light");
    };

    return (
        <div className={styles[`main_${theme_data?.theme}`]}>
         
            <ToastContainer autoClose={1500} />

            <div className={styles.themebtn_area}>
                <button className={styles.toggle_btn} onClick={changeTheme}>
                    {theme_data?.theme === "light" ? <FaMoon /> : <FaSun />}
                </button>
            </div>

            <div className={styles[`container_${theme_data?.theme}`]}>
                <Typography variant="h4" className={styles.heading}>
                    Doctor Sign-In
                </Typography>

                <Box component="form" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        label="Email"
                        fullWidth
                        className={styles.input_field}
                        {...register('email', { required: 'Email is required.' })}
                        error={!!errors.email}
                    />

                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        className={styles.input_field}
                        {...register('password', { required: 'Password is required.' })}
                        error={!!errors.password}
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

import { useContext, useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import ThemeContext from '@/Theme/Themestate';
import styles from '@/styles/admin/admin_signin.module.css';
import { FaMoon, FaSun } from 'react-icons/fa';
import { supabase } from '@/lib/supabaseClient';

const Admin_Signin: React.FC = () => {
    const theme_data = useContext(ThemeContext);
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm<{ email: string; password: string }>();
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const onSubmit = async (data: { email: string; password: string }) => {
        setLoading(true);
        setErrorMsg("");

        const { data: admin, error } = await supabase
            .from("adminSignup")
            .select("*")
            .eq("username", data.email)
            .eq("password", data.password)
            .single();

        if (error || !admin) {
            setErrorMsg("Invalid email or password.");
            setLoading(false);
            return;
        }

        // Save admin session & redirect
        localStorage.setItem("admin_session", JSON.stringify(admin));
        router.push("/cms/admin/dashboard");
    };

    const changeTheme = () => {
        theme_data?.setTheme(theme_data?.theme === "light" ? "dark" : "light");
    };

    return (
        <div className={styles[`main_${theme_data?.theme}`]}>
            {/* Light/Dark Mode Toggle Button */}
            <div className={styles.themebtn_area}>
                <button className={styles.toggle_btn} onClick={changeTheme}>
                    {theme_data?.theme === "light" ? <FaMoon /> : <FaSun />}
                </button>
            </div>

            <div className={styles[`container_${theme_data?.theme}`]}>
                <Typography variant="h4" className={styles.heading}>
                    Admin
                </Typography>

                <Typography variant="subtitle1" className={styles.subheading}>
                    Welcome Back
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
                        {...register("email", {
                            required: "Email is required.",
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: "Enter a valid email address.",
                            },
                        })}
                        error={!!errors.email}
                        helperText={errors.email?.message as string}
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
                        {...register("password", {
                            required: "Password is required.",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters.",
                            },
                        })}
                        error={!!errors.password}
                        helperText={errors.password?.message as string}
                        InputLabelProps={{
                            style: { color: theme_data?.theme === "dark" ? "white" : "black" }
                        }}
                        InputProps={{
                            style: { color: theme_data?.theme === "dark" ? "white" : "black" }
                        }}
                    />

                    {errorMsg && <p className={styles.error_text}>{errorMsg}</p>}

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
            </div>
        </div>
    );
};

export default Admin_Signin;
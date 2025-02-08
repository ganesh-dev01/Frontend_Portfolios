import styles from '@/styles/admin_styles/admin_signin.module.css';
import { Themecontext } from '@/Theme/Themestate';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { set, useForm } from 'react-hook-form';
import { supabase } from '@/lib/supabase';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin_signin: React.FC = () => {
    const theme_data = useContext(Themecontext);
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data: any) => {
        const { email, password } = data;

        // Check admin credentials in Supabase
        const { data: admin, error } = await supabase
            .from("admin_user")
            .select("id, email, password")
            .eq("email", email)
            .eq("password", password)
            .single();

        if (error || !admin) {
            toast.error("Invalid email or password");
            return;
        }

        localStorage.setItem('adminAuthenticated', "true");
        toast.success("Login successful as admin");
        setTimeout(() => router.push("/cms/admin/dashboard"), 2000);
    };

    return (
        <div className={styles[`main_dark`]}>
            <div className={styles[`container_dark`]}>
                <Typography variant="h4" className={styles.heading}>Admin</Typography>
                <Box component="form" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        label="Email"
                        fullWidth
                        className={styles.input_field}
                        id={styles[`input_field_dark`]}
                        {...register('email', {
                            required: 'Email is required.',
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
                <ToastContainer position="top-center" autoClose={3000} />
            </div>
        </div>
    );
};

export default Admin_signin;

import { useContext, useState, useRef, ChangeEvent, FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import styles from '@/styles/user/signup.module.css';
import ThemeContext from '@/Theme/Themestate';
import { FaMoon, FaSun } from 'react-icons/fa';
import { supabase } from '@/lib/supabaseClient';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
    name: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

const User_Signup: React.FC = () => {
    const theme_data = useContext(ThemeContext);
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setLoading(true);
        const { name, email, phone, password, confirmPassword } = data;

        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            setLoading(false);
            return;
        }

        try {
            const { data: existingUsers, error: fetchError } = await supabase
                .from('userSignup')
                .select('email')
                .eq('email', email);

            if (fetchError) {
                toast.error(fetchError.message);
                setLoading(false);
                return;
            }

            if (existingUsers && existingUsers.length > 0) {
                toast.error('Email already exists. Please use a different email.');
                setLoading(false);
                return;
            }

            const { error: authError } = await supabase.auth.signUp({
                email,
                password,
            });

            if (authError) {
                toast.error(authError.message);
                setLoading(false);
                return;
            }

            const { error: insertError } = await supabase
                .from('userSignup')
                .insert([{ name, email, phone, password }]);

            if (insertError) {
                toast.error(insertError.message);
                setLoading(false);
                return;
            }

            toast.success("Check your email for verification");
            setTimeout(() => {
                setLoading(false);
                router.push('/auth/signin');
            }, 2000);
        } catch (error: unknown) {
            if (error instanceof Error) {
                toast.error('An error occurred: ' + error.message);
            }
            setLoading(false);
        }
    };

    const changeTheme = () => {
        theme_data?.setTheme(theme_data?.theme === "light" ? "dark" : "light");
    };

    return (
        <div className={styles[`main_${theme_data?.theme}`]}>
            <div className={styles.themebtn_area}>
                <button className={styles.toggle_btn} onClick={changeTheme}>
                    {theme_data?.theme === "light" ? <FaMoon /> : <FaSun />}
                </button>
            </div>
            <div className={styles[`container_${theme_data?.theme}`]}>
                <h4 className={styles.heading}>Sign Up</h4>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <input
                        placeholder="Name"
                        className={styles.input_field}
                        id={styles[`input_field_${theme_data?.theme}`]}
                        {...register('name', { required: 'Name is required.' })}
                    />
                    {errors.name && <span>{errors.name.message}</span>}
                    <input
                        placeholder="Email"
                        className={styles.input_field}
                        id={styles[`input_field_${theme_data?.theme}`]}
                        {...register('email', {
                            required: 'Email is required.',
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: 'Enter a valid email address.',
                            },
                        })}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                    <input
                        placeholder="Phone"
                        className={styles.input_field}
                        id={styles[`input_field_${theme_data?.theme}`]}
                        {...register('phone', {
                            required: 'Phone number is required.',
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: 'Enter a valid 10-digit phone number.',
                            },
                        })}
                    />
                    {errors.phone && <span>{errors.phone.message}</span>}
                    <input
                        placeholder="Password"
                        type="password"
                        className={styles.input_field}
                        id={styles[`input_field_${theme_data?.theme}`]}
                        {...register('password', {
                            required: 'Password is required.',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters.',
                            },
                        })}
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                    <input
                        placeholder="Confirm Password"
                        type="password"
                        className={styles.input_field}
                        id={styles[`input_field_${theme_data?.theme}`]}
                        {...register('confirmPassword', {
                            required: 'Please confirm your password.',
                        })}
                    />
                    {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                    <div className={styles.signup_btn_container}>
                        <button type="submit" className={styles.signup_btn}>
                            {loading ? 'Loading...' : 'Sign Up'}
                        </button>
                    </div>
                    <div className={styles.account_redirect}>
                        <p>Already have an account?
                            <span onClick={() => router.push('/auth/signin')}
                                className={styles.span_text}>
                                Sign in
                            </span>
                        </p>
                    </div>
                </form>
            </div>
            <ToastContainer position="top-center" autoClose={3000} />
        </div>
    );
};

export default User_Signup;

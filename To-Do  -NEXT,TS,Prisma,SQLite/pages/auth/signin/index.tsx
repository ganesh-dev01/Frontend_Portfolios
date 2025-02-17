import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import { ThemeContext } from '@/Theme/Themestate';
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import styles from '@/styles/signin.module.css'

interface FormData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const router = useRouter();
    const data = useContext(ThemeContext);
    let { theme } = data;
    const [error, setError] = useState("");

    const {register,handleSubmit,formState: { errors },} = useForm<FormData>();

    const onSubmit = async (formData: FormData) => {
        const result = await signIn("credentials", {
            redirect: false,
            email: formData.email,
            password: formData.password,
        });

        if (!result?.error) {
            router.push("/cms/user/dashboard");
        } else {
            setError("Invalid credentials");
        }
    };

    return (
        <div className={`${styles[`main_${theme}`]} ${styles.main}`}>
            <div className={styles.container}>
                <h1 className={styles.title}>Sign In</h1>
                {errors.root && <p className={styles.error}>{errors.root.message}</p>}
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.label}>Email:</label>
                        <input
                            type="email"
                            id="email"
                            {...register("email", { required: "Email is required" })}
                            className={styles.input}
                        />
                        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="password" className={styles.label}>Password:</label>
                        <input
                            type="password"
                            id="password"
                            {...register("password", { required: "Password is required" })}
                            className={styles.input}
                        />
                        {errors.password && <p className={styles.error}>{errors.password.message}</p>}
                    </div>

                    <button type="submit" className={styles.button}>Login</button>

                    <p className={styles.signupLabel}>
                        Don't have an account? <span className={styles.signupLink}
                            onClick={() => router.push('/auth/signup')}>Sign Up</span>
                    </p>


                </form>
            </div>
        </div>
    );
};
export default SignIn;

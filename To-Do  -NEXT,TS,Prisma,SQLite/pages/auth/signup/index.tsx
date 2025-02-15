import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import { ThemeContext } from "@/Theme/Themestate";
import styles from "@/styles/signup.module.css";


interface FormData {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const Signup: React.FC = () => {
    const data = useContext(ThemeContext);
    let {theme} = data;

    const router = useRouter();

    const { register, handleSubmit, formState: { errors }, } = useForm<FormData>();
    const [error, setError] = useState<string | null>(null);

    const onSubmit = async (formData: FormData) => {
        console.log(formData)
    };

    return (
        <div className={`${styles[`main_${theme}`]} ${styles.main}`}>
            <div className={styles.container}>
                <h1 className={styles.title}>Sign Up</h1>
                {error && <p className={styles.error}>{error}</p>}
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="fullName" className={styles.label}>Full Name:</label>
                        <input
                            type="text"
                            id="fullName"
                            {...register("fullName", { required: "Full Name is required" })}
                            className={styles.input}
                        />
                        {errors.fullName && <p className={styles.error}>{errors.fullName.message}</p>}
                    </div>

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

                    <div className={styles.inputGroup}>
                        <label htmlFor="confirmPassword" className={styles.label}>Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            {...register("confirmPassword", { required: "Confirm Password is required" })}
                            className={styles.input}
                        />
                        {errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword.message}</p>}
                    </div>

                    <button type="submit" className={styles.button}>Sign Up</button>

                    <p className={styles.signinLabel}>
                       Already have an account? <span className={styles.signinLink}
                            onClick={() => router.push('/auth/signin')}>Sign in</span>
                    </p>
                </form>
            </div>
        </div>
    );
};
export default Signup;

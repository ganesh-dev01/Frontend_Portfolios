import { useForm } from "react-hook-form";
import styles from "@/styles/auth_styles/signin.module.css";
import ThemeContext from "@/Theme/Themestate";
import { useContext } from "react";

interface FormData {
    email: string;
    password: string;
}

const Admin_SignIn: React.FC = () => {
    const data = useContext(ThemeContext);
      const { theme } = data || {};
    // const theme = 'dark';

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("Login Data:", data);
    };

    return (
        <div className={styles[`main_${theme}`]}>

            <div className={styles.container}>

                <h1 className={styles.title}>Admin</h1>

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
                </form>
            </div>
        </div>
    );
};

export default Admin_SignIn;

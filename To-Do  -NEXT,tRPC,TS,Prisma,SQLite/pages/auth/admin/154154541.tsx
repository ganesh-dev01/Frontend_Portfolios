import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";
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
    const router = useRouter();

    const [loginError, setLoginError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        const adminEmail = "admin@example.com";
        const adminPassword = "123456";

        if (data.email === adminEmail && data.password === adminPassword) {
            localStorage.setItem("admin_token", "admin_token");
            console.log("Admin Logged In Successfully!");
            router.push("/cms/admin/dashboard"); // Redirect to admin dashboard
        } else {
            setLoginError("Invalid email or password!");
        }
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

                    {loginError && <p className={styles.error}>{loginError}</p>}

                    <button type="submit" className={styles.button}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Admin_SignIn;

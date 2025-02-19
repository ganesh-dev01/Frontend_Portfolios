import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import { ThemeContext } from '@/Theme/Themestate';
import { useRouter } from "next/router";
import { signIn, getSession } from "next-auth/react";
import styles from '@/styles/signin.module.css';

interface FormData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const router = useRouter();
    const data = useContext(ThemeContext);
    let { theme } = data;
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [userRole, setUserRole] = useState<string | null>(null);

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = async (formData: FormData) => {
        if (formData.email === "admin@example.com" && formData.password === "1234") {
            localStorage.setItem("isAdmin", "true");
            router.push("/cms/admin");
            return;
        }

        const result = await signIn("credentials", {
            redirect: false,
            email: formData.email,
            password: formData.password,
        });

        if (!result?.error) {
            const session = await getSession();
            console.log('Session:', session);

            const role = session?.user?.role;
            setUserRole(role || null);

            if (role === 'sub-admin') {
                setShowModal(true);
            } else {
                router.push("/cms/user/dashboard");
            }
        } else {
            setError("Invalid credentials");
        }
    };

    const handleRoleSelection = (role: string) => {
        setShowModal(false);
        if (role === 'sub-admin') {
            router.push("/cms/subadmin");
        } else {
            router.push("/cms/user/dashboard");
        }
    };

    return (
        <div className={`${styles[`main_${theme}`]} ${styles.main}`}>
            <div className={styles.container}>
                <h1 className={styles.title}>Sign In</h1>
                {errors.root?.message && <p className={styles.error}>{errors.root.message}</p>}
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
                {error && <p className={styles.error}>{error}</p>}
            </div>

            {showModal && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <h2>Select Role</h2>
                        <div className={styles.checkboxGroup}>
                            <label className={styles.checkboxLabel}>
                                <input
                                    type="checkbox"
                                    onChange={() => handleRoleSelection('sub-admin')}
                                    className={styles.checkbox}
                                />
                                Sub-Admin
                            </label>
                            <label className={styles.checkboxLabel}>
                                <input
                                    type="checkbox"
                                    onChange={() => handleRoleSelection('user')}
                                    className={styles.checkbox}
                                />
                                User
                            </label>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SignIn;

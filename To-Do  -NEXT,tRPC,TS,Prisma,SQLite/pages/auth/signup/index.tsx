import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import ThemeContext from "@/Theme/Themestate";
import styles from "@/styles/auth_styles/signup.module.css";

interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup: React.FC = () => {
  const data = useContext(ThemeContext);
  const theme = 'dark';
  const router = useRouter();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (formData: FormData) => {
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
      }),
    });

    if (res.ok) {
      router.push("/auth/signin");
    } else {
      setError("Signup failed");
    }
  };

  return (
    <div className={styles[`main_${theme}`]}>
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
        </form>
      </div>
    </div>
  );
};

export default Signup;

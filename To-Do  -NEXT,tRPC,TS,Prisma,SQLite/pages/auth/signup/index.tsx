import { useForm } from "react-hook-form";
import ThemeContext from "@/Theme/Themestate";
import { useContext } from "react";
import styles from "@/styles/auth_styles/signup.module.css";

interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup: React.FC = () => {
  const data = useContext(ThemeContext);
   const { theme } = data || {};
// const theme='dark'

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Signup Data:", data);
  };

  return (
    <div className={styles[`main_${theme}`]}>
      <div className={styles.container}>
        <h1 className={styles.title}>Sign Up</h1>
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

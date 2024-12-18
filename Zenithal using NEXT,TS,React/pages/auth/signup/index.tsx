import React, { useContext } from 'react';
import styles from '@/styles/signup.module.css';
import ThemeContext from '@/ThemeContext/ThemeContext';

const Signup: React.FC = () => {
    const theme_data = useContext<any>(ThemeContext);

    return (
        <div className={styles[`main-container-${theme_data.theme}`]}>
            <div className={styles.container}>
                <div className={styles.signupContainer}>
                    <p className={styles.brandName}>Zenithal</p>
                    <p className={styles.welcomeMsg}>Create your account!</p>
                    <h4 className={styles.signupHeader}>Sign Up</h4>
                    <form>
                        <label className={styles.label}>First Name</label>
                        <input type="text" className={styles.input} placeholder="Enter your first name" />

                        <label className={styles.label}>Last Name</label>
                        <input type="text" className={styles.input} placeholder="Enter your last name" />

                        <label className={styles.label}>Email</label>
                        <input type="email" className={styles.input} placeholder="Enter your email" />

                        <label className={styles.label}>Password</label>
                        <input type="password" className={styles.input} placeholder="Enter your password" />

                        <label className={styles.label}>Profile Picture</label>
                        <input type="file" className={styles.fileInput} />

                        <div className={styles.btnContainer}>
                            <button type="submit" className={styles.signupBtn}>Sign Up</button>
                        </div>

                        <p className={styles.accountMsg}>
                            Already have an account?
                            <span className={styles.loginLink}> Log in</span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;

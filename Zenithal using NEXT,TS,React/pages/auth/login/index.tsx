import React, { useContext } from "react"
import styles from '@/styles/login.module.css'
import ThemeContext from "@/ThemeContext/ThemeContext"

import image1 from '@/Assets/Images/loginImage.png'

const Login: React.FC = () => {
    const theme_data = useContext<any>(ThemeContext);
    return (
        <div className={styles[`main_conatiner_${theme_data.theme}`]}>

            <div className={styles.container}>

                <div className={styles.loginContainer}>

                    <p className={styles.brandName}>Zenithal</p>

                    <p className={styles.wlcmMsg}>Welcome Back !!!</p>

                    <h4 className={styles.signinHd}>Sign in</h4>

                    <form>
                        <label className={styles.emailHd}>Email</label>
                        <input type="email" className={styles.email} />

                        <label className={styles.passwordHd}>Password</label>
                        <input type="password" className={styles.password} />

                        <div className={styles.btnContainer}>
                            <button className={styles.loginBtn}>Login</button>
                        </div>

                        <p className={styles.accountMsg}>I don't have an account?
                            <span className={styles.signupLink}> Sign up</span>
                        </p>

                    </form>

                </div>


            </div>

            <img src={image1.src} alt="login_img" className={styles.loginImg} />

        </div>
    )
}

export default Login
import ThemeContext from '@/Theme/Themestate';
import { useContext, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import styles from '@/styles/auth_signin.module.css'
import User_Signin from '../user/signin';
import Doctor_Signin from '../doctor/signin';

const Signin: React.FC = () => {
    const theme_data = useContext(ThemeContext);
    const theme = theme_data?.theme;

    const [selectedRole, setSelectedRole] = useState<'Doctor' | 'Patient'>('Patient');

    const changeTheme = () => {
        theme_data?.setTheme(theme_data?.theme === "light" ? "dark" : "light");
    };

    return (
        <>
            <div className={styles[`main_${theme}`]}>

                <div className={styles.top_bar}>
                    <div className={styles.role_toggle}>
                        <button
                            className={`${styles.role_button} ${selectedRole === 'Doctor' ? styles.selected : ''}`}
                            onClick={() => setSelectedRole('Doctor')}
                        >
                            Doctor
                        </button>
                        <button
                            className={`${styles.role_button} ${selectedRole === 'Patient' ? styles.selected : ''}`}
                            onClick={() => setSelectedRole('Patient')}
                        >
                            Patient
                        </button>
                    </div>

                    <div className={styles.themebtn_area}>
                        <button className={styles.toggle_btn} onClick={changeTheme}>
                            {theme_data?.theme === "light" ? <FaMoon /> : <FaSun />}
                        </button>
                    </div>
                </div>

                <div className={styles.content}>
                    {(selectedRole == 'Patient') ?
                        <User_Signin /> :
                        <Doctor_Signin />
                    }

                </div>

            </div>
        </>
    )
}

export default Signin;
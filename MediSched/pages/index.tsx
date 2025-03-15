import { Button, ClickAwayListener } from '@mui/material';
import { FaHeartbeat, FaStethoscope } from "react-icons/fa";
import styles from '@/styles/welcome.module.css';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import ThemeContext from '@/Theme/Themestate';

const Welcome: React.FC = () => {
    const theme_data = useContext(ThemeContext);
    const router = useRouter();




    const changeTheme = () => {
        theme_data?.setTheme(theme_data?.theme === "light" ? "dark" : "light");
    };

    return (
        <div className={styles[`main_${theme_data?.theme}`]}>

            {/* Light/Dark Mode Toggle Button */}
            <div className={styles.themebtn_area}>
                <button className={styles.toggle_btn} onClick={changeTheme}>
                    <FaHeartbeat />
                </button>
            </div>

            <div className={styles.content}>
                <h1 className={styles.welcome_message}>Welcome to <span>MediSched</span>!</h1>
                <p className={styles.sub_message}>MediSched - Because Every Minute Matters</p>


                <div className={styles.dropdown_container}>
                    <Button
                        variant="contained"
                        className={styles.start_btn}
                        onClick={() => router.push('/auth/signin')}
                    >
                        <span className={styles.playicon}><FaStethoscope /></span> Get Started
                    </Button>

                </div>

            </div>
        </div>
    );
};

export default Welcome;

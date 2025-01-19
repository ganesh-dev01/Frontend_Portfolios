import styles from '@/styles/welcome.module.css';
import { ThemeContext } from '@/Theme/Themestate';
import { useContext } from 'react';
import { Button } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const Welcome = () => {
    const theme_data = useContext(ThemeContext);

    let changeTheme = () => {
        theme_data.setTheme(theme_data.theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <div className={styles[`main_${theme_data.theme}`]}>

            <div className={styles.top_bar}>
                <button className={styles.toggle_btn} onClick={changeTheme}>
                    {theme_data.theme === 'dark' ? <Brightness7 /> : <Brightness4 />}
                </button>
            </div>


            <div className={styles.content}>
                <h1 className={styles.welcome_message}>Welcome to Oktavist!</h1>
                <p className={styles.sub_message}>
                    Discover the world of music, curated just for you.
                </p>
                <Button
                    variant="contained"
                    className={styles.start_btn}
                >
                    Let's Start
                </Button>
            </div>
        </div>
    );
};

export default Welcome;

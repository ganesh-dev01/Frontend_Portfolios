import { Themecontext } from '@/Theme/Themestate';
import { useContext } from 'react';
import { Button } from '@mui/material';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { BsCollectionPlayFill } from "react-icons/bs";
import styles from '@/styles/welcome.module.css'
import { useRouter } from 'next/router';

const Welcome: React.FC = () => {
    const theme_data = useContext(Themecontext);
    const changeTheme = () => {
        (theme_data.theme === "light") ? theme_data.setTheme("dark") : theme_data.setTheme("light")
    }

    const router = useRouter();
    return (
        <div className={styles[`main_${theme_data.theme}`]}>

            <div className={styles.themebtn_area}>
                <button className={styles.toggle_btn} onClick={changeTheme}>
                    {theme_data.theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
                </button>
            </div>

            <div className={styles.content}>
                <h1 className={styles.welcome_message}>Welcome to <span>Oktavist</span>!</h1>
                <p className={styles.sub_message}>
                    Discover the world of music, curated just for you.
                </p>
                <Button
                    variant="contained"
                    className={styles.start_btn}
                    onClick={() => router.push('auth/signin')}>
                    <span className={styles.playicon}><BsCollectionPlayFill /></span> play
                </Button>
            </div>
        </div>
    )
}


export default Welcome
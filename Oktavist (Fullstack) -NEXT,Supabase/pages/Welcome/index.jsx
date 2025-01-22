import styles from '@/styles/welcome.module.css';
import { ThemeContext } from '@/Theme/Themestate';
import { useContext } from 'react';
import { Button } from '@mui/material';
import Theme_button from '@/Components/Theme_button';
import { useRouter } from 'next/router';

const Welcome = () => {
    const theme_data = useContext(ThemeContext);

    const router = useRouter();

    return (
        <div className={styles[`main_${theme_data.theme}`]}>

            <Theme_button />

            <div className={styles.content}>
                <h1 className={styles.welcome_message}>Welcome to Oktavist!</h1>
                <p className={styles.sub_message}>
                    Discover the world of music, curated just for you.
                </p>
                <Button
                    variant="contained"
                    className={styles.start_btn}
                    onClick={() => router.push('./Auth/UserSignin')}>
                    Let's Start
                </Button>
            </div>
        </div>
    );
};

export default Welcome;

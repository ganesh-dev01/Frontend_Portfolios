import { ThemeContext } from "@/Theme/Themestate"
import { useContext, useState } from "react"
import styles from "@/styles/User_styles/Home.module.css"
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import test_img from '@/public/assets/test.jpg'

const Home = () => {

    const theme_data = useContext(ThemeContext);

    let changeTheme = () => {
        theme_data.setTheme(theme_data.theme === 'dark' ? 'light' : 'dark');
    }

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => prev + 1);
    };

    return (
        <div className={styles[`main_${theme_data.theme}`]}>

            <div className={styles[`userNav_${theme_data.theme}`]}>

                <div className={styles.welcomeBox}>
                    <h4>Welcome user</h4>
                </div>

                <div className={styles.ThemeBox}>

                    <button className={styles.toggle_btn} onClick={changeTheme}>
                        {theme_data.theme === 'dark' ? <Brightness7 style={{ fontSize: '1.5rem' }} /> :
                            <Brightness4 style={{ fontSize: '1.5rem' }} />}
                    </button>

                </div>


                <div className={styles.userBox}>
                    <Avatar
                        alt="User Avatar"
                        src="/path/to/your/avatar-image.jpg"
                        className={styles.user_avatar}
                    />
                </div>
            </div>

            <div className={styles[`artistBox_${theme_data.theme}`]}>
                <p className={styles.artistHd}>Artists</p>

                <div className={styles.artistContainer}>
                    <Button
                        className={styles.prevBtn}
                        onClick={handlePrev}
                    >
                        <GiPreviousButton />
                    </Button>

                    <div className={styles.artistCardsWrapper}>

                        <div className={styles.artistCard}>
                            <img src={test_img.src} alt="Artist" className={styles.artistImage} />
                            <p className={styles.artistName}>Artist Name</p>
                        </div>

                        <div className={styles.artistCard}>
                            <img src={test_img.src} alt="Artist" className={styles.artistImage} />
                            <p className={styles.artistName}>Artist Name</p>
                        </div>

                        <div className={styles.artistCard}>
                            <img src={test_img.src} alt="Artist" className={styles.artistImage} />
                            <p className={styles.artistName}>Artist Name</p>
                        </div>
                        

                    </div>

                    <Button
                        className={styles.nextBtn}
                        onClick={handleNext}
                    >
                        <GiNextButton />
                    </Button>
                </div>
            </div>



        </div>
    )
}

export default Home 
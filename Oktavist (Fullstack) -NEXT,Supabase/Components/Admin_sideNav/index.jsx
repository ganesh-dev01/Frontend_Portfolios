import styles from '@/styles/Admin_styles/sidenav.module.css';
import { ThemeContext } from '@/Theme/Themestate';
import { useContext, useState } from 'react';
import { FaHome, FaMusic, FaPaintBrush, FaUsers, FaPhone, FaUser, FaFileAlt } from 'react-icons/fa';
import { AiOutlineMenuFold } from "react-icons/ai";

const Admin_sideNav = () => {
    const theme_data = useContext(ThemeContext);

    let changetheme = () => {
        theme_data.setTheme(theme_data.theme === 'light' ? 'dark' : 'light');
    };

    let [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <div className={styles[`menubar_${theme_data.theme}`]} onClick={() => setIsOpen(!isOpen)}>
                <AiOutlineMenuFold />
            </div>

            {(isOpen) &&
                <div className={styles[`mob_sidenav_${theme_data.theme}`]}>
                    <div className={styles.mob_header}>
                        <div className={styles.close_icon} onClick={() => setIsOpen(false)}>✕</div>
                        <div className={styles.theme_toggle} onClick={changetheme}>🌙</div>
                    </div>

                    <div className={styles.mob_nav_items}>

                        <div className={styles.nav_item}>
                            <FaHome className={styles.icon} />
                            <span className={styles.span}>Home</span>
                        </div>
                        <div className={styles.nav_item}>
                            <FaFileAlt className={styles.icon} />
                            <span className={styles.span}>Submissions</span>
                        </div>
                        <div className={styles.nav_item}>
                            <FaMusic className={styles.icon} />
                            <span className={styles.span}>Submit Music</span>
                        </div>
                        <div className={styles.nav_item}>
                            <FaPaintBrush className={styles.icon} />
                            <span className={styles.span}>Submit Art</span>
                        </div>
                        <div className={styles.nav_item}>
                            <FaUsers className={styles.icon} />
                            <span className={styles.span}>Join Us</span>
                        </div>
                        <div className={styles.nav_item}>
                            <FaPhone className={styles.icon} />
                            <span className={styles.span}>Contact Us</span>
                        </div>
                        <div className={styles.nav_item}>
                            <FaUsers className={styles.icon} />
                            <span className={styles.span}>Team</span>
                        </div>
                        <div className={styles.nav_item}>
                            <FaUser className={styles.icon} />
                            <span className={styles.span}>Account</span>
                        </div>
                    </div>
                </div>
            }


            <div className={styles[`main_sidenav_${theme_data.theme}`]}>
                <div className={`${styles.logo}`}>Logo</div>

                <div className={`${styles.nav_item}`}>
                    <FaHome className={`${styles.icon}`} />
                    <span>Home</span>
                </div>

                <div className={`${styles.nav_item}`}>
                    <FaFileAlt className={`${styles.icon}`} />
                    <span>Submissions</span>
                </div>
                <div className={`${styles.nav_item}`}>
                    <FaMusic className={`${styles.icon}`} />
                    <span>Submit Music</span>
                </div>
                <div className={`${styles.nav_item}`}>
                    <FaPaintBrush className={`${styles.icon}`} />
                    <span>Submit Art</span>
                </div>
                <div className={`${styles.nav_item}`}>
                    <FaUsers className={`${styles.icon}`} />
                    <span>Join Us</span>
                </div>
                <div className={`${styles.nav_item}`}>
                    <FaPhone className={`${styles.icon}`} />
                    <span>Contact Us</span>
                </div>
                <div className={`${styles.nav_item}`}>
                    <FaUsers className={`${styles.icon}`} />
                    <span>Team</span>
                </div>
                <div className={`${styles.nav_item}`}>
                    <FaUser className={`${styles.icon}`} />
                    <span>Account</span>
                </div>
            </div>



        </>
    );
};

export default Admin_sideNav;

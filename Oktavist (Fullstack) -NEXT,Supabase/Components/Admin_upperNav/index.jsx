import React, { useContext } from 'react';
import { Avatar } from '@mui/material';
import { ThemeContext } from '@/Theme/Themestate';
import styles from '@/styles/Admin_styles/uppernav.module.css';
import { MdOutlineDarkMode, MdOutlineWbSunny } from 'react-icons/md';

const Admin_uppernav = () => {
    const theme_data = useContext(ThemeContext);
    const isDarkMode = theme_data.theme === 'dark';

    let changeTheme = () => {
        theme_data.setTheme(theme_data.theme === 'light' ? 'dark' : 'light');
    }

    return (
        <div className={`${styles[`main_${theme_data.theme}`]} ${styles.navbar}`}>

            <div className={styles.greetingSection}>
                <h1 className={styles.helloText}>Hello, User!</h1>
                <p className={styles.welcomeText}>Welcome back to Oktavist</p>
            </div>

            <div className={styles.userSection}>
                <button
                    onClick={changeTheme}
                    className={styles.themeToggleButton}
                    aria-label="Toggle Theme"
                >
                    {isDarkMode ? (
                        <MdOutlineWbSunny size={24} />
                    ) : (
                        <MdOutlineDarkMode size={24} />
                    )}
                </button>
                <Avatar
                    alt="User Profile"
                    src={theme_data.userProfilePic || ''}
                    className={styles.avatar}
                />
                <span className={styles.profileName}>Jack Brown</span>
            </div>
        </div>
    );
};

export default Admin_uppernav;

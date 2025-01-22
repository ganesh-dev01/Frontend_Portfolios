import React, { useContext, useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import { ThemeContext } from '@/Theme/Themestate';
import styles from '@/styles/uppernav.module.css';
import { MdOutlineDarkMode, MdOutlineWbSunny } from 'react-icons/md';
import { useSelector } from 'react-redux';
import supabase from '@/lib/supabase';
import { Cookies } from 'react-cookie';

const Admin_uppernav = () => {
    const theme_data = useContext(ThemeContext);
    const isDarkMode = theme_data.theme === 'dark';

    const changeTheme = () => {
        theme_data.setTheme(theme_data.theme === 'light' ? 'dark' : 'light');
    };

    const email_data = useSelector((state) => state.admin.data);

    const [signupTable, setSignupTable] = useState(null);

    const cookies = new Cookies();

    const signup_data = async () => {
        const { data, error } = await supabase.from('signup').select('*');

        if (error) {
            alert('Error fetching data:', error.message);
        } else {
            console.log('Fetched Data:', data);
            setSignupTable(data);
        }
    };

    useEffect(() => {
        signup_data();
    }, []);

    const loginUser = signupTable?.find((item) => item.email === email_data?.email);

    const handleSignOut = () => {
        cookies.remove('authToken');
        alert('You have been signed out successfully!');
        window.location.reload();
    };

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
                <span className={styles.profileName}>
                    {loginUser?.name || 'Admin'}
                </span>
                <button className={styles.signOutButton} onClick={handleSignOut}>
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default Admin_uppernav;

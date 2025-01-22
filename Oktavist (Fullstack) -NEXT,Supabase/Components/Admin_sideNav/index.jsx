import styles from '@/styles/Admin_styles/sidenav.module.css';
import { ThemeContext } from '@/Theme/Themestate';
import { useContext, useState } from 'react';
import { FaHome, FaMusic, FaPaintBrush, FaUsers, FaPhone, FaUser, FaFileAlt } from 'react-icons/fa';
import { AiOutlineMenuFold } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { toggleNav } from '@/Redux/NavSlice';

const Admin_sideNav = () => {
    const theme_data = useContext(ThemeContext);

    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const nav_value = useSelector((state) => state.nav);

    const changetheme = () => {
        theme_data.setTheme(theme_data.theme === 'light' ? 'dark' : 'light');
    };

    const handleNavClick = (menuValue) => {
        dispatch(toggleNav(menuValue));
        console.log(`Selected menu value: ${menuValue}`);
    };

    return (
        <>
            {/* Mobile menu toggle */}
            <div
                className={styles[`menubar_${theme_data.theme}`]}
                onClick={() => setIsOpen(!isOpen)}
            >
                <AiOutlineMenuFold />
            </div>

            {/* Mobile side navigation */}
            {isOpen && (
                <div className={styles[`mob_sidenav_${theme_data.theme}`]}>
                    <div className={styles.mob_header}>
                        <div
                            className={styles.close_icon}
                            onClick={() => setIsOpen(false)}
                        >
                            ✕
                        </div>
                        <div
                            className={styles.theme_toggle}
                            onClick={changetheme}
                        >
                            🌙
                        </div>
                    </div>

                    <div className={styles.mob_nav_items}>
                        {[
                            { name: 'Home', icon: FaHome, value: 1 },
                            { name: 'Submissions', icon: FaFileAlt, value: 2 },
                            { name: 'Submit Music', icon: FaMusic, value: 3 },
                            { name: 'Submit Art', icon: FaPaintBrush, value: 4 },
                            { name: 'Join Us', icon: FaUsers, value: 5 },
                            { name: 'Contact Us', icon: FaPhone, value: 6 },
                            { name: 'Team', icon: FaUsers, value: 7 },
                            { name: 'Account', icon: FaUser, value: 8 },
                        ].map((menu) => (
                            <div
                                key={menu.value}
                                className={styles.nav_item}
                                onClick={() => handleNavClick(menu.value)}
                            >
                                <menu.icon className={styles.icon} />
                                <span className={styles.span}>{menu.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Main side navigation */}
            <div className={styles[`main_sidenav_${theme_data.theme}`]}>
                <div className={`${styles.logo}`}>Logo</div>
                {[
                    { name: 'Home', icon: FaHome, value: 1 },
                    { name: 'Submissions', icon: FaFileAlt, value: 2 },
                    { name: 'Submit Music', icon: FaMusic, value: 3 },
                    { name: 'Submit Art', icon: FaPaintBrush, value: 4 },
                    { name: 'Join Us', icon: FaUsers, value: 5 },
                    { name: 'Contact Us', icon: FaPhone, value: 6 },
                    { name: 'Team', icon: FaUsers, value: 7 },
                    { name: 'Account', icon: FaUser, value: 8 },
                ].map((menu) => (
                    <div
                        key={menu.value}
                        className={`${styles.nav_item} ${nav_value === menu.value ? styles.active : ''
                            }`}
                        onClick={() => handleNavClick(menu.value)}
                    >
                        <menu.icon className={`${styles.icon}`} />
                        <span>{menu.name}</span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Admin_sideNav;

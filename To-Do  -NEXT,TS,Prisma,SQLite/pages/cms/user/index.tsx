import styles from '@/styles/user.module.css'
import { ThemeContext } from '@/Theme/Themestate'
import { useContext, useState } from 'react'
import { Menu } from 'lucide-react';

const User: React.FC = () => {
    const data = useContext(ThemeContext);
    let { theme } = data;
    theme='dark';
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };

    return (
        <div className={`${styles[`main_${theme}`]} ${styles.main}`}>

            {/* Desktop SideNav */}
            <div className={styles.desktop_sidenav}>
                <div className={styles.desktop_sidenav_header}>
                    <p>My To-Dos</p>
                </div>
                <ul className={styles.menu_list}>
                    <li>Dashboard</li>
                    <li>Status</li>
                    <li>Profile</li>
                </ul>
            </div>

            {/* Mobile SideNav */}
            <div className={styles.mobile_menu_icon} onClick={toggleMobileNav}>
                <Menu size={24} />
            </div>

            <div className={`${styles.mobile_sidenav} ${mobileNavOpen ? styles.open : ''}`}>
                <ul className={styles.mobile_menu_list}>
                    <li onClick={toggleMobileNav}>Dashboard</li>
                    <li onClick={toggleMobileNav}>Status</li>
                    <li onClick={toggleMobileNav}>Profile</li>
                </ul>
            </div>

            {/* Main Content */}

            <div className={styles.main_content}>
            </div>

        </div>
    );
};

export default User;

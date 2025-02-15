import { ThemeContext } from '@/Theme/Themestate'
import { useContext, useState } from 'react'
import { Menu } from 'lucide-react';
import styles from '@/styles/admin.module.css';

const Admin: React.FC = () => {
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
                    <li>User Tasks</li>
                    <li>Permission</li>
                    <li>Edit Task</li>
                    <li>Profile</li>
                </ul>
            </div>

            {/* Mobile SideNav */}
            <div className={styles.mobile_menu_icon} onClick={toggleMobileNav}>
                <Menu size={24} />
            </div>

            <div className={`${styles.mobile_sidenav} ${mobileNavOpen ? styles.open : ''}`}>
                <ul className={styles.mobile_menu_list}>
                    <li onClick={toggleMobileNav}>User Tasks</li>
                    <li onClick={toggleMobileNav}>Permission</li>
                    <li onClick={toggleMobileNav}>Edit Task</li>
                    <li onClick={toggleMobileNav}>Profile</li>
                </ul>
            </div>

            {/* Main Content */}

            <div className={styles.main_content}>
            </div>

        </div>
    );
};

export default Admin;

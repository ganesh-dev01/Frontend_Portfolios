import { ThemeContext } from '@/Theme/Themestate'
import { useContext, useState } from 'react'
import { Menu, User } from 'lucide-react';
import UserTasks from './UserTasks';
import SubAdminEditTask from './Edit_task';
import SubAdminProfile from './Profile';
import styles from '@/styles/subadmin.module.css';

const SubAdmin: React.FC = () => {
    const data = useContext(ThemeContext);
    let { theme } = data;

    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNav = (v: number) => {
        setMobileNavOpen(!mobileNavOpen);
        setActive(v);
    };

    const Content = (v: number) => {
        switch (v) {
            case 1:
                return <SubAdminEditTask />
            case 2:
                return <SubAdminProfile />
            default:
                return <UserTasks />
        }

    }
    let [active, setActive] = useState(1);

    return (
        <div className={`${styles[`main_${theme}`]} ${styles.main}`}>

            {/* Desktop SideNav */}
            <div className={styles.desktop_sidenav}>
                <div className={styles.desktop_sidenav_header}>
                    <p>Sub-Admin</p>
                </div>
                <ul className={styles.menu_list}>
                    <li onClick={() => setActive(1)}>Edit Task</li>
                    <li onClick={() => setActive(2)}>Profile</li>
                </ul>
            </div>

            {/* Mobile SideNav */}
            <div className={styles.mobile_menu_icon} onClick={() => toggleMobileNav(active)}>
                <Menu size={24} />
            </div>

            <div className={`${styles.mobile_sidenav} ${mobileNavOpen ? styles.open : ''}`}>
                <ul className={styles.mobile_menu_list}>
                    <li onClick={() => toggleMobileNav(1)}>Edit Task</li>
                    <li onClick={() => toggleMobileNav(2)}>Profile</li>
                </ul>
            </div>

            {/* Main Content */}

            <div className={styles.main_content}>
                {Content(active)}
            </div>

        </div>
    );
};

export default SubAdmin;

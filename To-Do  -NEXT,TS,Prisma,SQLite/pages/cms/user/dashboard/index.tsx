import styles from '@/styles/user.module.css'
import { ThemeContext } from '@/Theme/Themestate'
import { useContext, useState } from 'react'
import { Menu } from 'lucide-react';
import UserStatus from './status';
import User_Dashboard from './userDashboard';
import User_Profile from './profile';

const User: React.FC = () => {
    const data = useContext(ThemeContext);
    let { theme } = data;
    // theme='dark';
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNav = (v:number) => {
        setMobileNavOpen(!mobileNavOpen);
        setActive(v);
    };

    const Content = (v: number) => {
        switch (v) {
            case 0:
                return <User_Dashboard />;
            case 1:
                return <UserStatus />;
            case 2:
                return <User_Profile />;
            default:
                return <User_Profile />;
        }
    }
    let[active, setActive] = useState(0);

    return (
        <div className={`${styles[`main_${theme}`]} ${styles.main}`}>

            {/* Desktop SideNav */}
            <div className={styles.desktop_sidenav}>
                <div className={styles.desktop_sidenav_header}>
                    <p>My To-Dos</p>
                </div>
                <ul className={styles.menu_list}>
                    <li onClick={()=>setActive(0)}>Dashboard</li>
                    <li onClick={()=>setActive(1)}>Status</li>
                    <li onClick={()=>setActive(2)}>Profile</li>
                </ul>
            </div>

            {/* Mobile SideNav */}
            <div className={styles.mobile_menu_icon} onClick={()=>toggleMobileNav(active)}>
                <Menu size={24} />
            </div>

            <div className={`${styles.mobile_sidenav} ${mobileNavOpen ? styles.open : ''}`}>
                <ul className={styles.mobile_menu_list}>
                    <li onClick={()=>toggleMobileNav(0)}>Dashboard</li>
                    <li onClick={()=>toggleMobileNav(1)}>Status</li>
                    <li onClick={()=>toggleMobileNav(2)}>Profile</li>
                </ul>
            </div>

            {/* Main Content */}

            <div className={styles.main_content}>
                {Content(active)}
            </div>

        </div>
    );
};

export default User;

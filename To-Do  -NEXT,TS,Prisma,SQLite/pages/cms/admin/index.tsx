import { ThemeContext } from '@/Theme/Themestate'
import { useContext, useState, useEffect } from 'react'
import { Menu } from 'lucide-react';
import styles from '@/styles/admin.module.css';
import UserTasks from './UserTasks';
import AdminPermission from './Permission';
import AdminEditTask from './Edit_task';
import { useRouter } from 'next/router';

const Admin: React.FC = () => {
    const data = useContext(ThemeContext);
    const { theme } = data;
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [active, setActive] = useState(1);
    const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
    const router = useRouter();

    useEffect(() => {
        const adminStatus = localStorage.getItem('isAdmin');
        if (adminStatus) {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    }, []);

    const toggleMobileNav = (v: number) => {
        setMobileNavOpen(!mobileNavOpen);
        setActive(v);
    };

    const Content = (v: number) => {
        switch (v) {
            case 1:
                return <AdminPermission />;
            case 2:
                return <AdminPermission />;
            case 3:
                return <AdminEditTask />;
            default:
                return <UserTasks />;
        }
    };

    if (isAdmin === null) {
        return null; // or a loading spinner
    }

    if (!isAdmin) {
        router.push('/auth/signin');
        return null;
    }

    const handlesignout = () => {
        localStorage.removeItem('isAdmin');
        router.push('/auth/signin');
    };

    return (
        <div className={`${styles[`main_${theme}`]} ${styles.main}`}>

            {/* Desktop SideNav */}
            <div className={styles.desktop_sidenav}>
                <div className={styles.desktop_sidenav_header}>
                    <p>Admin panel</p>
                </div>
                <ul className={styles.menu_list}>
                    <li onClick={() => setActive(1)}>User Tasks</li>
                    <li onClick={() => setActive(2)}>Permission</li>
                    <li onClick={() => setActive(3)}>Edit / Delete Task</li>
                    <li onClick={ handlesignout} className={styles.side_signout}>sign out</li>
                </ul>
            </div>

            {/* Mobile SideNav */}
            <div className={styles.mobile_menu_icon} onClick={() => toggleMobileNav(active)}>
                <Menu size={24} />
            </div>

            <div className={`${styles.mobile_sidenav} ${mobileNavOpen ? styles.open : ''}`}>
                <ul className={styles.mobile_menu_list}>
                    <li onClick={() => toggleMobileNav(1)}>User Tasks</li>
                    <li onClick={() => toggleMobileNav(2)}>Permission</li>
                    <li onClick={() => toggleMobileNav(3)}>Edit / Delete Task</li>
                    <li onClick={handlesignout} className={styles.side_signout}>sign out</li>
                </ul>
            </div>

            {/* Main Content */}
            <div className={styles.main_content}>
                {Content(active)}
            </div>

        </div>
    );
};

export default Admin;
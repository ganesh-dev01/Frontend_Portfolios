import { Themecontext } from '@/Theme/Themestate';
import { useContext, useEffect, useState } from 'react';
import { FaHome, FaMusic, FaPaintBrush, FaUsers, FaPhone, FaUser, FaFileAlt } from 'react-icons/fa';
import { AiOutlineMenuFold } from "react-icons/ai";
import upperNav_img from '@/public/assets/upperNav_image.png';
import AdminHome from './Home';
import Submissions from './Submissions';
import Submitmusic from './Submitmusic';
import Account from './Account';
import styles from '@/styles/admin_styles/admin_dashboard.module.css';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabase';


interface AdminUser {
    id: number;
    email: string;
    name: string;
    profile_piclink: string;
    created_at: string;
}

const Admin_dashboard: React.FC = () => {
    const theme_data = useContext(Themecontext);
    const [isOpen, setIsOpen] = useState(false);
    const [menu, setMenu] = useState('Home');
    const [adminkey, setAdminkey] = useState<boolean>(false);
    const router = useRouter();
    const [admin, setAdmin] = useState<AdminUser | null>(null);

    const changetheme = () => {
        theme_data.setTheme(theme_data.theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {

        const check = localStorage.getItem('adminAuthenticated');
        if (check) {
            setAdminkey(true);
        } else {
            router.push('/auth/Admin_signin/154154541');
        }
    }, [router]);


    useEffect(() => {
        const fetchAdminData = async () => {
            const { data, error } = await supabase.from('admin_user').select('*').single();
            if (error) {
                console.error('Error fetching admin data:', error.message);
                return;
            }
            setAdmin(data);
        };

        fetchAdminData();
    }, []);


    return (
        <div className={`${styles[`main_dashboard_${theme_data.theme}`]} ${styles.main_dashboard}`}>
            {adminkey ? (
                <>
                    <div className={styles.side_nav}>
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
                                    {[{ name: 'Home', icon: FaHome }, { name: 'Submissions', icon: FaFileAlt }, { name: 'Submit Music', icon: FaMusic }, { name: 'Account', icon: FaUser }].map(
                                        (menu, index) => (
                                            <div
                                                key={index}
                                                className={styles.nav_item}
                                                onClick={() => {
                                                    setMenu(menu.name);
                                                    setIsOpen(false);
                                                }}>
                                                <menu.icon className={styles.icon} />
                                                <span className={styles.span}>{menu.name}</span>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Main side navigation */}
                        <div className={`${styles[`main_sidenav_${theme_data.theme}`]} ${styles.main_sidenav}`}>
                            <div className={`${styles.logo}`}>OV</div>
                            {[{ name: 'Home', icon: FaHome }, { name: 'Submissions', icon: FaFileAlt }, { name: 'Submit Music', icon: FaMusic }, { name: 'Account', icon: FaUser }].map(
                                (menu, index) => (
                                    <div
                                        key={index}
                                        className={styles.nav_item}
                                        onClick={() => setMenu(menu.name)}>
                                        <menu.icon className={styles.menu_icon} />
                                        <span className={styles.menu_name}>{menu.name}</span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    <div className={styles.main_content}>

                        <div className={styles.upper_nav}>
                            <div className={styles.welcome_box}>
                                <div className={styles.admin_details}>
                                    <div className={styles.admin_name}>Hello, {admin?.name || "Admin"}</div>
                                    <div className={styles.welcome_text}>Welcome back to Oktavist</div>
                                </div>
                                <div className={styles.image_box}>
                                    <img src={upperNav_img.src} alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className={styles.content_area}>
                            {menu === 'Home' && <AdminHome />}
                            {menu === 'Submissions' && <Submissions />}
                            {menu === 'Submit Music' && <Submitmusic />}
                            {menu === 'Account' && <Account />}
                        </div>
                    </div>
                </>
            ) : (
                <p>Please login first</p>
            )}
        </div>
    );
};
export default Admin_dashboard;

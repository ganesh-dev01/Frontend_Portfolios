import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FaUser } from 'react-icons/fa';
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import { FaHouseChimneyMedical } from "react-icons/fa6";
import ThemeContext from '@/Theme/Themestate';
import styles from '@/styles/admin/admin_dashboard.module.css';
import Add_doctor from '../Add_doctor';
import View_doctor from '../View_doctors';
import Account from '../Account';

interface AdminUser {
    id: number;
    email: string;
    name: string;
    profile_piclink: string;
    created_at: string;
}

const Admin_dashboard: React.FC = () => {
    const theme_data = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);
    const [menu, setMenu] = useState(null);
    const router = useRouter();
    const [admin, setAdmin] = useState<AdminUser | null>(null);

    useEffect(() => {
        const adminSession = localStorage.getItem("admin_session");

        if (!adminSession) {
            router.push("/auth/admin/signin/154154541");
        } else {
            setAdmin(JSON.parse(adminSession));
        }
    }, [router]);

    if (!admin) {
        return <p>Loading...</p>;
    }

    return (
        <div className={`${styles[`main_dashboard_${theme_data?.theme}`]} ${styles.main_dashboard}`}>
            {/* Side Navigation */}
            <div className={styles.side_nav}>
                {/* Mobile menu toggle */}
                {!isOpen && (
                    <div
                        className={styles[`menubar_${theme_data?.theme}`]}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <AiOutlineMenuFold />
                    </div>
                )}

                {/* Mobile side navigation */}
                {isOpen && (
                    <div className={styles[`mob_sidenav_${theme_data?.theme}`]}>
                        <div className={styles.mob_header}>
                            <div
                                className={styles.close_icon}
                                onClick={() => setIsOpen(false)}
                            >
                                ✕
                            </div>
                        </div>

                        <div className={styles.mob_nav_items}>
                            {[
                                { name: 'Add Doctor', icon: IoIosAddCircle },
                                { name: 'View Doctors', icon: FaUserDoctor },
                                { name: 'Account', icon: FaUser }
                            ].map((menu, index) => (
                                <div
                                    key={index}
                                    className={styles.nav_item}
                                    onClick={() => {
                                        setMenu(menu.name as any);
                                        setIsOpen(false);
                                    }}
                                >
                                    <menu.icon className={styles.icon} />
                                    <span className={styles.span}>{menu.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Main side navigation */}
                <div className={`${styles[`main_sidenav_${theme_data?.theme}`]} ${styles.main_sidenav}`}>
                    <div className={styles.logo}><FaHouseChimneyMedical /></div>
                    {[
                        { name: 'Add Doctor', icon: IoIosAddCircle },
                        { name: 'View Doctors', icon: FaUserDoctor },
                        { name: 'Account', icon: FaUser }
                    ].map((menu, index) => (
                        <div
                            key={index}
                            className={styles.nav_item}
                            onClick={() => setMenu(menu.name as any)}
                        >
                            <menu.icon className={styles.menu_icon} />
                            <span className={styles.menu_name}>{menu.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className={styles.main_content}>
                {/* Upper Navigation */}
                <div className={styles.upper_nav}>
                    <div className={styles.welcome_box}>
                        <div className={styles.admin_details}>
                            <div className={styles.admin_name}>Hello, {admin.name}</div>
                            <div className={styles.welcome_text}>Welcome back to MediSched</div>
                        </div>
                        <div className={styles.image_box}>
                            {/* Admin profile picture (if available) */}
                            {admin.profile_piclink && <img src={admin.profile_piclink} alt="Admin" />}
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className={styles.content_area}>
                    {menu === 'Add Doctor' && <Add_doctor />}
                    {menu === 'View Doctors' && <View_doctor />}
                    {menu === 'Account' && <Account />}
                    {menu === null && <Account />}
                </div>
            </div>
        </div>
    );
};

export default Admin_dashboard;

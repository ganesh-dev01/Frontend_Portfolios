import { useContext, useEffect, useState } from 'react';
import { FaFileMedical } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import ThemeContext from '@/Theme/Themestate';
import { FaMoon, FaStethoscope, FaSun } from 'react-icons/fa';
import { SlCalender } from "react-icons/sl";
import styles from '@/styles/doctor/dct_dashboard.module.css'
import PatientAppo from '../PatientAppo.tsx';
import Calender from '../Calender';
import Doctor_Profile from '../Profile/index';
import { useRouter } from 'next/router.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Doctor_dashboard: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [menu, setMenu] = useState("");
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const theme_data = useContext(ThemeContext);

    useEffect(() => {
        const doctorSession = localStorage.getItem("doctor_session");

        if (!doctorSession) {
            toast.error("Unauthorized! Redirecting to login...", { position: "top-center" });
            setTimeout(() => {
                router.push('/auth/doctor/signin');
            }, 2000);
        } else {
            setLoading(false);
        }
    }, [router]);


    const Menu_oparetor = () => {
        switch (menu) {
            case "1":
                return <PatientAppo />
            case "2":
                return <Calender />
            case "3":
                return <Doctor_Profile />
            default:
                return <PatientAppo />
        }
    }

    const changeTheme = () => {
        theme_data?.setTheme(theme_data?.theme === "light" ? "dark" : "light");
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div className={styles[`main_dashboard_${theme_data?.theme}`]}>

            {/* Light/Dark Mode Toggle Button */}
            <div className={styles.themebtn_area}>
                <button className={styles.toggle_btn} onClick={changeTheme}>
                    {theme_data?.theme === "light" ? <FaMoon /> : <FaSun />}
                </button>
            </div>

            <div className={styles.menu_bar_icon} onClick={() => setSidebarOpen(true)}>
                <FaBars />
            </div>


            <div className={`${styles.sidebar} ${sidebarOpen ? styles.sidebar_open : ""}`}>

                <div className={styles.brand_area}>

                    <div className={styles.close_area} onClick={() => setSidebarOpen(false)}>
                        <IoCloseOutline />
                    </div>

                    <div className={styles.brand_logo}>
                        <FaStethoscope />
                    </div>

                    <p className={styles.brand_name}>
                        MediSched
                    </p>
                </div>

                <div className={styles.menu_area}>
                    <div className={styles.menu_item} onClick={() => { setMenu("1"); setSidebarOpen(false) }}>
                        <div className={styles.menu_icon}>
                            <FaFileMedical />
                        </div>
                        <p>Patient appointments</p>
                    </div>

                    <div className={styles.menu_item} onClick={() => { setMenu("2"); setSidebarOpen(false) }}>
                        <div className={styles.menu_icon}>
                            <SlCalender />
                        </div>
                        <p>Calender view</p>
                    </div>

                    <div className={styles.menu_item} onClick={() => { setMenu("3"); setSidebarOpen(false) }}>
                        <div className={styles.menu_icon}>
                            <FaUser />
                        </div>
                        <p>Profile</p>
                    </div>

                </div>
            </div>


            <div className={styles.main_content}>
                {Menu_oparetor()}
            </div>
        </div>
    );
};

export default Doctor_dashboard;

import { Themecontext } from '@/Theme/Themestate';
import { useContext, useState } from 'react';
import { IoMdHome } from "react-icons/io";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { BsMusicNoteList } from "react-icons/bs";
import { RiNeteaseCloudMusicLine } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import styles from '@/styles/user_styles/dashboard.module.css';
import Home from './Home';
import Library from './Library';
import Artists from './Artist';
import Profile from './Profile';

const Dashboard: React.FC = () => {
    const data_theme = useContext(Themecontext);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [menu, setMenu] = useState("");

    const Menu_oparetor = () => {
        switch (menu) {
            case "home":
                return <Home />;
            case "library":
                return <Library />;
            case "artists":
                return <Artists />;
            case "profile":
                return <Profile />;
            default:
                return <Home />;
        }
    }

    return (
        <div className={`${styles[`main_dashboard_${data_theme}`]} ${styles.main_dashboard}`}>


            <div className={styles.menu_bar_icon} onClick={() => setSidebarOpen(true)}>
                <FaBars />
            </div>


            <div className={`${styles.sidebar} ${sidebarOpen ? styles.sidebar_open : ""}`}>

                <div className={styles.brand_area}>

                    <div className={styles.close_area} onClick={() => setSidebarOpen(false)}>
                        <IoCloseOutline />
                    </div>

                    <div className={styles.brand_logo}>
                        <RiNeteaseCloudMusicLine />
                    </div>

                    <p className={styles.brand_name}>
                        Oktavist
                    </p>
                </div>

                <div className={styles.menu_area}>
                    <div className={styles.menu_item} onClick={() => { setMenu("home"); setSidebarOpen(false) }}>
                        <div className={styles.menu_icon}>
                            <IoMdHome />
                        </div>
                        <p>Home</p>
                    </div>

                    <div className={styles.menu_item} onClick={() => { setMenu("library"); setSidebarOpen(false) }}>
                        <div className={styles.menu_icon}>
                            <MdOutlineLibraryMusic />
                        </div>
                        <p>Library</p>
                    </div>

                    <div className={styles.menu_item} onClick={() => { setMenu("artists"); setSidebarOpen(false) }}>
                        <div className={styles.menu_icon}>
                            <BsMusicNoteList />
                        </div>
                        <p>Artists</p>
                    </div>

                    <div className={styles.menu_item} onClick={() => { setMenu("profile"); setSidebarOpen(false) }}>
                        <div className={styles.menu_icon}>
                            <CgProfile />
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

export default Dashboard;

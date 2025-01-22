import Admin_uppernav from "@/Components/Admin_upperNav";
import { ThemeContext } from "@/Theme/Themestate";
import { useContext } from "react";
import styles from '@/styles/admin.module.css';
import Admin_sideNav from "@/Components/Admin_sideNav";
import SubmitMusic from "./SubmitMusic";
import SubmitArtist from "./SubmitArt";
import Submissions from "./Submissions";
import { useSelector } from "react-redux";

const Admin = () => {
    const theme_data = useContext(ThemeContext);
    const nav_value = useSelector((state) => state.nav);


    const renderContent = () => {
        switch (nav_value) {
            case 1:
                return null;
            case 2:
                return <Submissions />;
            case 3:
                return <SubmitMusic />;
            case 4:
                return <SubmitArtist />;
            case 5:
                return null;
            case 6:
                return null;
            case 7:
                return null;
            case 8:
                return null;
            default:
                return null;
        }
    };

    return (
        <div className={styles[`main_${theme_data.theme}`]}>
            <div className={styles.sidenav_area}>
                <Admin_sideNav />
            </div>

            <div className={styles.uppernav_area}>
                <Admin_uppernav />
            </div>

            <div className={styles.content_area}>
                {renderContent()}
            </div>
        </div>
    );
};

export default Admin;

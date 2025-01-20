import Admin_uppernav from "@/Components/Admin_upperNav";
import { ThemeContext } from "@/Theme/Themestate";
import { useContext } from "react";
import styles from '@/styles/Admin_styles/admin.module.css'
import Admin_sideNav from "@/Components/Admin_sideNav";
import SubmitMusic from "./SubmitMusic";
import SubmitArtist from "./SubmitArt";
import Submissions from "./Submissions";

const Admin = () => {
    const theme_data = useContext(ThemeContext);
    return (
        <div className={styles[`main_${theme_data.theme}`]}>

            <div className={styles.sidenav_area}>
                <Admin_sideNav />
            </div>

            <div className={styles.uppernav_area}>
                <Admin_uppernav />
            </div>

            <div className={styles.content_area}>
                {/* <SubmitMusic /> */}
                {/* <SubmitArtist /> */}

                <Submissions />
            </div>



        </div>
    )
}

export default Admin
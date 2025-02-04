import { Themecontext } from "@/Theme/Themestate";
import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { MdPhoneAndroid } from "react-icons/md";
import user_profile_img from '@/public/assets/music cover.png';
import cover_pic from '@/public/assets/hd_phn2.jpg';
import styles from '@/styles/user_styles/profile.module.css';


const Confirm_box: React.FC = () => {
    return (
        <div className={styles.confirm_container}>
            <div className={styles.confirm_box}>
                <div className={styles.confirm_box_header}>
                    <h2>Confirmation</h2>
                </div>
                <div className={styles.confirm_box_body}>
                    <p>Are you sure you want to sign out this account?</p>
                </div>
                <div className={styles.confirm_box_footer}>
                    <button>Yes</button>
                    <button>No</button>
                </div>
            </div>
        </div>

    )
}

const Profile: React.FC = () => {
    const data_theme = useContext(Themecontext);


    return (
        <div className={`${styles[`main_dashboard_${data_theme}`]} ${styles.main_dashboard}`}>

            {/* <Confirm_box /> */}

            <div className={styles.profile_pic}>
                <img src={user_profile_img.src} alt="profile_pic" />
            </div>

            <div className={styles.profile_header}>
                <img src={cover_pic.src} alt="cover_pic" />
            </div>

            <div className={styles.profile_body}>

                <div className={styles.profile_info_container}>

                    <div className={styles.profile_name_box}>
                        <div className={styles.icon}><FaUser /></div>
                        <p className={styles.profile_name}>Ganesh saha</p>
                    </div>

                    <div className={styles.profile_email_box}>
                        <div className={styles.icon}><SiMinutemailer /></div>
                        <p className={styles.profile_email}>ganeshsaha403@gmail.com</p>
                    </div>

                    <div className={styles.profile_phone_box}>
                        <div className={styles.icon}><MdPhoneAndroid /></div>
                        <p className={styles.profile_phone}>9123680476</p>
                    </div>

                </div>

                <div className={styles.btn_container}>
                    <button className={styles.signout_btn}>Sign out</button>
                </div>

            </div>

        </div>
    )
}

export default Profile;
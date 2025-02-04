import styles from '@/styles/admin_styles/admin_profile.module.css';
import { Themecontext } from '@/Theme/Themestate';
import { useContext } from 'react';
import profile_pic from '@/public/assets/music cover.png';

const Account: React.FC = () => {
    const theme_data = useContext(Themecontext);

    return (
        <div className={`${styles[`main_dashboard_${theme_data.theme}`]} ${styles.main_dashboard}`}>

            <div className={styles.profile_container}>
                <div className={styles.profile_pic_container}>
                    <img src={profile_pic.src} alt="profile_pic" />
                </div>
            </div>

            <div className={styles.profile_info_container}>

                <div className={styles.profile_content}>
                    <h2 className={styles.profile_name}>Ganesh Saha</h2>
                    <p className={styles.profile_email}>ganesh.saha@email.com</p>
                    <p className={styles.profile_date}>Joined: August 10, 2023</p>
                </div>

                <div className={styles.btn_container}>
                    <button className={styles.signout_btn}>Sign Out</button>
                </div>
            </div>






        </div>
    );
};

export default Account;

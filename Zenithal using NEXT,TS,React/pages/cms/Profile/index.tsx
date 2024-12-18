import React, { useContext } from "react";
import ThemeContext from "@/ThemeContext/ThemeContext";
import styles from "@/styles/profile.module.css";

const Profile: React.FC = () => {
    const theme_data = useContext<any>(ThemeContext);

    return (
        <div className={styles[`main_container_${theme_data.theme}`]}>
            <div className={styles.profileBox}>
                <div className={styles.profilePicContainer}>
                    <img
                        src="/path-to-profile-pic.jpg"
                        alt="Profile"
                        className={styles.profilePic}
                    />
                </div>
                <h2 className={styles.profileName}>John Doe</h2>
                <div className={styles.infoSection}>
                    <p>
                        <span className={styles.infoLabel}>First Name:</span> John
                    </p>
                    <p>
                        <span className={styles.infoLabel}>Last Name:</span> Doe
                    </p>
                    <p>
                        <span className={styles.infoLabel}>Email:</span> johndoe@example.com
                    </p>
                    <p>
                        <span className={styles.infoLabel}>Role:</span> Frontend Developer
                    </p>
                    <p>
                        <span className={styles.infoLabel}>Created At:</span> January 1, 2024
                    </p>
                </div>
                <div className={styles.footer}>
                    <p>“Strive for progress, not perfection.”</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;

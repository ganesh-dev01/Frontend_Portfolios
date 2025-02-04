import styles from '@/styles/admin_styles/admin_home.module.css';
import { Themecontext } from '@/Theme/Themestate';
import { useContext } from 'react';
import { FaTwitter, FaSpotify } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';

const AdminHome: React.FC = () => {
    const theme_data = useContext(Themecontext);

    return (
        <div className={`${styles[`main_dashboard_${theme_data.theme}`]} ${styles.main_dashboard}`}>

            <section className={styles.section}>
                <h2 className={styles.heading}>About our website</h2>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore perspiciatis corrupti sunt minima distinctio beatae
                    magni at recusandae optio consequuntur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque illum soluta et
                    doloremque provident ipsa, tempora rerum! Dolorum esse at aut iure fuga iste velit est ad natus necessitatibus iusto,
                    omnis consequatur excepturi vel sit, harum consequuntur! Saepe numquam, obcaecati 
                </p>

                <div className={styles.icons}>
                    <FaTwitter className={styles.icon} />
                    <IoLogoYoutube className={styles.icon} />
                    <FaSpotify className={styles.icon} />
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.heading}>Terms and conditions</h2>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <a href="#" className={styles.link}>Click to see the full terms and conditions</a>
            </section>

            <section className={styles.section}>
                <h2 className={styles.heading}>Privacy and policy of website</h2>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <a href="#" className={styles.link}>Click to see the full privacy and policy</a>
            </section>
        </div>
    );
};

export default AdminHome;

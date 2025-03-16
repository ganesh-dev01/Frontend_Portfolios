import styles from '@/styles/Footer.module.css';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <nav className={styles.navLinks}>
                <a href="#">About</a>
                <a href="#">Website</a>
                <a href="#">Policies</a>
                <a href="#">Contact</a>
                <a href="#">Feedback</a>
                <a href="#">Blog</a>
            </nav>

            <p className={styles.copyright}>
                &copy;2023 See Beach Country Convention & Visitors Bureau.
                <br />
                Website Designed by AK Design.
            </p>

            <div className={styles.socialIcons}>
                <a href="#" className={styles.icon}><FaTwitter /></a>
                <a href="#" className={styles.icon}><FaFacebookF /></a>
                <a href="#" className={styles.icon}><FaInstagram /></a>
            </div>
        </footer>
    );
};

export default Footer;

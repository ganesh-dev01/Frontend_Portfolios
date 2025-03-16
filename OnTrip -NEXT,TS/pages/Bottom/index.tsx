import styles from '@/styles/Bottom.module.css';
import Footer from '@/Components/Footer';

const Bottom: React.FC = () => {
    return (
        <div className={styles.bottom_main}>
            <p className={styles.subtitle}>We will see you</p>
            <h1 className={styles.title}>Enjoy 30% Off On First Trip</h1>

            <div className={styles.inputContainer}>
                {/* Destination Dropdown */}
                <div className={styles.selectWrapper}>
                    <select className={styles.dropdown}>
                        <option>Destinations</option>
                    </select>
                </div>

                {/* Packages Dropdown */}
                <div className={styles.selectWrapper}>
                    <select className={styles.dropdown}>
                        <option>Packages</option>
                    </select>
                </div>

                {/* Date Input */}
                <input type="date" className={styles.dateInput} />

                {/* Book Now Button */}
                <button className={styles.bookButton}>Book Now</button>
            </div>

            <Footer />
        </div>
    );
};

export default Bottom;

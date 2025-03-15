import Navbar from '@/Components/Navbar'
import styles from '@/styles/Home.module.css'
import location_icon from '../../public/assets/location_icon.png';
import cal_icon from '../../public/assets/calender_icon.png';
import bill_icon from '../../public/assets/bill_icon.png';
import explore_icon from '../../public/assets/explore_icon.png';

const Home: React.FC = () => {
    return (
        <div>
            <div className={styles.home_main}>
                <Navbar />
                <div className={styles.heading}>
                    <h4 className={styles.hd1}>Let's make your</h4>
                    <h4 className={styles.hd2}>Dream Vacation</h4>
                </div>

                <div className={styles.home_bottom}>

                    <div className={styles.bottom_bar}>

                        <div className={`${styles.box} ${styles.location_box}`}>
                            <img src={location_icon.src} alt="Location Icon" />
                            <div>
                                <p className={styles.main_text}>Location</p>
                                <p className={styles.sub_text}>Where do you want to go?</p>
                            </div>
                        </div>
                        <div className={`${styles.box} ${styles.date_box}`}>
                            <img src={cal_icon.src} alt="Calendar Icon" />
                            <div>
                                <p className={styles.main_text}>Date</p>
                                <p className={styles.sub_text}>Choose Date</p>
                            </div>
                        </div>
                        <div className={`${styles.box} ${styles.pricing_box}`}>
                            <img src={bill_icon.src} alt="Bill Icon" />
                            <div>
                                <p className={styles.main_text}>Pricing</p>
                                <p className={styles.sub_text}>Choose your budget</p>
                            </div>
                        </div>
                        <div className={`${styles.box} ${styles.explore_box}`}>
                            <button className={styles.explore_button}>
                                <img src={explore_icon.src} alt="Explore Icon" />
                                Explore Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
import styles from '@/styles/Trip.module.css';
import { FaStar, FaPlaneDeparture } from 'react-icons/fa';
import greece from '@/public/assets/greece.jpg';
import maldivs from '@/public/assets/maldivs.jpg';
import denmark from '@/public/assets/denmark.jpg';

const Trippackages: React.FC = () => {
    return (
        <div className={styles.trip_main}>
            <p className={styles.heading}>Trip Packages</p>
            <div className={styles.trip_container}>
                
                {/* Greece Card */}
                <div className={styles.trip_card}>
                    <img src={greece.src} alt="Greece" className={styles.trip_image} />

                    <div className={styles.trip_content}>

                        <div className={styles.trip_info}>
                            <h3>Greece, <br></br>Balos Beach</h3>
                            <span className={styles.rating}><FaStar /> 4.8K</span>
                        </div>

                        <div className={styles.trip_details}>
                            <p>15,000</p>
                            <span><FaPlaneDeparture /> 7 Days Trip</span>
                        </div>
                        <button className={styles.travel_button}>Travel Now →</button>
                    </div>
                </div>

                {/* Denmark Card */}
                <div className={styles.trip_card}>
                    <img src={denmark.src} alt="Denmark" className={styles.trip_image} />
                    <div className={styles.trip_content}>
                        <div className={styles.trip_info}>
                            <h3>Denmark, <br></br> Western Australia</h3>
                        </div>
                        <p className={`${styles.description} ${styles.hidden_description}`}>
                            Travel and find happiness within yourself. Experience holidays in Denmark.
                        </p>
                        <div className={styles.trip_details}>
                            <p>15,000</p>
                            <span><FaPlaneDeparture /> 7 Days Trip</span>
                        </div>
                        <button className={styles.travel_button}>Travel Now →</button>
                    </div>
                </div>

                {/* Maldives Card */}
                <div className={styles.trip_card}>
                    <img src={maldivs.src} alt="Maldives" className={styles.trip_image} />
                    <div className={styles.trip_content}>
                        <div className={styles.trip_info}>
                            <h3>Maldives,<br></br> Silver Beach Resort</h3>
                            <span className={styles.rating}><FaStar /> 4.8K</span>
                        </div>
                        <div className={styles.trip_details}>
                            <p>35,000</p>
                            <span><FaPlaneDeparture /> 15 Days Trip</span>
                        </div>
                        <button className={styles.travel_button}>Travel Now →</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trippackages;

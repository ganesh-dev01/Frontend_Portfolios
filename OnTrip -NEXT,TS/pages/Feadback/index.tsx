import styles from '@/styles/Feadback.module.css';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import user1 from '@/public/assets/greece.jpg';
import user2 from '@/public/assets/greece.jpg';

const Feadback: React.FC = () => {
    return (
        <div className={styles.feadback_main}>

            <p className={styles.heading}>What Travelers Are Saying</p>

            <p className={styles.sub_heading}>
                “I am a traveler and ON TRIP Travels helps me a lot <br />
                in finding interesting tourist destinations and of <br />
                course the price offers is very worth it”.
            </p>

            <div className={styles.reviews}>

                <div className={styles.card}>
                    <div className={styles.user_dp}>
                        <Image src={user1} alt="Emily Smith" className={styles.user_image} />
                    </div>
                    <div>
                        <p className={styles.user_name}>Emily Smith</p>
                        <div className={styles.stars}>
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} color="#FFA500" />
                            ))}
                        </div>
                        <p className={styles.review_text}>
                            Good trip. The team of ON TRIP tours and travel was very supportive and maintained
                            prompt communication with us.
                        </p>
                    </div>
                </div>

                <div className={styles.card}>
                <div className={styles.user_dp}>
                        <Image src={user1} alt="Emily Smith" className={styles.user_image} />
                    </div>
                    <div>
                        <p className={styles.user_name}>Lord Martin</p>
                        <div className={styles.stars}>
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} color="#FFA500" />
                            ))}
                        </div>
                        <p className={styles.review_text}>
                            Good trip. The team of ON TRIP tours and travel was very supportive and maintained
                            prompt communication with us.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.subscribe_section}>
                <p>Subscribe to get information, latest news and other interesting offers about ON TRIP Travels</p>
                <div className={styles.input_container}>
                    <input type="email" placeholder="Type your email here" />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Feadback;

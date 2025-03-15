import styles from '@/styles/Categories.module.css';
import hotels from '@/public/assets/hotels.png'
import notification from '@/public/assets/notification.png';
import resturant from '@/public/assets/restaurant.png';
import booking from '@/public/assets/booking.png';
import travel from '@/public/assets/travel.png';
import place_image from '@/public/assets/placeimage.png';


const Categories: React.FC = () => {
    return (
        <div className={styles.categories_main}>
            <p className={styles.heading}>Our Popular Categories</p>

            <div className={styles.featureBox}>
                <div className={styles.feature_item}>
                    <img src={hotels.src} alt="hotels" />
                    Hotels
                </div>
                <div className={styles.feature_item}>
                    <img src={notification.src} alt="hotels" />
                    Thing to do
                </div>
                <div className={styles.feature_item}>
                    <img src={resturant.src} alt="hotels" />
                    Restaurant
                </div>
                <div className={styles.feature_item}>
                    <img src={booking.src} alt="hotels" />
                    Easy Booking
                </div>
                <div className={styles.feature_item}>
                    <img src={travel.src} alt="hotels" />
                    Tour
                </div>
            </div>

            <div className={styles.place_box}>
                <div className={styles.place_imagebox}>
                    <img src={place_image.src} alt="place_image" />
                </div>

                <div className={styles.textBox}>

                    <div className={styles.PlaceBox}>
                        <p className={styles.bestplaceHd}>Take The <br></br> Best Place</p>
                    </div>

                    <div className={styles.placeInfoBox}>
                        <p className={styles.placeInfo}>
                            Plan a perfect getway in a place where the sun shines all year.<br></br>
                            Explore pristine beaches, enjoy relaxed activities, and pamper <br></br>yourself
                            at the many wellness retreats
                        </p>

                        <div className={styles.btnBox}>
                            <button className={styles.btn}>See More</button>
                        </div>

                    </div>

                </div>


            </div>

        </div>
    )
}

export default Categories;
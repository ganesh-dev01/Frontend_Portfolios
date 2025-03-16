import styles from '@/styles/Destination.module.css';
import swd from '@/public/assets/switzerland.jpg';
import spn from '@/public/assets/spain.jpg';
import lnd from '@/public/assets/london.jpg';
import maldivs from '@/public/assets/maldivs.jpg';
import greece from '@/public/assets/greece.jpg';
import bali from '@/public/assets/bali.jpg';

const Destination = () => {
  return (
    <div className={styles.destination_main}>

      <p className={styles.heading}>Most Popular Destinations</p>

      <div className={styles.grid_container}>

        <div className={styles.left_section}>
          <div className={`${styles.grid_item} ${styles.large}`}>
            <img src={swd.src} alt='Switzerland' />
            <span className={styles.overlay}>Switzerland</span>
          </div>
          <div className={styles.flex_row}>
            <div className={`${styles.grid_item} ${styles.medium}`}>
              <img src={spn.src} alt='Spain' />
              <span className={styles.overlay}>Spain</span>
            </div>
            <div className={`${styles.grid_item} ${styles.medium}`}>
              <img src={lnd.src} alt='London' />
              <span className={styles.overlay}>London</span>
            </div>
          </div>
        </div>

        <div className={styles.right_section}>
          <div className={`${styles.grid_item} ${styles.small}`}>
            <img src={maldivs.src} alt='Maldives' />
            <span className={styles.overlay}>Maldives</span>
          </div>
          <div className={`${styles.grid_item} ${styles.small}`}>
            <img src={greece.src} alt='Greece' />
            <span className={styles.overlay}>Greece</span>
          </div>
          <div className={`${styles.grid_item} ${styles.small}`}>
            <img src={bali.src} alt='Bali' />
            <span className={styles.overlay}>Bali</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;

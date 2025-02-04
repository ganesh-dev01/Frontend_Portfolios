import { Themecontext } from '@/Theme/Themestate';
import { useContext } from 'react';
import { PiHandTapFill } from "react-icons/pi";
import artist_cover_pic from '@/public/assets/music cover.png';
import styles from '@/styles/user_styles/artist.module.css';
import { useRouter } from 'next/router';

const Artists: React.FC = () => {
    const data_theme = useContext(Themecontext);
    const router = useRouter();
    return (
        <div className={`${styles[`main_dashboard_${data_theme}`]} ${styles.main_dashboard}`}>

            <div className={styles.artist_card}>
                <div className={styles.artist_cover_pic}>
                    <img src={artist_cover_pic.src} alt="" />
                </div>
                <div className={styles.artist_info}>
                    <p className={styles.artist_name}>Artist name</p>
                </div>
                <p className={styles.tapmsg}
                    onClick={() => router.push(`/cms/user/Artist_Details/${154544}`)}><PiHandTapFill /> Tap to visit playlist</p>
            </div>

          




        </div>
    )
}

export default Artists;
import { Themecontext } from '@/Theme/Themestate';
import { useContext } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import music_cover_pic from '@/public/assets/music cover.png'
import styles from '@/styles/user_styles/home.module.css'

const Home: React.FC = () => {
    const data_theme = useContext(Themecontext);
    return (
        <div className={`${styles[`main_dashboard_${data_theme}`]} ${styles.main_dashboard}`}>

            <div className={styles.home_header}>

                <div className={styles.search_bar}>

                    <div className={styles.search_icon}>
                        <IoSearchOutline />
                    </div>

                    <input type='search' placeholder='Search' className={styles.search_input} />

                </div>

            </div>

            <div className={styles.category_box}>

                <div className={styles.category_item}>
                    <p>pop</p>
                </div>

                <div className={styles.category_item}>
                    <p>classical</p>
                </div>

                <div className={styles.category_item}>
                    <p>Rap</p>
                </div>

            </div>

            <div className={styles.music_box}>

                <div className={styles.music_item}>

                    <div className={styles.cover_image}>
                        {music_cover_pic && <img src={music_cover_pic.src} alt="music cover" />}
                        <div className={styles.play_button}><FaPlay /></div>
                    </div>

                    <div className={styles.music_info}>
                        <p className={styles.music_title}>Music Title</p>
                        <p className={styles.music_artist}>Artist</p>
                    </div>
                </div>

                <div className={styles.music_item}>

                    <div className={styles.cover_image}>
                        {music_cover_pic && <img src={music_cover_pic.src} alt="music cover" />}
                        <div className={styles.play_button}><FaPlay /></div>
                    </div>

                    <div className={styles.music_info}>
                        <p className={styles.music_title}>Music Title</p>
                        <p className={styles.music_artist}>Artist</p>
                    </div>
                </div>

                <div className={styles.music_item}>

                    <div className={styles.cover_image}>
                        {music_cover_pic && <img src={music_cover_pic.src} alt="music cover" />}
                        <div className={styles.play_button}><FaPlay /></div>
                    </div>

                    <div className={styles.music_info}>
                        <p className={styles.music_title}>Music Title</p>
                        <p className={styles.music_artist}>Artist</p>
                    </div>
                </div>

                <div className={styles.music_item}>

                    <div className={styles.cover_image}>
                        {music_cover_pic && <img src={music_cover_pic.src} alt="music cover" />}
                        <div className={styles.play_button}><FaPlay /></div>
                    </div>

                    <div className={styles.music_info}>
                        <p className={styles.music_title}>Music Title</p>
                        <p className={styles.music_artist}>Artist</p>
                    </div>
                </div>


            </div>


        </div>
    )

}

export default Home;
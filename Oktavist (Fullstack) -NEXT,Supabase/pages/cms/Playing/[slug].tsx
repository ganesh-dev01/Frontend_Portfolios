import { Themecontext } from '@/Theme/Themestate';
import { useContext, useState } from 'react';
import music_cover_pic from '@/public/assets/music cover.png';
import { FaPlay, FaPause, FaHeart, FaRegHeart, FaStar, FaRegStar } from 'react-icons/fa';
import styles from '@/styles/playing.module.css';

const Playing: React.FC = () => {
    const data_theme = useContext(Themecontext);
    const [isPlaying, setIsPlaying] = useState(false);
    const [liked, setLiked] = useState(false);
    const [favorited, setFavorited] = useState(false);
    const [progress, setProgress] = useState(30);

    return (
        <div className={`${styles[`main_dashboard_${data_theme}`]} ${styles.main_dashboard}`}>
            <div className={styles.cover_container}>
                <img src={music_cover_pic.src} alt="Cover" className={styles.cover_image} />
            </div>

            <div className={styles.song_info}>
                <h2 className={styles.song_name}>Song Name</h2>
                <p className={styles.artist_name}>Artist Name</p>
            </div>

            <div className={styles.progress_container}>
                <input
                    type="range"
                    min="0" max="100"
                    value={progress}
                    className={styles.slider}
                    onChange={(e) => setProgress(Number(e.target.value))}
                />
                <span className={styles.duration}>2:45</span>
            </div>

            <div className={styles.controls}>
                <button className={styles.control_button} onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? <FaPause className={styles.glow} /> : <FaPlay className={styles.glow} />}
                </button>
                <button className={styles.control_button} onClick={() => setLiked(!liked)}>
                    {liked ? <FaHeart className={styles.liked} /> : <FaRegHeart className={styles.glow} />}
                </button>
                <button className={styles.control_button} onClick={() => setFavorited(!favorited)}>
                    {favorited ? <FaStar className={styles.favorited} /> : <FaRegStar className={styles.glow} />}
                </button>
            </div>
        </div>
    );
}

export default Playing;

import { Themecontext } from '@/Theme/Themestate';
import { useContext, useState } from 'react';
import styles from '@/styles/admin_styles/submissions.module.css';
import { FaPlay, FaEllipsisV, FaDownload, FaTrash } from 'react-icons/fa';
import music_icon from '@/public/assets/music_icon.png';


const songs = [
    { title: "Breath Me", artist: "Sia" },
    { title: "Cinnamon Girl", artist: "Lana Del Rey" },
    { title: "Majesty", artist: "Eminem" },
    { title: "Country Song", artist: "Seether" },
];



const Confirm_box: React.FC = () => {
    return (
        <div className={styles.confirm_container}>
            <div className={styles.confirm_box}>
                <div className={styles.confirm_box_header}>
                    <h2>Confirmation</h2>
                </div>
                <div className={styles.confirm_box_body}>
                    <p>Are you sure you want to sign out this account?</p>
                </div>
                <div className={styles.confirm_box_footer}>
                    <button>Yes</button>
                    <button>No</button>
                </div>
            </div>
        </div>

    )
}


const MusicCard: React.FC<{ song: { title: string; artist: string }; index: number }> = ({ song, index }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={styles.music_card}>
            <div className={styles.music_image}>
                <img src={music_icon.src} alt="music_icon" />
            </div>

            <div className={styles.overlay}>
                <FaPlay className={styles.play_icon} />
                <div className={styles.menu_wrapper}>
                    <FaEllipsisV className={styles.menu_icon} onClick={() => setMenuOpen(!menuOpen)} />
                    {menuOpen && (
                        <div className={styles.dropdown_menu}>
                            <button><FaDownload /> Download</button>
                            <button><FaTrash /> Delete</button>
                        </div>
                    )}
                </div>
            </div>

            <p className={styles.song_title}>{song.title}</p>
            <p className={styles.song_artist}>{song.artist}</p>
        </div>
    );
};

const Submissions: React.FC = () => {
    const theme_data = useContext(Themecontext);

    return (
        <div className={`${styles[`main_dashboard_${theme_data.theme}`]} ${styles.main_dashboard}`}>

            {/* <Confirm_box /> */}

            <div className={styles.header}>
                <p className={styles.head}>My Submissions</p>
            </div>

            <div className={styles.content}>
                {songs.map((song, index) => (
                    <MusicCard key={index} song={song} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Submissions;

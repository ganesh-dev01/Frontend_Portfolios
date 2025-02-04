import { Themecontext } from "@/Theme/Themestate";
import { useContext, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import artist_cover_pic from '@/public/assets/music cover.png';
import styles from '@/styles/user_styles/artist_detail.module.css';

const Artist_Details: React.FC = () => {
    const data_theme = useContext(Themecontext);
    const [playing, setPlaying] = useState<number | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = (index: number) => {
        if (playing === index) {
            setPlaying(null);
            setIsPlaying(false);
        } else {
            setPlaying(index);
            setIsPlaying(true);
        }
    };

    const songs = [
        { title: "Song One", album: "Album A" },
        { title: "Song Two", album: "Album B" },
        { title: "Song One", album: "Album A" },
        { title: "Song Two", album: "Album B" },
        { title: "Song One", album: "Album A" },
    ];

    return (
        <>
            <div className={`${styles[`main_dashboard_${data_theme}`]} ${styles.main_dashboard}`}>

                <div className={styles.artist_container}>

                    <div className={styles.artist_image_container}>
                        <div className={styles.artist_image}>
                            <img src={artist_cover_pic.src} alt="artist_cover_pic" />
                        </div>
                    </div>


                    <div className={styles.artist_info_container} style={{ height: isPlaying ? '85vh' : '100vh' }}>

                        <div className={styles.artist_header}>
                            <div className={styles.app_name}>
                                <p>Oktavist</p>
                            </div>
                            <div className={styles.artist_hd}>
                                <p>Artist name</p>
                            </div>
                        </div>

                        <div className={styles.music_list}>
                            <table className={styles.music_table}>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Album</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {songs.map((song, index) => (
                                        <tr key={index}>
                                            <td>{song.title}</td>
                                            <td>{song.album}</td>
                                            <td>
                                                <button onClick={() => togglePlay(index)} className={styles.play_button}>
                                                    {playing === index ? <FaPause /> : <FaPlay />}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


                {isPlaying && (

                    <div className={styles.music_box} style={{ display: playing !== null ? "block" : "none" }}>
                        <p className={styles.now_playing}>Now Playing: {songs[playing!]?.title}</p>
                        <div className={styles.wave_container}>
                            {[...Array(200)].map(() => <>
                                <span className={styles.wave}></span>
                            </>)}
                        </div>
                    </div>


                )}
            </div>
        </>
    );
};

export default Artist_Details;

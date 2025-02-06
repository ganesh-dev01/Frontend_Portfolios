import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Themecontext } from "@/Theme/Themestate";
import { supabase } from "@/lib/supabase";
import { FaPlay, FaPause } from "react-icons/fa";
import styles from "@/styles/user_styles/artist_detail.module.css";

interface Song {
    music_title: string;
    album_name: string;
    music_link: string;
    artistpic_link: string;
}

const Artist_Details: React.FC = () => {
    const data_theme = useContext(Themecontext);
    const router = useRouter();
    const { slug } = router.query;
    const [songs, setSongs] = useState<Song[]>([]);
    const [artistImage, setArtistImage] = useState<string | null>(null);
    const [playing, setPlaying] = useState<number | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    const [sliderValue, setSliderValue] = useState(0);

    // Fetch songs based on artist
    useEffect(() => {
        if (!slug) return;

        const fetchSongs = async () => {
            const { data, error } = await supabase
                .from("music")
                .select("music_title, album_name, music_link, artistpic_link")
                .eq("artist_name", slug);

            if (error) {
                console.error("Error fetching songs:", error.message);
            } else {
                setSongs(data);
                if (data.length > 0) {
                    setArtistImage(data[0].artistpic_link || "/assets/music cover.png");
                }
            }
        };

        fetchSongs();
    }, [slug]);

    // Toggle play/pause for songs
    const togglePlay = (index: number) => {
        if (playing === index) {
            audio?.pause();
            setPlaying(null);
            setIsPlaying(false);
        } else {
            if (audio) {
                audio.pause();
            }

            const newAudio = new Audio(songs[index].music_link);
            setAudio(newAudio);
            newAudio.play();
            setPlaying(index);
            setIsPlaying(true);

            newAudio.ontimeupdate = () => {
                setSliderValue(Math.floor((newAudio.currentTime / newAudio.duration) * 100));
            };
        }
    };

    // Handle slider change
    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        setSliderValue(value);

        if (audio) {
            audio.currentTime = (audio.duration / 100) * value;
        }
    };

    // Stop audio when navigating to another page or unmounting
    useEffect(() => {
        const handleRouteChange = () => {
            if (audio) audio.pause(); // Stop the audio when the route changes
        };

        // Initialize the audio element and set up route change listener
        router.events.on("routeChangeStart", handleRouteChange);

        // Cleanup on component unmount or route change
        return () => {
            if (audio) audio.pause();
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, [audio, router.events]);

    return (
        <div className={`${styles[`main_dashboard_${data_theme}`]} ${styles.main_dashboard}`}>
            <div className={styles.artist_container}>
                <div className={styles.artist_image_container}>
                    <div className={styles.artist_image}>
                        <img src={artistImage || "/assets/music cover.png"} alt={slug as string} />
                    </div>
                </div>

                <div className={styles.artist_info_container} style={{ height: isPlaying ? "85vh" : "100vh" }}>
                    <div className={styles.artist_header}>
                        <div className={styles.app_name}>
                            <p>Oktavist</p>
                        </div>
                        <div className={styles.artist_hd}>
                            <p>{slug}</p>
                        </div>
                    </div>

                    <div className={styles.music_list}>
                        {songs.length > 0 ? (
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
                                            <td>{song.music_title}</td>
                                            <td>{song.album_name}</td>
                                            <td>
                                                <button onClick={() => togglePlay(index)} className={styles.play_button}>
                                                    {playing === index ? <FaPause /> : <FaPlay />}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p className={styles.no_songs}>No songs found for this artist.</p>
                        )}
                    </div>
                </div>
            </div>

            {isPlaying && (
                <div className={styles.music_box} style={{ display: playing !== null ? "block" : "none" }}>
                    <p className={styles.now_playing}>Now Playing: {songs[playing!]?.music_title}</p>
                    <div className={styles.wave_container}>
                        {[...Array(200)].map((_, i) => (
                            <span key={i} className={styles.wave}></span>
                        ))}
                    </div>
                    <div className={styles.slider_container}>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={sliderValue}
                            onChange={handleSliderChange}
                            className={styles.slider}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Artist_Details;

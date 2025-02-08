import { Themecontext } from '@/Theme/Themestate';
import { useContext, useState, useEffect, useRef } from 'react';
import { supabase } from '@/lib/supabase';
import { FaPlay, FaEllipsisV, FaDownload, FaTrash, FaPause } from 'react-icons/fa';
import music_icon from '@/public/assets/music_icon.png';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from '@/styles/admin_styles/submissions.module.css';


interface Song {
    id: number;
    music_title: string;
    artist_name: string;
    music_link: string;
    music_coverlink: string;
}

const ConfirmBox: React.FC<{ song: Song | null; onConfirm: () => void; onCancel: () => void }> = ({ song, onConfirm, onCancel }) => {
    if (!song) return null;
    return (
        <div className={styles.confirm_container}>
            <div className={styles.confirm_box}>
                <div className={styles.confirm_box_header}>Confirm Delete</div>
                <div className={styles.confirm_box_body}>
                    <p>
                        Are you sure you want to delete <strong>{song.music_title}</strong>?
                    </p>
                </div>
                <div className={styles.confirm_box_footer}>
                    <button onClick={onCancel}>No</button>
                    <button onClick={onConfirm}>Yes</button>
                </div>
            </div>
        </div>
    );
};

const MusicPlayer: React.FC<{ song: Song; onClose: () => void }> = ({ song, onClose }) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(new Audio(song.music_link));

    useEffect(() => {
        const audio = audioRef.current;
        audio.src = song.music_link;
        audio.load();


        audio.play().catch(err => console.error("Auto-play failed:", err));

        const updateProgress = () => {
            setProgress((audio.currentTime / audio.duration) * 100);
        };

        audio.addEventListener('timeupdate', updateProgress);

        return () => {
            audio.pause();
            audio.removeEventListener('timeupdate', updateProgress);
        };
    }, [song]);

    const handlePlayPause = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = (value / 100) * audioRef.current.duration;
            setProgress(value);
        }
    };

    return (
        <div className={styles.music_player}>
            <div className={styles.player_header}>
                <p>{song.music_title} - {song.artist_name}</p>
                <button className={styles.close_button} onClick={onClose}>X</button>
            </div>
            <div className={styles.player_controls}>
                <button onClick={handlePlayPause}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <input
                    type="range"
                    value={progress}
                    onChange={handleSliderChange}
                    className={styles.progress_slider}
                    max={100}
                />
            </div>
        </div>
    );
};


const MusicCard: React.FC<{ song: Song; onDeleteRequest: (song: Song) => void; onPlayRequest: (song: Song) => void }> = ({ song, onDeleteRequest, onPlayRequest }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={styles.music_card}>
            <div className={styles.music_image}>
                <img src={music_icon.src} alt="music_icon" />
            </div>
            <div className={styles.overlay}>
                <FaPlay className={styles.play_icon} onClick={() => onPlayRequest(song)} />
                <div className={styles.menu_wrapper}>
                    <FaEllipsisV className={styles.menu_icon} onClick={() => setMenuOpen(!menuOpen)} />
                    {menuOpen && (
                        <div className={styles.dropdown_menu}>
                            <a href={song.music_link} target="_blank" download >
                                <button><FaDownload /> Download</button>
                            </a>
                            <button onClick={() => onDeleteRequest(song)}><FaTrash /> Delete</button>
                        </div>
                    )}
                </div>
            </div>
            <p className={styles.song_title}>{song.music_title}</p>
            <p className={styles.song_artist}>{song.artist_name}</p>
        </div>
    );
};

const Submissions: React.FC = () => {
    const theme_data = useContext(Themecontext);
    const [songs, setSongs] = useState<Song[]>([]);
    const [confirmDelete, setConfirmDelete] = useState<Song | null>(null);
    const [currentSong, setCurrentSong] = useState<Song | null>(null);

    useEffect(() => {
        const fetchSongs = async () => {
            const { data, error } = await supabase.from('music').select('*');
            if (error) {
                console.error('Error fetching songs:', error.message);
            } else {
                setSongs(data);
            }
        };
        fetchSongs();
    }, []);

    const handleConfirmDelete = async () => {
        if (!confirmDelete) return;
        const { error } = await supabase.from('music').delete().match({ id: confirmDelete.id });
        if (error) {
            console.error('Error deleting song:', error.message);
            toast.error('Failed to delete song.');
        } else {
            toast.success('Song deleted successfully!');
            setSongs(songs.filter(song => song.id !== confirmDelete.id));
            setConfirmDelete(null);
        }
    };

    const handlePlayRequest = (song: Song) => {
        setCurrentSong(song);
    };

    return (
        <div className={`${styles[`main_dashboard_${theme_data.theme}`]} ${styles.main_dashboard}`}>
            <div className={styles.header}>
                <p className={styles.head}>My Submissions</p>
            </div>

            {confirmDelete && (
                <ConfirmBox
                    song={confirmDelete}
                    onConfirm={handleConfirmDelete}
                    onCancel={() => setConfirmDelete(null)}
                />
            )}

            {currentSong && <MusicPlayer song={currentSong} onClose={() => setCurrentSong(null)} />}

            <div className={styles.content}>
                {songs.length > 0 ? (
                    songs.map((song) => <MusicCard key={song.id} song={song} onDeleteRequest={setConfirmDelete} onPlayRequest={handlePlayRequest} />)
                ) : (
                    <p>No submissions found.</p>
                )}
            </div>
            <ToastContainer position="top-center" autoClose={3000} />
        </div>
    );
};

export default Submissions;

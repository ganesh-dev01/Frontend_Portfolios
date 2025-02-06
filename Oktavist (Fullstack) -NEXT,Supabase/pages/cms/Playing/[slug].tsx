import { useContext, useState, useEffect, useRef } from "react";
import { Themecontext } from "@/Theme/Themestate";
import { FaPlay, FaPause, FaHeart, FaRegHeart, FaStar, FaRegStar } from "react-icons/fa"; // Added FaStar and FaRegStar for favorite icons
import styles from "@/styles/playing.module.css";
import { useRouter } from "next/router";
import { supabase } from "@/lib/supabase"
import { useSession } from "@supabase/auth-helpers-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Playing: React.FC = () => {
    const data_theme = useContext(Themecontext);
    const [isPlaying, setIsPlaying] = useState(false);
    const [liked, setLiked] = useState(false);
    const [favorited, setFavorited] = useState(false); // State for favorite button
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const session = useSession();
    const userEmail = session?.user?.email || null;

    const router = useRouter();
    const takeObj = router.query.slug;
    const music_obj = takeObj ? JSON.parse(decodeURIComponent(takeObj as string)) : null;

    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {

        if (!music_obj?.music_link) return;

        if (audioRef.current) {
            audioRef.current.pause();
        }

        audioRef.current = new Audio(decodeURIComponent(music_obj.music_link));

        const audio = audioRef.current;
        const handleMetadata = () => setDuration(audio.duration || 0);
        const handleTimeUpdate = () => setProgress((audio.currentTime / audio.duration) * 100);
        const handleEnded = () => {
            setIsPlaying(false);
            setProgress(0);
        };

        audio.addEventListener("loadedmetadata", handleMetadata);
        audio.addEventListener("timeupdate", handleTimeUpdate);
        audio.addEventListener("ended", handleEnded);

        return () => {
            audio.removeEventListener("loadedmetadata", handleMetadata);
            audio.removeEventListener("timeupdate", handleTimeUpdate);
            audio.removeEventListener("ended", handleEnded);
            audio.pause();
        };
    }, [music_obj?.music_link]);

    useEffect(() => {
        // Effect for checking if the song is liked by the current user
        if (!userEmail || !music_obj) return;

        const checkIfLiked = async () => {
            const { data, error } = await supabase
                .from("Like_music")
                .select("id")
                .eq("music_link", music_obj.music_link)
                .eq("email", userEmail)
                .single();

            if (data) {
                setLiked(true);
            } else {
                setLiked(false);
            }

            if (error && error.code !== "PGRST116") {
                console.error("Error checking like status:", error.message);
            }
        };

        checkIfLiked();
    }, [userEmail, music_obj]);


    const togglePlay = () => {

        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Function to handle seeking within the audio
        if (audioRef.current) {
            const seekTime = (parseFloat(e.target.value) / 100) * audioRef.current.duration;
            audioRef.current.currentTime = seekTime;
            setProgress(parseFloat(e.target.value));
        }
    };

    const formatTime = (time: number) => {
        // Function to format time in MM:SS format
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    const handleLikeToggle = async () => {

        if (!userEmail || !music_obj) {
            toast.error("Please sign in to like songs.");
            return;
        }

        if (liked) {
            console.log("Removing like...");

            const { error } = await supabase
                .from("Like_music")
                .delete()
                .eq("music_link", music_obj.music_link)
                .eq("email", userEmail);

            if (error) {
                console.error("Error unliking song:", error.message);
            } else {
                setLiked(false);
                console.log("Like removed!");
            }
        } else {
            console.log("Adding like...");

            const { error } = await supabase.from("Like_music").insert([{
                music_title: music_obj.music_title,
                music_link: music_obj.music_link,
                music_coverlink: music_obj.music_coverlink,
                artist_name: music_obj.artist_name,
                email: userEmail,
            }]);

            if (error) {
                console.error("Error liking song:", error.message);
            } else {
                setLiked(true);
                console.log("Like added!");
            }
        }
    };

    useEffect(() => {
        checkIfFavorited();
    }, [favorited]);

    const checkIfFavorited = async () => {
        if (!userEmail || !music_obj) return;

        const { data, error } = await supabase
            .from("Fav_music")
            .select("id")
            .eq("music_link", music_obj.music_link)
            .eq("email", userEmail)
            .single();

        if (data) {
            setFavorited(true);
        } else {
            setFavorited(false);
        }

        if (error && error.code !== "PGRST116") {
            console.error("Error checking favorite status:", error.message);
        }
    };

    const handleFavoriteToggle = async () => {
        if (!userEmail || !music_obj) {
            toast.error("Please sign in to favorite songs.");
            return;
        }

        if (favorited) {
            console.log("Removing favorite...");
            const { error } = await supabase
                .from("Fav_music")
                .delete()
                .eq("music_link", music_obj.music_link)
                .eq("email", userEmail);

            if (error) {
                console.error("Error removing favorite:", error.message);
            } else {
                console.log("Favorite removed!");
                setFavorited(false);
            }
        } else {
            console.log("Adding favorite...");
            const { error } = await supabase.from("Fav_music").insert([{
                music_title: music_obj.music_title,
                music_link: music_obj.music_link,
                music_coverlink: music_obj.music_coverlink,
                artist_name: music_obj.artist_name,
                email: userEmail,
            }]);

            if (error) {
                console.error("Error adding favorite:", error.message);
            } else {
                console.log("Favorite added!");
                setFavorited(true);
            }
        }
    };


    return (
        <div className={`${styles[`main_dashboard_${data_theme}`]} ${styles.main_dashboard}`}>
            {music_obj ? (
                <>
                    <div className={styles.cover_container}>
                        <img src={decodeURIComponent(music_obj.music_coverlink)} alt="Cover" className={styles.cover_image} />
                    </div>

                    <div className={styles.song_info}>
                        <h2 className={styles.song_name}>{music_obj.music_title}</h2>
                        <p className={styles.artist_name}>{music_obj.artist_name}</p>
                    </div>

                    <div className={styles.progress_container}>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={progress}
                            className={styles.slider}
                            onChange={handleSeek}
                        />
                        <span className={styles.duration}>
                            {formatTime(audioRef.current?.currentTime || 0)} / {formatTime(duration)}
                        </span>
                    </div>

                    <div className={styles.controls}>
                        <button className={styles.control_button} onClick={togglePlay}>
                            {isPlaying ? <FaPause className={styles.glow} /> : <FaPlay className={styles.glow} />}
                        </button>
                        <button className={styles.control_button} onClick={handleLikeToggle}>
                            {liked ? <FaHeart className={styles.liked} /> : <FaRegHeart className={styles.glow} />}
                        </button>
                        <button className={styles.control_button} onClick={handleFavoriteToggle}>
                            {favorited ? <FaStar className={styles.liked} /> : <FaRegStar className={styles.glow} />}
                        </button>
                        <ToastContainer position="top-center" autoClose={3000} />
                    </div>
                </>
            ) : (
                <p>Loading music...</p>
            )}
        </div>
    );
};

export default Playing;

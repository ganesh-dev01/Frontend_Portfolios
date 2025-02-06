import { Themecontext } from '@/Theme/Themestate';
import { useContext, useState, useEffect } from 'react';
import { FaPlay } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import music_cover_pic from '@/public/assets/music cover.png';
import styles from '@/styles/user_styles/library.module.css';
import { createClient } from '@supabase/supabase-js';
import { useSession } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Music {
    id: number;
    music_link: string;
    music_coverlink: string | null;
    music_title: string;
    artist_name: string;
}

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const Library = () => {
    const data_theme = useContext(Themecontext);
    const router = useRouter();
    const [likedshowMenu, setlikedShowMenu] = useState<number | null>(null);
    const [fvrtshowMenu, setfvrtShowMenu] = useState<number | null>(null);
    const [likedMusic, setLikedMusic] = useState<Music[]>([]);
    const [favMusic, setFavMusic] = useState<Music[]>([]);
    const session = useSession();
    const userEmail: string | null = session?.user?.email || null;

    useEffect(() => {
        if (!userEmail) return;

        const fetchLikedMusic = async () => {
            const { data, error } = await supabase
                .from("Like_music")
                .select("id, music_link, music_coverlink, music_title, artist_name")
                .eq("email", userEmail);

            if (error) {
                console.error("Error fetching liked music:", error.message);
            } else {
                setLikedMusic(data as Music[] || []);
            }
        };

        const fetchFavMusic = async () => {
            const { data, error } = await supabase
                .from("Fav_music")
                .select("id, music_link, music_coverlink, music_title, artist_name")
                .eq("email", userEmail);

            if (error) {
                console.error("Error fetching favorite music:", error.message);
            } else {
                setFavMusic(data as Music[] || []);
            }
        };

        fetchLikedMusic();
        fetchFavMusic();
    }, [userEmail]);

    const handleLikedMusic = (index: number) => {
        setlikedShowMenu(likedshowMenu === index ? null : index);
    };

    const handleFavMusic = (index: number) => {
        setfvrtShowMenu(fvrtshowMenu === index ? null : index);
    };

    const handleRemoveLike = async (music_link: string) => {
        if (!userEmail) {
            toast.error("Please sign in to remove songs.");
            return;
        }

        const { error } = await supabase
            .from("Like_music")
            .delete()
            .eq("music_link", music_link)
            .eq("email", userEmail);

        if (error) {
            console.error("Error removing like:", error.message);
        } else {
            setLikedMusic((prev) => prev.filter((music) => music.music_link !== music_link));
        }
    };

    const handleRemoveFav = async (music_link: string) => {
        if (!userEmail) {
            toast.error("Please sign in to remove songs.");
            return;
        }

        const { error } = await supabase
            .from("Fav_music")
            .delete()
            .eq("music_link", music_link)
            .eq("email", userEmail);

        if (error) {
            console.error("Error removing favorite:", error.message);
        } else {
            setFavMusic((prev) => prev.filter((music) => music.music_link !== music_link));
        }
    };

    const handlePlay = (musicLink: string, music_coverlink: string, music_title: string, artist_name: string) => {
        const musicDetails = {
            artist_name: artist_name,
            music_title: music_title,
            music_link: encodeURIComponent(musicLink),
            music_coverlink: encodeURIComponent(music_coverlink),
        };

        const musicDetailsString = JSON.stringify(musicDetails);
        router.push(`/cms/Playing/${musicDetailsString}`);
    };

    return (
        <div className={`${styles[`main_dashboard_${data_theme}`]} ${styles.main_dashboard}`}>
            <div className={styles.liked_music_container}>
                <p className={styles.head}>Liked Music</p>
                <div className={styles.music_box}>
                    {likedMusic.length > 0 ? (
                        likedMusic.map((music, index) => (
                            <div key={music.id} className={styles.music_item}>
                                <div className={styles.cover_image}>
                                    <img src={music.music_coverlink || music_cover_pic.src} alt="music cover" />
                                    <div className={styles.play_button} onClick={() => handlePlay(music.music_link ?? '', music.music_coverlink ?? '', music.music_title, music.artist_name)}>
                                        <FaPlay />
                                    </div>
                                </div>
                                <div className={styles.music_info}>
                                    <p className={styles.music_title}>{music.music_title}</p>
                                    <p className={styles.music_artist}>{music.artist_name}</p>
                                </div>
                                <div className={styles.menu_icon} onClick={() => handleLikedMusic(index)}>
                                    <BsThreeDotsVertical />
                                    {likedshowMenu === index && (
                                        <div className={styles.dropdown_menu}>
                                            <p className={styles.remove_option} onClick={() => handleRemoveLike(music.music_link)}>
                                                Remove
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No liked music found.</p>
                    )}
                </div>
            </div>

            <div className={styles.fvrt_music_container}>
                <p className={styles.head}>Favourites</p>
                <div className={styles.music_box}>
                    {favMusic.length > 0 ? (
                        favMusic.map((music, index) => (
                            <div key={music.id} className={styles.music_item}>
                                <div className={styles.cover_image}>
                                    <img src={music.music_coverlink || music_cover_pic.src} alt="music cover" />
                                    <div className={styles.play_button} onClick={() => handlePlay(music.music_link ?? '', music.music_coverlink ?? '', music.music_title, music.artist_name)}>
                                        <FaPlay />
                                    </div>
                                </div>
                                <div className={styles.music_info}>
                                    <p className={styles.music_title}>{music.music_title}</p>
                                    <p className={styles.music_artist}>{music.artist_name}</p>
                                </div>
                                <div className={styles.menu_icon} onClick={() => handleFavMusic(index)}>
                                    <BsThreeDotsVertical />
                                    {fvrtshowMenu === index && (
                                        <div className={styles.dropdown_menu}>
                                            <p className={styles.remove_option} onClick={() => handleRemoveFav(music.music_link)}>
                                                Remove
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No favorite music found.</p>
                    )}
                </div>
                <ToastContainer position="top-center" autoClose={3000} />
            </div>
        </div>
    );
};

export default Library;

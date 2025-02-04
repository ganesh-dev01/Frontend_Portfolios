import { Themecontext } from '@/Theme/Themestate';
import { useContext, useState } from 'react';
import { FaPlay } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import music_cover_pic from '@/public/assets/music cover.png';
import styles from '@/styles/user_styles/library.module.css';

const Library = () => {
    const data_theme = useContext(Themecontext);
    const [likedshowMenu, setlikedShowMenu] = useState(null);
    const [fvrtshowMenu, setfvrtShowMenu] = useState(null);

    const handleLikedMusic = (index: any) => {
        setlikedShowMenu(likedshowMenu === index ? null : index);
    };

    const handleFavMusic = (index: any) => {
        setfvrtShowMenu(fvrtshowMenu === index ? null : index);
    };

    return (
        <div className={`${styles[`main_dashboard_${data_theme}`]} ${styles.main_dashboard}`}>


            <div className={styles.liked_music_container}>
                <p className={styles.head}>Liked Music</p>
                <div className={styles.music_box}>
                    {[...Array(12)].map((_, index) => (
                        <div key={index} className={styles.music_item}>
                            <div className={styles.cover_image}>
                                <img src={music_cover_pic.src} alt="music cover" />
                                <div className={styles.play_button}><FaPlay /></div>
                            </div>

                            <div className={styles.music_info}>
                                <p className={styles.music_title}>sduysagfbsdyfgysdgyfgsdyfbhsuyfgshfvs</p>
                                <p className={styles.music_artist}>bgdhbhwhwbhih huygywgyidw</p>
                            </div>

                            {/* Three Dots Menu */}
                            <div className={styles.menu_icon} onClick={() => handleLikedMusic(index)}>
                                <BsThreeDotsVertical />
                                {likedshowMenu === index && (
                                    <div className={styles.dropdown_menu}>
                                        <p className={styles.remove_option}>Remove</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className={styles.fvrt_music_container}>
                <p className={styles.head}>Favourites</p>

                <div className={styles.music_box}>
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className={styles.music_item}>
                            <div className={styles.cover_image}>
                                <img src={music_cover_pic.src} alt="music cover" />
                                <div className={styles.play_button}><FaPlay /></div>
                            </div>

                            <div className={styles.music_info}>
                                <p className={styles.music_title}>Music Title</p>
                                <p className={styles.music_artist}>Artist</p>
                            </div>

                            {/* Three Dots Menu */}
                            <div className={styles.menu_icon} onClick={() => handleFavMusic(index)}>
                                <BsThreeDotsVertical />
                                {fvrtshowMenu === index && (
                                    <div className={styles.dropdown_menu}>
                                        <p className={styles.remove_option}>Remove</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
};

export default Library;

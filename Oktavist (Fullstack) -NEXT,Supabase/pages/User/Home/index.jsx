import { ThemeContext } from "@/Theme/Themestate"
import { useContext, useState } from "react"
import styles from "@/styles/User_styles/Home.module.css"
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import test_img from '@/public/assets/test.jpg';
import { IconButton, Switch, Typography } from "@mui/material";
import { PlayArrow, Pause, FavoriteBorder, Favorite } from "@mui/icons-material";


const ArtistProfiles = () => {
    const theme_data = useContext(ThemeContext);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => prev + 1);
    };
    return (
        <div className={styles[`artistBox_${theme_data.theme}`]}>
            <p className={styles.artistHd}>Artists</p>

            <div className={styles.artistContainer}>
                <Button
                    className={styles.prevBtn}
                    onClick={handlePrev}
                >
                    <GiPreviousButton />
                </Button>

                <div className={styles.artistCardsWrapper}>

                    <div className={styles.artistCard}>
                        <img src={test_img.src} alt="Artist" className={styles.artistImage} />
                        <p className={styles.artistName}>Artist Name</p>
                    </div>

                    <div className={styles.artistCard}>
                        <img src={test_img.src} alt="Artist" className={styles.artistImage} />
                        <p className={styles.artistName}>Artist Name</p>
                    </div>

                </div>

                <Button
                    className={styles.nextBtn}
                    onClick={handleNext}
                >
                    <GiNextButton />
                </Button>
            </div>
        </div>
    )
}


const MusicPlaylist = () => {
    const theme_data = useContext(ThemeContext);
    const [playing, setPlaying] = useState(null);
    const [favorites, setFavorites] = useState([]);

    const musicList = [
        { id: 1, name: "Song A", singer: "Singer A" },
        { id: 2, name: "Song B", singer: "Singer B" },
        { id: 3, name: "Song C", singer: "Singer C" },
        { id: 4, name: "Song D", singer: "Singer D" },
    ];

    const toggleFavorite = (id) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
        );
    };

    const togglePlay = (id) => {
        setPlaying((prev) => (prev === id ? null : id));
    };

    return (
        <div className={`${styles[`musicBox_${theme_data.theme}`]} ${styles.musicContainer}`}>

            <Typography variant="h6" className={styles.musicplaylisHd}>Music Playlist</Typography>

            {/* Music List */}
            <div className={styles.rowView}>
                {musicList.map((music) => (
                    <div key={music.id} className={styles.musicRow}>
                        <div className={styles.rowContent}>
                            <Typography className={styles.musicName}>{music.name} _by {music.singer}</Typography>
                            <div className={styles.rowActions}>
                                <IconButton onClick={() => togglePlay(music.id)} className={styles.playButton}>
                                    {playing === music.id ? <Pause /> : <PlayArrow />}
                                </IconButton>
                                <IconButton onClick={() => toggleFavorite(music.id)} className={styles.favoriteButton}>
                                    {favorites.includes(music.id) ? <Favorite className={styles.clickedFav} /> :
                                        <FavoriteBorder className={styles.NonclickedFav} />}
                                </IconButton>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


const Home = () => {

    const theme_data = useContext(ThemeContext);

    let changeTheme = () => {
        theme_data.setTheme(theme_data.theme === 'dark' ? 'light' : 'dark');
    }


    return (
        <div className={styles[`main_${theme_data.theme}`]}>

            <div className={styles[`userNav_${theme_data.theme}`]}>

                <div className={styles.welcomeBox}>
                    <h4>Welcome user</h4>
                </div>

                <div className={styles.ThemeBox}>

                    <button className={styles.toggle_btn} onClick={changeTheme}>
                        {theme_data.theme === 'dark' ? <Brightness7 style={{ fontSize: '1.5rem' }} /> :
                            <Brightness4 style={{ fontSize: '1.5rem' }} />}
                    </button>

                </div>


                <div className={styles.userBox}>
                    <Avatar
                        alt="User Avatar"
                        src="/path/to/your/avatar-image.jpg"
                        className={styles.user_avatar}
                    />
                </div>
            </div>

            <ArtistProfiles />

            <MusicPlaylist />



        </div>
    )
}

export default Home 
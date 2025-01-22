import { ThemeContext } from "@/Theme/Themestate"
import { useContext, useEffect, useState } from "react"
import styles from "@/styles/Home.module.css"
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import test_img from '@/public/assets/test.jpg';
import { IconButton, Switch, Typography } from "@mui/material";
import { PlayArrow, Pause, FavoriteBorder, Favorite } from "@mui/icons-material";
import supabase from "@/lib/supabase";
import { useSelector } from "react-redux";
import { Cookies } from 'react-cookie';

const ArtistProfiles = () => {
    const theme_data = useContext(ThemeContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [artistData, setArtistData] = useState([]);


    const fetchArtistData = async () => {
        const { data, error } = await supabase.from("submitArt").select("*");
        if (error) {
            console.error("Error fetching artist data:", error);
            alert("Error fetching artist data. Please try again.");
        } else {
            setArtistData(data);
        }
    };

    useEffect(() => {
        fetchArtistData();
    }, []);


    const artistsPerSlide = 3;


    const visibleArtists = artistData.slice(
        currentIndex * artistsPerSlide,
        currentIndex * artistsPerSlide + artistsPerSlide
    );


    const maxIndex = Math.ceil(artistData.length / artistsPerSlide) - 1;

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    return (
        <div className={styles[`artistBox_${theme_data.theme}`]}>
            <p className={styles.artistHd}>Artists</p>

            <div className={styles.artistContainer}>
                <Button
                    className={styles.prevBtn}
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                >
                    <GiPreviousButton />
                </Button>

                <div className={styles.artistCardsWrapper}>
                    {visibleArtists.map((artist) => (
                        <div key={artist.id} className={styles.artistCard}>
                            <img
                                src={artist.artistImageURL}
                                alt={artist.artist_name}
                                className={styles.artistImage}
                            />
                            <p className={styles.artistName}>{artist.artist_name}</p>
                        </div>
                    ))}
                </div>

                <Button
                    className={styles.nextBtn}
                    onClick={handleNext}
                    disabled={currentIndex === maxIndex}
                >
                    <GiNextButton />
                </Button>
            </div>
        </div>
    );
};



const MusicPlaylist = () => {
    const theme_data = useContext(ThemeContext);
    const [playing, setPlaying] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [audio, setAudio] = useState(null);

    const toggleFavorite = (id) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
        );
    };

    const togglePlay = (id, url) => {
        if (playing === id) {
            audio.pause();
            setPlaying(null);
        } else {
            if (audio) audio.pause();
            const newAudio = new Audio(url);
            newAudio.play();
            setAudio(newAudio);
            setPlaying(id);


            newAudio.onended = () => {
                setPlaying(null);
                setAudio(null);
            };
        }
    };

    const [musicdata, setMusicData] = useState([]);

    const fetch_musicdata = async () => {
        const { data, error } = await supabase.from('submitMusic').select('*');

        if (error) {
            alert('Error fetching music data:', error);
        } else {
            setMusicData(data);
        }
    };

    useEffect(() => {
        fetch_musicdata();
    }, []);

    return (
        <div className={`${styles[`musicBox_${theme_data.theme}`]} ${styles.musicContainer}`}>
            <Typography variant="h6" className={styles.musicplaylisHd}>
                Music Playlist
            </Typography>

            {/* Music List */}
            <div className={styles.rowView}>
                {musicdata.map((music) => (
                    <div key={music.id} className={styles.musicRow}>
                        <div className={styles.rowContent}>
                            <Typography className={styles.musicName}>
                                {music.song_title} _by {music.artist_name}
                            </Typography>
                            <div className={styles.rowActions}>
                                <IconButton
                                    onClick={() => togglePlay(music.id, music.music_url)}
                                    className={styles.playButton}
                                >
                                    {playing === music.id ? <Pause /> : <PlayArrow />}
                                </IconButton>
                                <IconButton
                                    onClick={() => toggleFavorite(music.id)}
                                    className={styles.favoriteButton}
                                >
                                    {favorites.includes(music.id) ? (
                                        <Favorite className={styles.clickedFav} />
                                    ) : (
                                        <FavoriteBorder className={styles.NonclickedFav} />
                                    )}
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

    let email_data = useSelector((state) => state.user.data);

    let [sigupTable, setSignupTable] = useState(null);

    const signup_data = async () => {
        const { data, error } = await supabase.from('signup').select('*');

        if (error) {
            alert('Error fetching data:', error.message);
        } else {
            console.log('Fetched Data:', data);
            setSignupTable(data);
        }
    }

    useEffect(() => {
        signup_data();
    }, []);


    let loginUser = sigupTable?.find((item) => item.email === email_data?.email);

    const cookies = new Cookies();

    const handleSignOut = () => {
        cookies.remove('userauthToken');
        window.location.reload();
        alert('You have been signed out successfully!');
    };



    return (
        <div className={styles[`main_${theme_data.theme}`]}>

            <div className={styles[`userNav_${theme_data.theme}`]}>

                <div className={styles.welcomeBox}>
                    <h4>Welcome {loginUser?.name || 'user'}</h4>

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
                    <div className={styles.dropdownMenu}>
                        <button
                            className={styles.signOutButton}
                            onClick={handleSignOut}
                        >
                            Sign Out
                        </button>
                    </div>
                </div>

            </div>

            <ArtistProfiles />

            <MusicPlaylist />



        </div>
    )
}

export default Home 
import { useState, useContext, useEffect } from 'react';
import styles from '@/styles/Admin_styles/submission.module.css';
import { ThemeContext } from '@/Theme/Themestate';
import {
    Box,
    Tab,
    Tabs,
    Card,
    CardContent,
    Typography,
    IconButton,
    Menu,
    MenuItem,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { FaUserTie } from "react-icons/fa";
import supabase from '@/lib/supabase';

const Submissions = () => {
    const theme_data = useContext(ThemeContext);
    const [tabValue, setTabValue] = useState('music');
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedMusic, setSelectedMusic] = useState(null);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleMenuOpen = (event, musicId) => {
        setAnchorEl(event.currentTarget);
        setSelectedMusic(musicId);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setSelectedMusic(null);
    };

    let [musicdata, setMusicData] = useState([]);

    const fetch_musicdata = async () => {
        const { data, error } = await supabase.from('submitMusic').select('*');

        if (error) {
            alert('Error fetching music data:', error);
        } else {
            setMusicData(data);
        }
    }

    let [artistdata, setArtistData] = useState([]);

    const fetch_artistdata = async () => {
        const { data, error } = await supabase.from('submitArt').select('*');
        if (error) {
            alert('Error fetching artist data:', error);
        } else {
            setArtistData(data);
        }
    }


    useEffect(() => {
        fetch_musicdata();
        fetch_artistdata();
    }, []);

    const myMusic = musicdata;
    const myArtist = artistdata;

    return (

        <div className={styles[`main_${theme_data.theme}`]}>
            <Typography variant="h4" gutterBottom>
                My Submissions
            </Typography>

            <Tabs value={tabValue} onChange={handleTabChange} indicatorColor="primary">
                <Tab label="Musics" value="music" className={styles.tap} />
                <Tab label="Artists" value="artist" className={styles.tap} />
            </Tabs>

            {tabValue === 'music' && (
                <Box className={styles.musicContainer}>
                    {myMusic.map((music) => (
                        <Card key={music.id} className={styles[`musicCard_${theme_data.theme}`]}>
                            <CardContent className={styles.cardContent}>
                                <Box className={styles.musicDetails}>
                                    <MusicNoteIcon className={styles.musicIcon} />
                                    <Box>
                                        <Typography variant="body1" className={styles.musicTitle}>
                                            {music.song_title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            className={styles.musicArtist}
                                        >
                                            {music.artist_name}
                                        </Typography>
                                    </Box>
                                </Box>
                                <IconButton
                                    onClick={(event) => handleMenuOpen(event, music.id)}
                                    className={styles.menuIcon}
                                >
                                    <MoreVertIcon />
                                </IconButton>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl) && selectedMusic === music.id}
                                    onClose={handleMenuClose}
                                >
                                    <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
                                    <MenuItem onClick={handleMenuClose}>Download</MenuItem>
                                </Menu>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            )}

            {tabValue === 'artist' && (
                <Box className={styles.artistContainer}>
                    {myArtist.map((artist, index) => (
                        <Card key={index} className={styles[`artistCard_${theme_data.theme}`]}>
                            <CardContent className={styles.cardContent}>
                                <Box className={styles.artistDetails}>
                                    <img
                                        src={artist.artistImageURL || '/default-avatar.png'}
                                        className={styles.artistImage}
                                    />
                                    <Box>
                                        <Typography variant="body1" className={styles.artistName}>
                                            {artist.artist_name}
                                        </Typography>
                                    </Box>
                                </Box>
                                <IconButton
                                    onClick={(event) => handleMenuOpen(event, artist.id)}
                                    className={styles.menuIcon}
                                >
                                    <MoreVertIcon />
                                </IconButton>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl) && selectedMusic === artist.id}
                                    onClose={handleMenuClose}
                                >
                                    <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
                                </Menu>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            )}

        </div>
    );
};

export default Submissions;

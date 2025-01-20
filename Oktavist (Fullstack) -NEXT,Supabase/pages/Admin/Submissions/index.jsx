import { useState, useContext } from 'react';
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

    const dummyMusic = [
        { id: 1, title: 'Breath me', artist: 'Sia' },
        { id: 2, title: 'Cinnamon girl', artist: 'Lana Del Rey' },
        { id: 3, title: 'Majesty', artist: 'Eminem' },
        { id: 4, title: 'Country song', artist: 'Seether' },
        { id: 5, title: 'Bad guy', artist: 'Billie' },
    ];

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
                    {dummyMusic.map((music) => (
                        <Card key={music.id} className={styles[`musicCard_${theme_data.theme}`]}>
                            <CardContent className={styles.cardContent}>
                                <Box className={styles.musicDetails}>
                                    <MusicNoteIcon className={styles.musicIcon} />
                                    <Box>
                                        <Typography variant="body1" className={styles.musicTitle}>
                                            {music.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            className={styles.musicArtist}
                                        >
                                            {music.artist}
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
                    {dummyMusic.map((artist, index) => (
                        <Card key={index} className={styles[`artistCard_${theme_data.theme}`]}>
                            <CardContent className={styles.cardContent}>
                                <Box className={styles.artistDetails}>
                                    <img
                                        src={artist.profilePic || '/default-avatar.png'}
                                        alt={`${artist.artist}`}
                                        className={styles.artistImage}
                                    />
                                    <Box>
                                        <Typography variant="body1" className={styles.artistName}>
                                            {artist.artist}
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
                                    <MenuItem onClick={handleMenuClose}>View Profile</MenuItem>
                                    <MenuItem onClick={handleMenuClose}>Follow</MenuItem>
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

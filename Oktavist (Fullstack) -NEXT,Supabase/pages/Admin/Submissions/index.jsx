import { useState, useContext, useEffect } from 'react';
import styles from '@/styles/submission.module.css';
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
    const [selectedItem, setSelectedItem] = useState(null);
    const [itemType, setItemType] = useState(null); // To track the type (music or artist)

    const [musicdata, setMusicData] = useState([]);
    const [artistdata, setArtistData] = useState([]);

    const fetch_musicdata = async () => {
        const { data, error } = await supabase.from('submitMusic').select('*');
        if (error) {
            alert('Error fetching music data:', error.message);
        } else {
            setMusicData(data);
        }
    };

    const fetch_artistdata = async () => {
        const { data, error } = await supabase.from('submitArt').select('*');
        if (error) {
            alert('Error fetching artist data:', error.message);
        } else {
            setArtistData(data);
        }
    };

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleMenuOpen = (event, itemId, type) => {
        setAnchorEl(event.currentTarget);
        setSelectedItem(itemId);
        setItemType(type);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setSelectedItem(null);
        setItemType(null);
    };

    const handleDelete = async () => {
        let response;
        if (itemType === 'music') {
            response = await supabase
                .from('submitMusic')
                .delete()
                .eq('id', selectedItem);
        } else if (itemType === 'artist') {
            response = await supabase
                .from('submitArt')
                .delete()
                .eq('id', selectedItem);
        }

        if (response.error) {
            alert(`Error deleting ${itemType}: ${response.error.message}`);
        } else {
            alert(`${itemType.charAt(0).toUpperCase() + itemType.slice(1)} deleted successfully`);
            handleMenuClose();
            fetch_musicdata(); // Refresh music data
            fetch_artistdata(); // Refresh artist data
        }
    };

    useEffect(() => {
        fetch_musicdata();
        fetch_artistdata();
    }, []);

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
                    {musicdata.map((music) => (
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
                                    onClick={(event) => handleMenuOpen(event, music.id, 'music')}
                                    className={styles.menuIcon}
                                >
                                    <MoreVertIcon />
                                </IconButton>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl) && selectedItem === music.id}
                                    onClose={handleMenuClose}
                                >
                                    <MenuItem onClick={handleDelete}>Delete</MenuItem>
                                </Menu>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            )}

            {tabValue === 'artist' && (
                <Box className={styles.artistContainer}>
                    {artistdata.map((artist) => (
                        <Card key={artist.id} className={styles[`artistCard_${theme_data.theme}`]}>
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
                                    onClick={(event) => handleMenuOpen(event, artist.id, 'artist')}
                                    className={styles.menuIcon}
                                >
                                    <MoreVertIcon />
                                </IconButton>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl) && selectedItem === artist.id}
                                    onClose={handleMenuClose}
                                >
                                    <MenuItem onClick={handleDelete}>Delete</MenuItem>
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

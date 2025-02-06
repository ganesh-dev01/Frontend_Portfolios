import { useEffect, useState, useContext } from 'react';
import { Themecontext } from '@/Theme/Themestate';
import { useRouter } from 'next/router';
import { PiHandTapFill } from "react-icons/pi";
import { supabase } from '@/lib/supabase';
import styles from '@/styles/user_styles/artist.module.css';

interface Artist {
    artist_name: string;
    artistpic_link: string;
}

const Artists: React.FC = () => {
    const data_theme = useContext(Themecontext);
    const router = useRouter();
    const [artists, setArtists] = useState<Artist[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArtists = async () => {
            const { data, error } = await supabase
                .from('music')
                .select('artist_name, artistpic_link');

            if (error) {
                console.error('Error fetching artists:', error.message);
            } else {
                // Remove duplicate artists based on artist_name
                const uniqueArtists = Array.from(new Map(data.map(item => [item.artist_name, item])).values());
                setArtists(uniqueArtists);
            }
            setLoading(false);
        };

        fetchArtists();
    }, []);

    return (
        <div className={`${styles[`main_dashboard_${data_theme}`]} ${styles.main_dashboard}`}>
            {loading ? (
                <p>Loading artists...</p>
            ) : artists.length > 0 ? (
                artists.map((artist) => (
                    <div key={artist.artist_name} className={styles.artist_card}>
                        <div className={styles.artist_cover_pic}>
                            <img src={artist.artistpic_link || "/assets/music cover.png"} alt={artist.artist_name} />
                        </div>
                        <div className={styles.artist_info}>
                            <p className={styles.artist_name}>{artist.artist_name}</p>
                        </div>
                        <p
                            className={styles.tapmsg}
                            onClick={() => router.push(`/cms/user/Artist_Details/${encodeURIComponent(artist.artist_name)}`)}
                        >
                            <PiHandTapFill /> Tap to visit playlist
                        </p>
                    </div>
                ))
            ) : (
                <p>No artists found.</p>
            )}
        </div>
    );
};

export default Artists;

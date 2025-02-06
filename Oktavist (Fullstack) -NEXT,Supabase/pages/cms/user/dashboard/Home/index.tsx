import { useEffect, useState, useContext } from 'react';
import { Themecontext } from '@/Theme/Themestate';
import { IoSearchOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabase';
import styles from '@/styles/user_styles/home.module.css';

interface Music {
    id: number;
    music_title: string;
    artist_name: string;
    music_link: string;
    music_coverlink: string;
    music_type: string;
}

const Home: React.FC = () => {
    const data_theme = useContext(Themecontext);
    const router = useRouter();
    const [musicList, setMusicList] = useState<Music[]>([]);
    const [filteredMusic, setFilteredMusic] = useState<Music[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMusic = async () => {
            const { data, error } = await supabase.from('music').select('*');

            if (error) {
                console.error('Error fetching music:', error.message);
            } else {
                setMusicList(data);
                setFilteredMusic(data);

                const uniqueCategories = Array.from(new Set(data.map(music => music.music_type.toLowerCase())));
                setCategories(uniqueCategories);
            }
            setLoading(false);
        };

        fetchMusic();
    }, []);


    const handleSearch = (query: string) => {
        setSearchQuery(query);

        let filteredData = musicList.filter(music =>
            music.music_title.toLowerCase().includes(query.toLowerCase()) ||
            music.artist_name.toLowerCase().includes(query.toLowerCase())
        );

        if (selectedCategory) {
            filteredData = filteredData.filter(music => music.music_type === selectedCategory);
        }

        setFilteredMusic(filteredData);
    };

    // Handle category selection
    const handleCategorySelect = (category: string) => {
        const newCategory = category === selectedCategory ? null : category;
        setSelectedCategory(newCategory);

        let filteredData = musicList;

        if (newCategory) {
            filteredData = filteredData.filter(music => music.music_type.toLowerCase() === newCategory.toLowerCase());
        }

        if (searchQuery) {
            filteredData = filteredData.filter(music =>
                music.music_title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                music.artist_name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if("All" === newCategory) {
            filteredData = musicList;
        }

        setFilteredMusic(filteredData);
    };

    const handlePlay = (musicLink: string, music_coverlink: string,
        music_title: string, artist_name: string) => {

        const takeObj = {
            artist_name: artist_name,
            music_title: music_title,
            music_link: encodeURIComponent(musicLink),
            music_coverlink: encodeURIComponent(music_coverlink)
        }

        const passObj = JSON.stringify(takeObj);

        router.push(`/cms/Playing/${passObj}`);
    };

    return (
        <div className={`${styles[`main_dashboard_${data_theme}`]} ${styles.main_dashboard}`}>

            <div className={styles.home_header}>
                <div className={styles.search_bar}>
                    <div className={styles.search_icon}>
                        <IoSearchOutline />
                    </div>
                    <input
                        type='search'
                        placeholder='Search'
                        className={styles.search_input}
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>
            </div>

            {/* Category Section (Dynamic) */}
            <div className={styles.category_box}>
                <div className={styles.category_item} onClick={() => handleCategorySelect('All')}>
                    <p>All</p>
                </div>
                {categories.length > 0 ? (
                    categories.map((category) => (
                        <div
                            key={category}
                            className={`${styles.category_item} ${selectedCategory === category ? styles.active : ''}`}
                            onClick={() => handleCategorySelect(category)}
                        >
                            <p>{category}</p>

                        </div>
                    ))
                ) : (
                    <p>Loading categories...</p>
                )}
            </div>

            {/* Music List */}
            <div className={styles.music_box}>
                {loading ? (
                    <p>Loading music...</p>
                ) : filteredMusic.length > 0 ? (
                    filteredMusic.map((music) => (
                        <div key={music.id} className={styles.music_item}>
                            <div className={styles.cover_image}>
                                <img src={music.music_coverlink || "/assets/music cover.png"} alt="Music Cover" />
                                <div className={styles.play_button} onClick={() => handlePlay(music.music_link, music.music_coverlink,
                                    music.music_title, music.artist_name)}>
                                    <FaPlay />
                                </div>
                            </div>

                            <div className={styles.music_info}>
                                <p className={styles.music_title}>{music.music_title}</p>
                                <p className={styles.music_artist}>{music.artist_name}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No music found.</p>
                )}
            </div>
        </div>
    );
};

export default Home;

import { Themecontext } from '@/Theme/Themestate';
import { useContext, useState } from 'react';
import styles from '@/styles/admin_styles/submitmusic.module.css';

const Submitmusic: React.FC = () => {
    const theme_data = useContext(Themecontext);


    const [artistCover, setArtistCover] = useState<string | null>(null);
    const [musicCover, setMusicCover] = useState<string | null>(null);
    const [musicFile, setMusicFile] = useState<File | null>(null);

    const handleCoverUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setArtistCover(imageUrl);
        }
    };

    const handleMusicUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setMusicFile(file);
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Submitted Data:", { artistCover, musicFile });
        alert("Music Submitted Successfully!");
    };

    return (
        <div className={`${styles[`main_dashboard_${theme_data.theme}`]} ${styles.main_dashboard}`}>

            <div className={styles.header}>
                <p className={styles.head}>Submit music</p>
            </div>

            <form className={styles.submit_music_container} onSubmit={handleSubmit}>

                <div className={styles.upload_container}>

                    <div className={styles.upload_section}>
                        <label htmlFor="musicCoverUpload" className={styles.upload_box}>
                            {artistCover ? (
                                <>
                                    <img src={artistCover} alt="Music Cover" className={styles.cover_preview} />
                                    <button type="button" className={styles.delete_btn} onClick={() => setMusicCover(null)}>
                                        ✖
                                    </button>
                                </>
                            ) : (
                                <span className={styles.upload_text}>Upload music Cover</span>
                            )}
                        </label>

                        <input
                            type="file"
                            id="musicCoverUpload"
                            accept="image/*"
                            onChange={handleCoverUpload}
                            hidden
                        />
                    </div>

                    {/* Artist File Upload */}
                    <div className={styles.upload_section}>
                        <label htmlFor="artistCoverUpload" className={styles.upload_box}>
                            {artistCover ? (
                                <>
                                    <img src={artistCover} alt="Artist Cover" className={styles.cover_preview} />
                                    <button type="button" className={styles.delete_btn} onClick={() => setArtistCover(null)}>
                                        ✖
                                    </button>
                                </>
                            ) : (
                                <span className={styles.upload_text}>Upload Artist profile</span>
                            )}
                        </label>

                        <input
                            type="file"
                            id="artistCoverUpload"
                            accept="image/*"
                            onChange={handleCoverUpload}
                            hidden
                        />
                    </div>

                    {/* Music File Upload */}
                    <div className={styles.upload_section}>
                        <label htmlFor="musicFileUpload" className={styles.upload_box}>
                            {musicFile ? (
                                <span className={styles.upload_text}>{musicFile.name}</span>
                            ) : (
                                <span className={styles.upload_text}>Upload Music</span>
                            )}
                        </label>
                        <input
                            type="file"
                            id="musicFileUpload"
                            accept="audio/*"
                            onChange={handleMusicUpload}
                            hidden
                        />
                    </div>
                </div>

                <div className={styles.form_area}>

                    <input type="text" className={styles.input_field} placeholder="Music title" required />

                    <input type="text" className={styles.input_field} placeholder="Artist name" required />

                    <input type="text" className={styles.input_field} placeholder="Music type" required />

                    <input type="text" className={styles.input_field} placeholder="Album name" required />

                </div>

                <button type="submit" className={styles.submit_btn}>Submit</button>
            </form>
        </div>
    );
};

export default Submitmusic;

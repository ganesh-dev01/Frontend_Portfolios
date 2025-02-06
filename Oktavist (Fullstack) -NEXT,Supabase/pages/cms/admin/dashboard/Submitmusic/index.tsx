import { Themecontext } from '@/Theme/Themestate';
import { useContext, useState } from 'react';
import { supabase } from '@/lib/supabase';
import styles from '@/styles/admin_styles/submitmusic.module.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Submitmusic: React.FC = () => {
    const theme_data = useContext(Themecontext);
    const [artistCover, setArtistCover] = useState<File | null>(null);
    const [musicCover, setMusicCover] = useState<File | null>(null);
    const [musicFile, setMusicFile] = useState<File | null>(null);
    const [musicTitle, setMusicTitle] = useState('');
    const [artistName, setArtistName] = useState('');
    const [musicType, setMusicType] = useState('');
    const [albumName, setAlbumName] = useState('');


    const handleFileChange1 = (e: any) => {
        const selectedFile = e.target.files[0];
        setArtistCover(selectedFile);
        console.log(selectedFile.name);
    }
    const handleFileChange2 = (e: any) => {
        const selectedFile = e.target.files[0];
        setMusicCover(selectedFile);
        console.log(selectedFile.name);
    }

    const handleFileChange3 = (e: any) => {
        const selectedFile = e.target.files[0];
        setMusicFile(selectedFile);
        console.log(selectedFile.name);
    }

    const uploadFile = async (file: File) => {

        if (!file) {
            return;
        }
        const fileExt = file.name.split(".").pop();
        const fileName = `${Date.now()}-${Math.random()}.${fileExt}`;
        const filePath = fileName;

        const { data, error: uploadError } = await supabase.storage.from('admin_store').upload(filePath, file);

        if (uploadError) {
            console.error('Error uploading file:', uploadError);
            return;
        }

        const { publicUrl } = supabase.storage.from("admin_store").getPublicUrl(filePath).data;

        return publicUrl;

    };

    const handleSubmit = async (event: React.FormEvent) => {

        event.preventDefault();

        if (!musicFile || !artistCover || !musicCover) {
            toast.error('Please upload all required files.');
            return;
        }

        const artistCoverPath = await uploadFile(artistCover);
        const musicCoverPath = await uploadFile(musicCover);
        const musicFilePath = await uploadFile(musicFile);

        console.log('Artist Cover Path:', artistCoverPath);
        console.log('Music Cover Path:', musicCoverPath);
        console.log('Music File Path:', musicFilePath);

        if (!artistCoverPath || !musicCoverPath || !musicFilePath) {
            toast.error('Error uploading files.');
            return;
        }

        const { error } = await supabase.from('music').insert([{
            music_title: musicTitle,
            artist_name: artistName,
            music_type: musicType,
            album_name: albumName,
            artistpic_link: artistCoverPath,
            music_coverlink: musicCoverPath,
            music_link: musicFilePath
        }]);

        if (error) {
            console.error('Database error:', error.message);
            toast.error('Failed to submit music.');
        } else {
            toast.success('Music submitted successfully!');
        }
    };

    return (
        <div className={`${styles[`main_dashboard_${theme_data.theme}`]} ${styles.main_dashboard}`}>
            <div className={styles.header}><p className={styles.head}>Submit music</p></div>

            <form className={styles.submit_music_container} onSubmit={handleSubmit}>
                <div className={styles.upload_container}>
                    <div className={styles.upload_section}>
                        <label className={styles.upload_box}>
                            {artistCover ? <span>{artistCover.name}</span> : <span>Upload Artist Cover</span>}
                            <input type="file" accept="image/*" hidden onChange={(e) => handleFileChange1(e)} required />
                        </label>
                    </div>
                    <div className={styles.upload_section}>
                        <label className={styles.upload_box}>
                            {musicCover ? <span>{musicCover.name}</span> : <span>Upload Music Cover</span>}
                            <input type="file" accept="image/*" hidden onChange={(e) => handleFileChange2(e)} required />
                        </label>
                    </div>
                    <div className={styles.upload_section}>
                        <label className={styles.upload_box}>
                            {musicFile ? <span>{musicFile.name}</span> : <span>Upload Music File</span>}
                            <input type="file" accept="audio/*" hidden onChange={(e) => handleFileChange3(e)} required />
                        </label>
                    </div>
                </div>
                <div className={styles.form_area}>
                    <input type="text" className={styles.input_field} placeholder="Music title" value={musicTitle} onChange={(e) => setMusicTitle(e.target.value)} required />
                    <input type="text" className={styles.input_field} placeholder="Artist name" value={artistName} onChange={(e) => setArtistName(e.target.value)} required />
                    <input type="text" className={styles.input_field} placeholder="Music type" value={musicType} onChange={(e) => setMusicType(e.target.value)} required />
                    <input type="text" className={styles.input_field} placeholder="Album name" value={albumName} onChange={(e) => setAlbumName(e.target.value)} required />
                </div>
                <button type="submit" className={styles.submit_btn}>Submit</button>
            </form>
            <ToastContainer position="top-center" autoClose={3000} />
        </div>
    );
};

export default Submitmusic;

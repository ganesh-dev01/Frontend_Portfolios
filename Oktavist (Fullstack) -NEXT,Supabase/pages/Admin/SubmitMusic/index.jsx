import { useContext, useRef, useState } from "react";
import styles from "@/styles/Admin_styles/submit.module.css";
import { FaCloudUploadAlt, FaCheckCircle } from "react-icons/fa";
import { CircularProgress, TextField, Button } from "@mui/material";
import { ThemeContext } from "@/Theme/Themestate";
import { useForm } from "react-hook-form";
import supabase from "@/lib/supabase";

const SubmitMusic = () => {
    const fileInputRef = useRef(null);
    const [uploading, setUploading] = useState(false);
    const [uploaded, setUploaded] = useState(false);
    const [file, setFile] = useState(null);

    const { register, handleSubmit, reset } = useForm();
    const theme_data = useContext(ThemeContext);

    const handleFileClick = () => {
        fileInputRef.current.click();
    };


    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setUploading(true);
            setUploaded(false);

            setTimeout(() => {
                setFile(selectedFile);
                setUploading(false);
                setUploaded(true);
            }, 2000);
        }
    };

    const handleMusicSubmit = async (formdata) => {
        if (!file) {
            alert("Please upload an MP3 file.");
            return;
        }

        setUploading(true);

        try {
            const fileExt = file.name.split(".").pop();
            const fileName = `${Date.now()}-${Math.random()}.${fileExt}`;
            const filePath = fileName;


            const { data, error: uploadError } = await supabase
                .storage
                .from("musicBuck")
                .upload(filePath, file);

            if (uploadError) {
                throw new Error(`File upload failed: ${uploadError.message}`);
            }

            const { publicUrl } = supabase
                .storage
                .from("musicBuck")
                .getPublicUrl(filePath).data;

            if (!publicUrl) {
                throw new Error("Failed to retrieve file public URL.");
            }

            const { error: insertError } = await supabase
                .from("submitMusic")
                .insert([
                    {
                        artist_name: formdata.artist_name,
                        song_title: formdata.song_title,
                        album_title: formdata.album_title || null,
                        music_url: publicUrl,
                    },
                ]);

            if (insertError) {
                throw new Error(`Database insertion failed: ${insertError.message}`);
            }

            alert("Music submitted successfully!");
            reset();
            setFile(null);
            setUploaded(true);
        } catch (error) {
            console.error("Error submitting music:", error.message);
            alert(`Failed to submit music: ${error.message}`);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className={styles[`main_${theme_data.theme}`]}>
            <h1 className={styles.title}>Submit Music</h1>
            <p className={styles.description}>To upload music, click on the box</p>

            <div className={styles.uploadContainer}>
                <div
                    className={styles.uploadBox}
                    onClick={handleFileClick}
                    role="button"
                    tabIndex={0}
                >
                    {!uploaded ? (
                        <FaCloudUploadAlt className={styles.uploadIcon} />
                    ) : (
                        <FaCheckCircle className={styles.successIcon} />
                    )}
                    <input
                        type="file"
                        accept="audio/mp3"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                    />
                </div>
                <Button
                    variant="outlined"
                    color="error"
                    onClick={() => {
                        setFile(null);
                        setUploaded(false);
                    }}
                    className={styles.deleteButton}
                >
                    Delete
                </Button>
            </div>

            {uploading && (
                <div className={styles.loader}>
                    <CircularProgress size={24} />
                </div>
            )}

            <form className={styles.form} onSubmit={handleSubmit(handleMusicSubmit)}>
                <div className={styles.inputGroup}>
                    <TextField
                        label="Artist Name"
                        variant="outlined"
                        className={styles.input}
                        id={styles.input_id}
                        required
                        InputProps={{
                            style: {
                                color: theme_data.theme === "dark" ? "#fff" : "#000",
                                backgroundColor:
                                    theme_data.theme === "dark" ? "#2a2a2a" : "#fff",
                                borderRadius: "5px",
                            },
                            classes: { notchedOutline: styles.outline },
                        }}
                        InputLabelProps={{
                            style: {
                                color: theme_data.theme === "dark" ? "#aaa" : "#555",
                            },
                        }}
                        placeholder="Enter artist name"
                        {...register("artist_name", { required: true })}
                    />
                    <TextField
                        label="Album Title (Optional)"
                        variant="outlined"
                        className={styles.input}
                        id={styles.input_id}
                        InputProps={{
                            style: {
                                color: theme_data.theme === "dark" ? "#fff" : "#000",
                                backgroundColor:
                                    theme_data.theme === "dark" ? "#2a2a2a" : "#fff",
                                borderRadius: "5px",
                            },
                            classes: { notchedOutline: styles.outline },
                        }}
                        InputLabelProps={{
                            style: {
                                color: theme_data.theme === "dark" ? "#aaa" : "#555",
                            },
                        }}
                        placeholder="Enter album title"
                        {...register("album_title")}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <TextField
                        label="Song Title"
                        variant="outlined"
                        className={styles.input}
                        id={styles.input_id}
                        required
                        InputProps={{
                            style: {
                                color: theme_data.theme === "dark" ? "#fff" : "#000",
                                backgroundColor:
                                    theme_data.theme === "dark" ? "#2a2a2a" : "#fff",
                                borderRadius: "5px",
                            },
                            classes: { notchedOutline: styles.outline },
                        }}
                        InputLabelProps={{
                            style: {
                                color: theme_data.theme === "dark" ? "#aaa" : "#555",
                            },
                        }}
                        placeholder="Enter song title"
                        {...register("song_title", { required: true })}
                    />
                </div>

                <div className={styles.uploadMp3}>
                    <Button
                        variant="contained"
                        className={styles.uploadButton}
                        type="submit"
                    >
                        Upload MP3
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SubmitMusic;

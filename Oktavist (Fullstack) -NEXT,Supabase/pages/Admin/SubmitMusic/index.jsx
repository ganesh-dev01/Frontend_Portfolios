import { useContext, useRef, useState } from "react";
import styles from "@/styles/Admin_styles/submit.module.css";
import { FaCloudUploadAlt, FaCheckCircle } from "react-icons/fa";
import { CircularProgress, TextField, Button } from "@mui/material";
import { ThemeContext } from "@/Theme/Themestate";

const SubmitMusic = () => {
    const fileInputRef = useRef(null);
    const [uploading, setUploading] = useState(false);
    const [uploaded, setUploaded] = useState(false);
    const [file, setFile] = useState(null);

    const handleFileClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setUploading(true);
            setUploaded(false);

            // Simulating upload process
            setTimeout(() => {
                setFile(selectedFile);
                setUploading(false);
                setUploaded(true);
            }, 2000);
        }
    };

    const handleUploadToBackend = () => {
        if (file) {
            console.log("Uploading file to backend:", file.name);
        } else {
            alert("Please select a file first!");
        }
    };

    const theme_data = useContext(ThemeContext);

    return (
        <div className={styles[`main_${theme_data.theme}`]}>

            <h1 className={styles.title}>Submit Music</h1>
            <p className={styles.description}>
                To upload music, click on the box
            </p>

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

            <form className={styles.form}>
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
                                backgroundColor: theme_data.theme === "dark" ? "#2a2a2a" : "#fff", 
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
                    />
                    <TextField
                        label="Album Title (Optional)"
                        variant="outlined"
                        className={styles.input}
                        id={styles.input_id}
                        InputProps={{
                            style: {
                                color: theme_data.theme === "dark" ? "#fff" : "#000",
                                backgroundColor: theme_data.theme === "dark" ? "#2a2a2a" : "#fff",
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
                    />
                </div>

                <div className={styles.inputGroup}>
                    <TextField
                        label="Artist Song Title"
                        variant="outlined"
                        className={styles.input}
                        id={styles.input_id}
                        required
                        InputProps={{
                            style: {
                                color: theme_data.theme === "dark" ? "#fff" : "#000",
                                backgroundColor: theme_data.theme === "dark" ? "#2a2a2a" : "#fff",
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
                    />
                </div>

                <div className={styles.uploadMp3}>
                    <Button
                        variant="contained"
                        onClick={handleUploadToBackend}
                        className={styles.uploadButton}
                    >
                        Upload MP3
                    </Button>
                </div>
            </form>


        </div>
    );
};

export default SubmitMusic;

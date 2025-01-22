import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "@/styles/Admin_styles/submit_artist.module.css";
import { FaCloudUploadAlt, FaCheckCircle } from "react-icons/fa";
import { CircularProgress, TextField, Button } from "@mui/material";
import { ThemeContext } from "@/Theme/Themestate";
import supabase from "@/lib/supabase";

const SubmitArtist = () => {
    const fileInputRef = useRef(null);
    const [uploading, setUploading] = useState(false);
    const [uploaded, setUploaded] = useState(false);
    const [file, setFile] = useState(null);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

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

    const onSubmit = async (formdata) => {
        if (!file) {
            alert("Please upload an image file.");
            return;
        }

        setUploading(true);

        try {
            const fileExt = file.name.split(".").pop();
            const fileName = `${Date.now()}-${Math.random()}.${fileExt}`;
            const filePath = fileName;

            const { data, error: uploadError } = await supabase.storage
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
                .from("submitArt")
                .insert([
                    {
                        artist_name: formdata.artistName,
                        credit_url: formdata.creditURL,
                        artist_type: formdata.artistType,
                        artistImageURL: publicUrl,
                    },
                ]);


            if (insertError) {
                throw new Error(`Database insertion failed: ${insertError.message}`);
            }

            alert("Artist data submitted successfully!");
            reset();
            setFile(null);
            setUploaded(true);
        } catch (error) {
            alert(`Failed to submit data: ${error.message}`);
        } finally {
            setUploading(false);
        }
    };

    const theme_data = useContext(ThemeContext);

    return (
        <div className={styles[`main_${theme_data.theme}`]}>
            <h1 className={styles.title}>Submit Artist</h1>
            <p className={styles.description}>
                Upload profile pic, click on the box
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
                        accept="image/*"
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

            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.inputGroup}>
                    <TextField
                        label="Artist Name"
                        variant="outlined"
                        className={styles.input}
                        id={styles.input_id}
                        required
                        {...register("artistName", { required: "Artist name is required" })}
                        error={!!errors.artistName}
                        helperText={errors.artistName?.message}
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
                        label="Credit URL"
                        variant="outlined"
                        className={styles.input}
                        id={styles.input_id}
                        {...register("creditURL")}
                        error={!!errors.creditURL}
                        helperText={errors.creditURL?.message}
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
                        placeholder="Enter Credit URL"
                    />
                </div>

                <div className={styles.inputGroup}>
                    <TextField
                        label="Artist Type"
                        variant="outlined"
                        className={styles.input}
                        id={styles.input_id}
                        required
                        {...register("artistType", { required: "Artist type is required" })}
                        error={!!errors.artistType}
                        helperText={errors.artistType?.message}
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
                        placeholder="Enter Artist type"
                    />
                </div>

                <div className={styles.upload}>
                    <Button
                        variant="contained"
                        type="submit"
                        className={styles.uploadButton}
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SubmitArtist;

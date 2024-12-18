import React, { useContext } from "react";
import { TextField, Button, Grid, Typography, Box } from "@mui/material";
import ThemeContext from "@/ThemeContext/ThemeContext";
import styles from "@/styles/contact.module.css";

const Contact: React.FC = () => {
    const theme_data = useContext<any>(ThemeContext);
    const isDarkMode = theme_data.theme === "dark";

    return (
        <div className={styles[`main_container_${theme_data.theme}`]}>
            <Box className={styles.contactBox}>
                <Typography className={styles.contactTitle}>Contact Us</Typography>
                <Typography className={styles.contactSubtitle}>
                    We'd love to hear from you! Fill out the form below.
                </Typography>
                <Grid container spacing={3} className={styles.formGrid}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="First Name"
                            variant="outlined"
                            className={styles.inputField}
                            InputProps={{
                                style: {
                                    color: isDarkMode ? "#fff" : "#000",
                                    backgroundColor: isDarkMode ? "#3b3b3b" : "#f8f8f8",
                                },
                            }}
                            InputLabelProps={{
                                style: {
                                    color: isDarkMode ? "#fff" : "#000",
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Last Name"
                            variant="outlined"
                            className={styles.inputField}
                            InputProps={{
                                style: {
                                    color: isDarkMode ? "#fff" : "#000",
                                    backgroundColor: isDarkMode ? "#3b3b3b" : "#f8f8f8",
                                },
                            }}
                            InputLabelProps={{
                                style: {
                                    color: isDarkMode ? "#fff" : "#000",
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            className={styles.inputField}
                            InputProps={{
                                style: {
                                    color: isDarkMode ? "#fff" : "#000",
                                    backgroundColor: isDarkMode ? "#3b3b3b" : "#f8f8f8",
                                },
                            }}
                            InputLabelProps={{
                                style: {
                                    color: isDarkMode ? "#fff" : "#000",
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Message"
                            variant="outlined"
                            multiline
                            rows={4}
                            className={styles.inputField}
                            InputProps={{
                                style: {
                                    color: isDarkMode ? "#fff" : "#000",
                                    backgroundColor: isDarkMode ? "#3b3b3b" : "#f8f8f8",
                                },
                            }}
                            InputLabelProps={{
                                style: {
                                    color: isDarkMode ? "#fff" : "#000",
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} className={styles.buttonContainer}>
                        <Button className={styles.submitButton}>Submit</Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Contact;

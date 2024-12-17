import React, { useContext } from "react";
import ThemeContext from "@/ThemeContext/ThemeContext";
import { Box, Typography, IconButton } from "@mui/material";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "@/styles/Footer.module.css";

const Footer: React.FC = () => {
    const theme_data = useContext<any>(ThemeContext);

    return (
        <Box className={`${styles[`footer-container-${theme_data.theme}`]}`}>
            {/* Footer Content */}
            <Typography variant="body1" className={styles.brand}>
                Zenithal © {new Date().getFullYear()}
            </Typography>

            {/* Social Media Links */}
            <Box className={styles.socialIcons}>
                <IconButton
                    aria-label="Facebook"
                    href="https://www.facebook.com"
                    target="_blank"
                    className={styles.iconButton}
                >
                    <FaFacebook />
                </IconButton>
                <IconButton
                    aria-label="Instagram"
                    href="https://www.instagram.com"
                    target="_blank"
                    className={styles.iconButton}
                >
                    <FaInstagram />
                </IconButton>
                <IconButton
                    aria-label="LinkedIn"
                    href="https://www.linkedin.com"
                    target="_blank"
                    className={styles.iconButton}
                >
                    <FaLinkedin />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Footer;

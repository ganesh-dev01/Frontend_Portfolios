import React, { useContext, useState } from "react";
import ThemeContext from "@/ThemeContext/ThemeContext";
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from "@mui/material";
import { FaSun, FaMoon, FaUserCircle, FaBars, FaHome, FaInfoCircle, FaPhone, FaBox } from "react-icons/fa";
import styles from "@/styles/Header.module.css";
import { useRouter } from "next/router";

const Header: React.FC = () => {
    const theme_data = useContext<any>(ThemeContext);
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    // Toggle theme function
    const toggleTheme = () => {
        theme_data.setTheme(theme_data.theme === "light" ? "dark" : "light");
    };

    // Toggle mobile drawer
    const toggleDrawer = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };
    
    const router=useRouter();
    return (
        <>
            <AppBar position="static" className={`${styles[`container-${theme_data.theme}`]}`}>
                <Toolbar className={styles.toolbar}>
                    {/* Brand Name */}
                    <Typography variant="h6" className={styles.brand}>
                        Zenithal
                    </Typography>

                    {/* Desktop Navigation */}
                    <Box className={`${styles.list} ${styles.desktopOnly}`}>
                        <Button color="inherit" onClick={() => router.push('/cms/Home')}>
                            <FaHome className={styles.navIcon} /> Home
                        </Button>
                        <Button color="inherit">
                            <FaInfoCircle className={styles.navIcon} /> About
                        </Button>
                        <Button color="inherit">
                            <FaPhone className={styles.navIcon} /> Contact
                        </Button>
                        <Button color="inherit">
                            <FaBox className={styles.navIcon} /> Products
                        </Button>
                    </Box>

                    {/* Action Buttons */}
                    <Box className={styles.buttons}>
                        <IconButton onClick={toggleTheme} color="inherit">
                            {theme_data.theme === "light" ? <FaMoon /> : <FaSun />}
                        </IconButton>
                        <IconButton color="inherit">
                            <FaUserCircle />
                        </IconButton>
                        <IconButton onClick={toggleDrawer} color="inherit" className={styles.mobileMenuButton}>
                            <FaBars />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            {mobileDrawerOpen && (
                <Box className={styles[`mobileDrawer-${theme_data.theme}`]}>
                    <ul className={styles.drawerList}>
                        <li onClick={toggleDrawer}>
                            <FaHome className={styles.navIcon} /> Home
                        </li>
                        <li onClick={toggleDrawer}>
                            <FaInfoCircle className={styles.navIcon} /> About
                        </li>
                        <li onClick={toggleDrawer}>
                            <FaPhone className={styles.navIcon} /> Contact
                        </li>
                        <li onClick={toggleDrawer}>
                            <FaBox className={styles.navIcon} /> Products
                        </li>
                    </ul>
                </Box>
            )}
        </>
    );
};

export default Header;

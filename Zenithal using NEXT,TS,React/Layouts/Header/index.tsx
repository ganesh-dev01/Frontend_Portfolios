import React, { useContext, useState } from "react";
import ThemeContext from "@/ThemeContext/ThemeContext";
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from "@mui/material";
import { FaSun, FaMoon, FaUserCircle, FaBars } from "react-icons/fa";
import styles from "@/styles/Header.module.css";

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

    return (
        <>
            <AppBar position="static" className={`${styles[`container-${theme_data.theme}`]}`}>
                <Toolbar className={styles.toolbar}>
                    {/* Brand Name */}
                    <Typography variant="h6" className={styles.brand}>
                        MyBrand
                    </Typography>

                    {/* Desktop Navigation */}
                    <Box className={`${styles.list} ${styles.desktopOnly}`}>
                        <Button color="inherit">Home</Button>
                        <Button color="inherit">About</Button>
                        <Button color="inherit">Contact</Button>
                        <Button color="inherit">Products</Button>
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
                        <li onClick={toggleDrawer}>Home</li>
                        <li onClick={toggleDrawer}>About</li>
                        <li onClick={toggleDrawer}>Contact</li>
                        <li onClick={toggleDrawer}>Products</li>
                    </ul>
                </Box>
            )}
        </>
    );
};

export default Header;

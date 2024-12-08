import React, { useContext, useState } from "react";
import ThemeContext from "@/ThemeContext/ThemeContext";
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { FaSun, FaMoon, FaUserCircle, FaBars } from "react-icons/fa";
import styles from "@/styles/Header.module.css";

const Header: React.FC = () => {
    const theme_data = useContext<any>(ThemeContext);
    const [mobileOpen, setMobileOpen] = useState(false);

    // Toggle theme function
    const toggleTheme = () => {
        theme_data.setTheme(theme_data.theme === "light" ? "dark" : "light");
    };

    // Handle mobile menu toggle
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <AppBar position="static" className={`${styles[`container-${theme_data.theme}`]}`}>
            <Toolbar className={styles.toolbar}>
                {/* Brand Name */}
                <Typography variant="h6" className={styles.brand}>
                    MyBrand
                </Typography>

                {/* Desktop Navigation */}
                <ul className={`${styles.list}`}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Products</li>
                </ul>

                {/* Action Buttons */}
                <div className={styles.buttons}>
                    <IconButton onClick={toggleTheme} color="inherit">
                        {theme_data.theme === "light" ? <FaMoon /> : <FaSun />}
                    </IconButton>
                    <Button startIcon={<FaUserCircle />} className={styles.profileButton}>
                        Profile
                    </Button>

                    {/* Mobile Menu Toggle */}
                    <IconButton onClick={handleDrawerToggle} color="inherit" className={styles.mobileMenuButton}>
                        <FaBars />
                    </IconButton>
                </div>
            </Toolbar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{ paper: styles.drawer }}
            >
                <List>
                    <ListItem button onClick={handleDrawerToggle}>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button onClick={handleDrawerToggle}>
                        <ListItemText primary="About" />
                    </ListItem>
                    <ListItem button onClick={handleDrawerToggle}>
                        <ListItemText primary="Contact" />
                    </ListItem>
                    <ListItem button onClick={handleDrawerToggle}>
                        <ListItemText primary="Products" />
                    </ListItem>
                </List>
            </Drawer>
        </AppBar>
    );
};

export default Header;

import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "@/styles/Navbar.module.css";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)"); 

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="static" className={styles.navbar} elevation={0}
    style={{ backgroundColor: "rgba(255, 255, 255, 0.14)" }}>
      <Toolbar className={styles.toolbar}>
        {isMobile && (
          <IconButton edge="start" className={styles.menuButton} onClick={handleDrawerToggle}>
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
        )}

        <Typography variant="h6" className={styles.logo}>
          ON TRIP
        </Typography>

        {!isMobile && (
          <Box className={styles.navLinks}>
            <Button className={styles.navItem}>Home</Button>
            <Button className={styles.navItem}>About</Button>
            <Button className={styles.navItem}>Discover</Button>
            <Button className={styles.navItem}>Blog</Button>
            <Button className={styles.navItem}>Contact</Button>
          </Box>
        )}

        {!isMobile && (
          <Box className={styles.authButtons}>
            <Button className={styles.loginBtn}>Login</Button>
            <Button className={styles.registerBtn}>Register</Button>
          </Box>
        )}

        <Drawer
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          PaperProps={{
            style: { width: isMobile ? '30vw' : '250px' }
          }}
        >
          <List className={styles.drawer}>
            <ListItem onClick={handleDrawerToggle}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem onClick={handleDrawerToggle}>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem onClick={handleDrawerToggle}>
              <ListItemText primary="Discover" />
            </ListItem>
            <ListItem onClick={handleDrawerToggle}>
              <ListItemText primary="Blog" />
            </ListItem>
            <ListItem onClick={handleDrawerToggle}>
              <ListItemText primary="Contact" />
            </ListItem>
            <ListItem onClick={handleDrawerToggle}>
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem onClick={handleDrawerToggle}>
              <ListItemText primary="Register" />
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
import React, { useContext } from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ThemeContext from "@/ThemeContext/ThemeContext";

const Location: React.FC = () => {
  const theme_data = useContext<any>(ThemeContext);

  return (
    <Box
      sx={{
        padding: "50px 20px",
        backgroundColor: theme_data?.theme === "dark" ? "#0d1117" : "#f3f4f6",
        color: theme_data?.theme === "dark" ? "#eaeaea" : "#1f2937",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={6}
        sx={{
          textAlign: "center",
          color: theme_data?.theme === "dark" ? "#ffcc00" : "#ff5722",
        }}
      >
        <LocationOnIcon fontSize="large" />
        Our Location
      </Typography>

      <Grid
        container
        spacing={6}
        justifyContent="center"
        alignItems="stretch"
        sx={{ height: "100%" }}
      >
        {/* Visit Us Section */}
        <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column" }}>
          <Paper
            elevation={4}
            sx={{
              padding: "30px",
              borderRadius: "12px",
              backgroundColor: theme_data?.theme === "dark" ? "#1e293b" : "#ffffff",
              color: theme_data?.theme === "dark" ? "#ffffff" : "#374151",
              textAlign: "left",
              flex: 1,
            }}
          >
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Visit Us Here
            </Typography>
            <Typography variant="body1" mb={2}>
              Boral, Kolkata, West Bengal <br />
              Pin: 700154
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Feel free to visit us or contact us for further information.
            </Typography>
            <Typography variant="body2" color="textSecondary"
            sx={{
                color: theme_data?.theme === "dark" ? "#ffcc00" : "#ff5722",
            }}>
              <strong>Zenithal</strong> is dedicated to delivering
              cutting-edge solutions for businesses worldwide. Our goal is to
              innovate and redefine possibilities with our expertise and passion.
            </Typography>
          </Paper>
        </Grid>

        {/* Map Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: "100%",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: theme_data?.theme === "dark"
                ? "0 4px 15px rgba(255, 255, 255, 0.2)"
                : "0 4px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.354762868869!2d88.36108021501405!3d22.44606608524532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271b7953bbecb%3A0x1fda10900a3a5294!2sBoral%2C%20Kolkata%2C%20West%20Bengal%20700154!5e0!3m2!1sen!2sin!4v1692528242536!5m2!1sen!2sin"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                filter: theme_data?.theme === "dark" ? "invert(90%)" : "none",
              }}
              allowFullScreen
              loading="lazy"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Location;

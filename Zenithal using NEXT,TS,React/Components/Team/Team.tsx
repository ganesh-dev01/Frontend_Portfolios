import React, { useContext } from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import ThemeContext from "@/ThemeContext/ThemeContext";


const Team: React.FC = () => {
  const theme_data = useContext<any>(ThemeContext);

  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Project Manager",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "UI/UX Designer",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Frontend Developer",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Backend Developer",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <Box
      sx={{
        padding: "40px 20px",
        backgroundColor: theme_data?.theme === "dark" ? "#121212" : "#f9f9f9",
        color: theme_data?.theme === "dark" ? "#ffffff" : "#333333",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
        sx={{
          color: theme_data?.theme === "dark" ? "#ffcc00" : "#ff6f00", // Custom text color for the header
        }}
      >
        Meet Our Team
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member) => (
          <Grid item xs={12} sm={6} md={3} key={member.id}>
            <Card
              sx={{
                maxWidth: 300,
                margin: "0 auto",
                borderRadius: "15px",
                backgroundColor: theme_data?.theme === "dark" ? "#1e1e1e" : "#ffffff",
                color: theme_data?.theme === "dark" ? "#ffffff" : "#333333",
                boxShadow: theme_data?.theme === "dark"
                  ? "0 4px 15px rgba(0, 0, 0, 0.5)"
                  : "0 4px 10px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "transform 0.3s ease",
                  boxShadow: theme_data?.theme === "dark"
                    ? "0 8px 20px rgba(255, 255, 255, 0.2)"
                    : "0 8px 20px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={member.image}
                alt={member.name}
                sx={{
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                  filter: theme_data?.theme === "dark" ? "brightness(0.9)" : "none",
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    color: theme_data?.theme === "dark" ? "#ffcc00" : "#333333",
                  }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme_data?.theme === "dark" ? "#dddddd" : "#666666",
                  }}
                >
                  {member.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Team;

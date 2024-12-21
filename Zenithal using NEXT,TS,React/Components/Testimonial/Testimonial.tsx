import React, { useContext } from "react";
import Slider from "react-slick";
import { Box, Typography, Paper } from "@mui/material";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "@/styles/component.module.css";
import ThemeContext from "@/ThemeContext/ThemeContext";
import { FaSmile } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    feedback: "This is an amazing service! Highly recommend it.",
    designation: "CEO, Example Corp",
  },
  {
    name: "Jane Smith",
    feedback: "Fantastic experience. The team is highly professional.",
    designation: "Manager, ABC Ltd",
  },
  {
    name: "Michael Brown",
    feedback: "A wonderful service that exceeded all expectations!",
    designation: "Freelancer",
  },
];

const Testimonial: React.FC = () => {
  const theme_data = useContext<any>(ThemeContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <>
    <div className={styles[`testimonialHeadder_${theme_data.theme}`]}>
      <h1 className={styles.testimonialHD}>
        <FaSmile className={styles.icon} /> Happy Clients
      </h1>
    </div>
    <Box
      className={styles[`main_container_${theme_data.theme}`]}
      sx={{
        maxWidth: "80vw",
        margin: "auto",
        marginBottom: "20px",
        padding: "30px",
        backgroundColor: theme_data.theme === "dark" ? "#333" : "#fff",
        boxShadow: 3,
      }}
    >
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Paper
            key={index}
            sx={{
              padding: "20px",
              textAlign: "center",
              backgroundColor: theme_data.theme === "dark" ? "#444" : "#f9f9f9",
            }}
          className={styles.sliderContainer}>
            <Typography
              variant="body1"
              sx={{ fontStyle: "italic", marginBottom: "10px",
                color: theme_data.theme === "dark" ? "#fff" : "#333",
               }}
            >
              "{testimonial.feedback}"
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: theme_data.theme === "dark" ? "#fff" : "#333",
              }}
            >
              {testimonial.name}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                color: theme_data.theme === "dark" ? "#aaa" : "#666",
              }}
            >
              {testimonial.designation}
            </Typography>
          </Paper>
        ))}
      </Slider>
    </Box>
    </>
  );
};

export default Testimonial;

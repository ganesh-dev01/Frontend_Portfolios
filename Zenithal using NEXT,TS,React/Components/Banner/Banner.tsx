import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/material';
import Image from 'next/image';
import styles from '@/styles/component.module.css';

import slide1 from '@/Assets/Images/banner 1.png';
import slide2 from '@/Assets/Images/banner 2.png';
import slide3 from '@/Assets/Images/banner 3.png';

const Banner: React.FC = () => {
    const slides = [slide1, slide2, slide3]; // Array of images

    return (
        <Box className={styles.BannerContainer}>
            <Carousel
                indicators
                navButtonsAlwaysVisible
                navButtonsWrapperProps={{
                    style: {
                        top: '50%',
                        transform: 'translateY(-50%)',
                    },
                }}
                navButtonsProps={{
                    style: {
                        backgroundColor: 'transparent',
                        color: 'black',
                    },
                }}
                interval={3000}
                animation="slide"
                swipe
                className={styles.Carousel}
            >
                {slides.map((slide, index) => (
                    <Box key={index} className={styles.CarouselSlide}>
                        <Image
                            src={slide}
                            alt={`Slide ${index + 1}`}
                            layout="responsive"
                            width={1920} // Aspect ratio settings
                            height={800}
                            className={styles.CarouselImage}
                        />
                    </Box>
                ))}
            </Carousel>
        </Box>
    );
};

export default Banner;

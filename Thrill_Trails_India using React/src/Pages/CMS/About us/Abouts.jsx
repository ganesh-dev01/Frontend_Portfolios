import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

import './Abouts.css'
import { Button, Typography } from '@mui/material';

import bannerbg from '../../Images/banner2.jpg'


function Banner() {
    return (
        <>
            <Grid container lg={12}
                sx={{ position: 'relative', width: '100%', height: { xs: '30vh', sm: '50vh' } }}>
                <Grid item>
                    <img
                        src={bannerbg}
                        style={{ position: 'absolute', width: '100%', height: '100%' }}
                        alt="banner"
                    />
                    <Box
                        sx={{
                            width: '100%',
                            position: 'absolute',
                            top: '35%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Typography
                            sx={{
                                color: 'white',
                                fontSize: { xs: '3.5vw', sm: '2.5vw' },
                                fontFamily: "Playwrite CU, cursive"
                            }}
                        >
                            Discover the beauty of India
                        </Typography>
                        <Typography
                            sx={{
                                color: 'white',
                                fontSize: { xs: '2.5vw', sm: '1.1vw' },
                                fontFamily: "Playwrite CU, cursive",
                                marginTop: '20px'
                            }}
                        >
                            Your guid to exploring the wonder of India's Destinations
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

        </>
    )
}

function Our_journey() {
    return (
        <>
            <Grid container
                sx={{
                    paddingLeft: { lg: '20px', md: '20px', sm: '10px', xs: '10px' },
                    marginTop: '20px'
                }}>

                <Grid item lg={12}>
                    <Typography
                        sx={{
                            fontSize: {
                                lg: '30px', md: '25px', sm: '24px', xs: '20px'
                            }
                        }}>
                        Our Journey
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography>
                        We aim to provide tourist with the best guide to explore the diverese beauty of India,
                        from it's stunning beaches to majestic mountains, and rich cultural heritage.
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

function Why_chooseUS() {
    return (
        <>
            <Grid container lg={12}
                sx={{
                    marginTop: '20px',
                    paddingLeft: { lg: '20px', md: '20px', sm: '10px', xs: '10px' },
                }}>
                <Grid item lg={12}>
                    <Typography
                        sx={{
                            fontSize: {
                                lg: '30px', md: '25px', sm: '24px', xs: '20px'
                            }
                        }}>
                        Why choose us?
                    </Typography>
                </Grid>

                <Grid container lg={12}
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '10px',
                    }}>
                    <Grid item lg={3.7} md={3.6} xs={12}
                        sx={{
                            marginBottom: { sm: '10px', xs: '10px' },
                            padding: '20px',
                            borderRadius: '10px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
                        }}>
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '18px'
                            }}>
                            Curated Travel Information
                        </Typography>
                        <Typography>
                            Details insights on the top tourist spots, cultures, festivals and local tips
                        </Typography>
                    </Grid>

                    <Grid item lg={3.7} md={3.6} xs={12}
                        sx={{
                            marginBottom: { sm: '10px', xs: '10px' },
                            padding: '20px',
                            borderRadius: '10px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
                        }}>
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '18px'
                            }}>
                            Handpicked Destinations
                        </Typography>
                        <Typography>
                            Featuring the best places like Goa, Leh-Ladakh,and Mysore
                            for an unforgottable experience.
                        </Typography>
                    </Grid>

                    <Grid item lg={3.7} md={3.6} xs={12}
                        sx={{
                            marginBottom: { sm: '10px', xs: '10px' },
                            padding: '20px',
                            borderRadius: '10px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
                        }}>
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '18px'
                            }}>
                            Travel tips & guides
                        </Typography>
                        <Typography>
                            Offering practical advice for travelers to help plan and enjoy their trips
                        </Typography>
                    </Grid>

                </Grid>
            </Grid>
        </>
    )
}

function Traveler_stories() {
    return (
        <>
            <Grid container lg={12}
                sx={{
                    paddingLeft: { lg: '20px', md: '20px', sm: '10px', xs: '10px' },
                    marginTop: '20px'
                }}>

                <Grid item lg={12}>
                    <Typography
                        sx={{
                            fontSize: {
                                lg: '30px', md: '25px', sm: '24px', xs: '20px'
                            }
                        }}>
                        Traveler Stories
                    </Typography>
                </Grid>

                <Grid container lg={12}
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        justifyContent: 'start',
                        alignItems: 'center',
                        padding: '10px',
                    }}>
                    <Grid item lg={3} md={3} xs={12}
                        sx={{
                            marginBottom: { sm: '10px', xs: '10px' },
                            marginRight: '20px',
                            padding: '20px',
                            borderRadius: '10px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
                        }}>
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '18px',
                                marginBottom: '5px'
                            }}>
                            Jane Smith
                        </Typography>
                        <Typography>
                            The travel tips were really helpful
                        </Typography>

                        <Stack spacing={1}>
                            <Rating name="size-large" defaultValue={4} size="large" readOnly />
                        </Stack>


                    </Grid>

                    <Grid item lg={3} md={3} xs={12}
                        sx={{
                            marginBottom: { sm: '10px', xs: '10px' },
                            padding: '20px',
                            borderRadius: '10px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
                        }}>
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '18px',
                                marginBottom: '5px'
                            }}>
                            John Doe
                        </Typography>
                        <Typography>
                            Amazing platform to explore India's beauty!
                        </Typography>

                        <Stack spacing={1}>
                            <Rating name="size-large" defaultValue={4.5} size="large" precision={0.5} readOnly />
                        </Stack>

                    </Grid>
                </Grid>

            </Grid>

        </>
    )
}

function Our_vision() {
    return (
        <>
            <Grid container lg={12}
                sx={{
                    paddingLeft: { lg: '20px', md: '20px', sm: '10px', xs: 'unset' },
                    marginTop: '20px'
                }}>
                <Grid item lg={12}
                    sx={{
                        width: '100%'
                    }}>
                    <Typography
                        sx={{
                            fontSize: {
                                lg: '30px', md: '25px', sm: '24px', xs: '20px'
                            },
                            textAlign: 'center',
                            marginBottom: '10px',
                        }} >
                        Our vision
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        sx={{
                            textAlign: 'center',
                            marginBottom: '10px',
                            paddingLeft: '10%',
                            paddingRight: '10%'
                        }}>
                        Our vision is to expand our platform by adding more hidden gems of India,
                        providing exclusive travel itineraries, and collaborating with local guides
                        for a more immersive experience. We aim to showcase the richness of India's
                        culture and heritage, offering travelers unique insights and unforgettable
                        adventures off the beaten path. Join us as we uncover the diverse landscapes,
                        historical treasures, and vibrant communities that make India truly special.

                    </Typography>
                </Grid>

            </Grid>
        </>
    )
}

function View_direction() {
    return (
        <>
            <Grid container lg={12}
                sx={{
                    paddingLeft: '20px',
                    marginTop: '20px',
                    marginBottom: '30px',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                <Grid item lg={12} ms={12}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'

                    }}>
                    <Link to={"/destination"}><Button
                        sx={{
                            marginRight: '30px',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            backgroundColor: '#4CAF50',
                            color: '#ffffff',
                            transition: 'background-color 0.3s',
                            '&:hover': {
                                backgroundColor: '#3e8e41'
                            }
                        }}
                    >
                        Explore Destination
                    </Button>
                    </Link>
                    <Link to={"/contact"}>
                        <Button
                            sx={{
                                padding: '10px 20px',
                                borderRadius: '5px',
                                border: '2px solid #4CAF50',
                                color: '#4CAF50',
                                transition: 'background-color 0.3s',
                                '&:hover': {
                                    backgroundColor: '#3e8e41',
                                    color: 'white'
                                }
                            }}
                        >
                            Get In Touch
                        </Button>
                    </Link>
                </Grid>
            </Grid >
        </>
    )
}


function Abouts() {
    return (
        <div>
            <Banner />
            <Our_journey />
            <Why_chooseUS />
            <Traveler_stories />
            <Our_vision />
            <View_direction />
        </div>
    )
}

export default Abouts

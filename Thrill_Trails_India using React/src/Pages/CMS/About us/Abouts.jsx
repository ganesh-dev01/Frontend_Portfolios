import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import './Abouts.css'
import { Typography } from '@mui/material';

import bannerbg from '../../Images/banner1.jpg'


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



function Abouts() {
    return (
        <div>
            <Banner />
        </div>
    )
}

export default Abouts

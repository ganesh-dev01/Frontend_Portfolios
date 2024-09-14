import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import './Abouts.css'
import { Typography } from '@mui/material';

import bannerbg from '../../Images/img1.jpg'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Item>xs=8</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={8}>
                    <Item>xs=8</Item>
                </Grid>
            </Grid>
        </Box>
    );
}


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
                            top: '40%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Typography
                            sx={{
                                color: 'white',
                                fontSize: { xs: '3.5vw', sm: '2.5vw' }
                            }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                        <Typography
                            sx={{
                                color: 'white',
                                fontSize: { xs: '2.5vw', sm: '1.5vw' }
                            }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
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

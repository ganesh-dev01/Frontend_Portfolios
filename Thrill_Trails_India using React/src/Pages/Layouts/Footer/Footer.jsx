import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <Box sx={{ backgroundColor: '#f5f5f5', padding: '20px 0', marginTop: 'auto' }}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item>
                    <Link to="/" style={{ textDecoration: 'none', color: '#e67300' }}>
                        <Typography variant="body1">Home</Typography>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/abouts" style={{ textDecoration: 'none', color: '#e67300' }}>
                        <Typography variant="body1">Abouts</Typography>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/destination" style={{ textDecoration: 'none', color: '#e67300' }}>
                        <Typography variant="body1">Destination</Typography>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/contact" style={{ textDecoration: 'none', color: '#e67300' }}>
                        <Typography variant="body1">Contact</Typography>
                    </Link>
                </Grid>
            </Grid>
            <Typography variant="body2" color="textSecondary" align="center" sx={{ marginTop: '20px' }}>
                © {new Date().getFullYear()} Your Company Name. All rights reserved.
            </Typography>
        </Box>
    );
}

export default Footer;

import React from 'react';
import { Container, Grid, Typography, TextField, Button, Box } from '@mui/material';
import { orange } from '@mui/material/colors';

const Contact = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom sx={{ marginTop: '20px' }}>Contact Us</Typography>
                </Grid>
                <Grid item xs={12} md={6} sx={{ paddingRight: '20px' }}>
                    <Typography variant="h6" gutterBottom>
                        Thrill Trails India</Typography>
                    <Typography variant="body1" gutterBottom>
                        At Thrill Trails India, we are dedicated to exploring and sharing insights
                        about the top tourist spots in this beautiful country. Our website is a valuable
                        resource for travelers looking to enhance their adventures, offering tips and
                        recommendations for unforgettable experiences.<br /><br />
                        If you have any questions or need assistance, feel free to reach out.
                        <br />We're here to help you on your journey!
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} sx={{ marginBottom: '50px' }}>
                    <Typography variant="h6" gutterBottom sx={{ color: 'orange' }}>Send us a Message</Typography>
                    <Box component="form" sx={{ mt: 2 }}>
                        <TextField
                            fullWidth
                            label="Name"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Phone Number"
                            variant="outlined"
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            label="Message"
                            multiline
                            rows={4}
                            variant="outlined"
                            margin="normal"
                            required
                        />
                        <Button variant="contained" size="large" sx={{ marginTop: '30px', background: 'green' }}>
                            Send Message
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container >
    );
};

export default Contact;

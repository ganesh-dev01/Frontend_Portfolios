import React from 'react';
import { Container, Typography, Grid, Paper, Box, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import './Abouts.css';
import img8 from '../../Images/img8.jpg';
import img9 from '../../Images/img9.jpg';
import img10 from '../../Images/img10.jpg';

function ExploreCard() {
    return (
        <Card sx={{ maxWidth: 370 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={img8}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Rishikesh, Uttarakhand
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    White-water rafting, bungee jumping, cliff jumping, trekking, and camping

                    Known as the "Yoga Capital of the World," Rishikesh is also a hotspot for
                    adventure sports, especially white-water rafting on the Ganges River.
                    The surrounding hills and forests provide excellent opportunities for
                    trekking and camping.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

function ExploreCard2() {
    return (
        <Card sx={{ maxWidth: 370 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={img9}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Leh-Ladakh, Jammu & Kashmir
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>

                    High-altitude trekking, motorbiking (especially on the Leh-Manali Highway),
                    river rafting on the Zanskar River, and mountain climbing
                    With its rugged landscapes, remote mountain passes, and pristine lakes,
                    Leh-Ladakh is a paradise for adventure seekers.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

function ExploreCard3() {
    return (
        <Card sx={{ maxWidth: 370 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={img10}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Manali, Himachal Pradesh
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Paragliding, skiing, snowboarding, trekking, river rafting, and zorbing
                    Manali is a popular destination for both winter and summer
                    adventure sports. Solang Valley is particularly famous for paragliding
                    and skiing, while the nearby Rohtang Pass offers opportunities for snow
                    activities.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

function Abouts() {
    return (
        <Container className="abouts-container">
            <Typography variant="h3" component="h1" gutterBottom className="header">
                About Us
            </Typography>

            <Typography variant="h5" component="h2" gutterBottom className="subheader">
                Our Story
            </Typography>
            <Typography variant="body1" paragraph className="story-text">
                Welcome to our Indian tourism website! Our mission is to provide travelers with comprehensive and engaging information about India’s diverse and vibrant destinations. From the bustling streets of Mumbai to the serene backwaters of Kerala, we aim to make your journey memorable and exciting.
                <br /><br />
                Our team of passionate travelers and local experts curates the best travel tips, top attractions, and hidden gems to help you explore the true essence of India. Whether you’re seeking adventure, cultural experiences, or relaxation, we’ve got you covered.
            </Typography>

            <Typography variant="h5" component="h2" gutterBottom className="subheader">
                Key Features
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={5} className="feature-card">
                        <Typography variant="h6" component="h3" className="feature-title">
                            Interactive Maps
                        </Typography>
                        <Typography variant="body2" paragraph>
                            Explore India with our interactive maps that highlight popular destinations, cultural landmarks, and local attractions. Our maps are designed to make your trip planning easier and more enjoyable.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={5} className="feature-card">
                        <Typography variant="h6" component="h3" className="feature-title">
                            Personalized Recommendations
                        </Typography>
                        <Typography variant="body2" paragraph>
                            Receive tailored travel recommendations based on your interests and preferences. Our advanced algorithms suggest destinations, activities, and experiences that match your unique travel style.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>

            <Typography variant="h5" component="h2" gutterBottom className="subheader">
                Tourist Information
            </Typography>
            <Box className="info-section">
                <Typography variant="h6" component="h3" gutterBottom className="info-title">
                    Travel Tips
                </Typography>
                <Typography variant="body2" paragraph>
                    Discover essential travel tips for navigating India, including cultural etiquette, health precautions, and safety advice. Our tips will help you make the most of your trip and ensure a smooth travel experience.
                </Typography>
                <Typography variant="h6" component="h3" gutterBottom className="info-title">
                    Local Cuisine
                </Typography>
                <Typography variant="body2" paragraph>
                    India’s culinary landscape is as diverse as its culture. Learn about regional specialties, must-try dishes, and popular food festivals. From spicy street food to rich regional curries, there’s something for every palate.
                </Typography>
            </Box>

            <Typography variant="h5" component="h2" gutterBottom className="subheader">
                Explore Destinations
            </Typography>
            <Grid container spacing={3} className="image-section">
                <Grid item xs={12} md={4}>
                    <Paper className="image-card" elevation={5}>
                        <ExploreCard />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper className="image-card" elevation={5}>
                        <ExploreCard2 />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper className="image-card" elevation={5}>
                        <ExploreCard3 />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Abouts;

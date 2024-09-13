import React from 'react'
import './Home.css'
import CarouselComponent from './Carousel/CarouselComponent'
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Grid, Card, CardMedia, CardContent, CardActions, Typography, IconButton, Paper } from '@mui/material';
import img1 from '../../Images/img1.jpg';
import img2 from '../../Images/img2.jpg';
import img3 from '../../Images/img3.jpg';
import img4 from '../../Images/img4.jpg';
import img5 from '../../Images/img5.jpg';
import img6 from '../../Images/img6.jpg';
import img7 from '../../Images/img7.jpg';
import city1 from '../../Images/city1.jpg';
import city2 from '../../Images/city2.jpg';
import city3 from '../../Images/city3.jpg';
import city4 from '../../Images/city4.jpg';
import city5 from '../../Images/city5.jpg';
import city6 from '../../Images/city6.jpg';



function ActionAreaCard() {
    return (
        <Card className='card'>

            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={img1}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Taj Mahal, Agra
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        One of the Seven Wonders of the World, the Taj Mahal is an iconic
                        symbol of love and architectural beauty. Built by Mughal Emperor
                        Shah Jahan in memory of his wife Mumtaz Mahal, this white marble
                        mausoleum is a UNESCO World Heritage Site.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

function ActionAreaCard2() {
    return (
        <Card className='card'>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={img2}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Jaipur, Rajasthan (The Pink City)
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Jaipur, the capital of Rajasthan, is famous for its rich history,
                        stunning palaces, and vibrant culture. Key attractions include
                        the Hawa Mahal, Amer Fort, and City Palace.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

function ActionAreaCard3() {
    return (
        <Card className='card'>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={img3}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Kerala Backwaters
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        The backwaters of Kerala offer a tranquil and scenic experience,
                        with a network of interconnected rivers, lakes, and canals.
                        Houseboat cruises on these waters provide a unique way to
                        explore the lush green landscapes and local life.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

function Blog() {
    return (
        <>

            <Grid container sx={{ px: "5%" }} alignItems="center">

                <Grid item lg={8} md={8} sm={6} xs={12}>
                    <Box sx={{ padding: "20px" }} >
                        <h3>Varanasi, Uttar Pradesh</h3>
                        <br></br>
                        <p>
                            Description: One of the oldest continuously inhabited cities in the world,
                            Varanasi is a spiritual hub and a major pilgrimage destination for Hindus.
                            The city's ghats along the Ganges River are famous for their evening aarti ceremonies.
                            <br></br>    <br></br>
                            Why Visit: Experience the spiritual essence of India, witness ancient rituals,
                            and explore the vibrant streets of this holy city.
                        </p>
                    </Box>
                </Grid>

                <Grid item lg={4} md={4} sm={6} xs={12}>
                    <Box>
                        <img src={img4}
                            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}>
                        </img>
                    </Box>
                </Grid>

                <Grid item lg={4} md={4} sm={6} xs={12}>
                    <Box>
                        <img src={img5}
                            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}>
                        </img>
                    </Box>
                </Grid>

                <Grid item lg={8} md={8} sm={6} xs={12}>
                    <Box sx={{ padding: "20px" }}>
                        <h3>Goa</h3>
                        <br></br>
                        <p>
                            Description: Known for its stunning beaches, vibrant nightlife, and Portuguese
                            colonial architecture, Goa is a popular destination for both relaxation and adventure.
                            The state's unique blend of Indian and Portuguese cultures is evident in its food,
                            music, and festivals.
                            <br></br>    <br></br>
                            Why Visit: Perfect for beach lovers, partygoers, and those interested in exploring a
                            unique cultural fusion.
                        </p>
                    </Box>
                </Grid>


                <Grid item lg={8} md={8} sm={6} xs={12}>
                    <Box sx={{ padding: "20px" }}>
                        <h3>Leh-Ladakh, Jammu & Kashmir</h3>
                        <br></br>
                        <p>
                            Description: Situated in the northernmost region of India, Leh-Ladakh is renowned
                            for its breathtaking landscapes, high-altitude deserts, and Buddhist monasteries.
                            It’s an adventurer's paradise with opportunities for trekking, biking, and
                            exploring remote areas.
                            <br></br>    <br></br>
                            Why Visit: The dramatic landscapes, clear skies, and tranquil monasteries
                            offer a once-in-a-lifetime experience in one of the most picturesque
                            regions of India.
                        </p>
                    </Box>
                </Grid>

                <Grid item lg={4} md={4} sm={6} xs={12}>
                    <Box>
                        <img src={img6}
                            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}>
                        </img>
                    </Box>
                </Grid>

                <Grid item lg={4} md={4} sm={6} xs={12}>
                    <Box>
                        <img src={img7}
                            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}>
                        </img>
                    </Box>
                </Grid>

                <Grid item lg={8} md={8} sm={6} xs={12}>
                    <Box sx={{ padding: "20px" }}>
                        <h3>Mysore, Karnataka</h3>
                        <br></br>
                        <p>
                            Description:Mysore is known for its rich history, grand palaces, and vibrant
                            festivals, particularly the famous Dussehra festival. The Mysore Palace is
                            a major attraction, showcasing Indo-Saracenic architecture and an opulent interior.
                            <br></br>    <br></br>
                            Why Visit: Ideal for history enthusiasts and those interested in exploring
                            traditional South Indian culture and royal heritage.
                        </p>
                    </Box>
                </Grid>

            </Grid>
        </>
    );
}


function Slick() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <h3 style={{
                textAlign: "center", fontSize: "30px", marginTop: "20px", fontFamily: 'cursive',
                color: '#138808cb'
            }}>
                Mega cities in India</h3>
            <Slider {...settings} className='slider'>
                <div>
                    <h4 className='cityname'>
                        Mumbai
                    </h4>
                    <img src={city1} className='slide-img'></img>
                </div>
                <div>
                    <h4 className='cityname'>
                        Kolkata
                    </h4>
                    <img src={city2} className='slide-img'></img>
                </div>
                <div>
                    <h4 className='cityname'>
                        Delhi
                    </h4>
                    <img src={city3} className='slide-img'></img>
                </div>
                <div>
                    <h4 className='cityname'>
                        Bangalore
                    </h4>
                    <img src={city4} className='slide-img'></img>
                </div>
                <div>
                    <h4 className='cityname'>
                        Chennai
                    </h4>
                    <img src={city5} className='slide-img'></img>
                </div>
                <div>
                    <h4 className='cityname'>
                        Hyderabad
                    </h4>
                    <img src={city6} className='slide-img'></img>
                </div>
            </Slider>
        </>
    );
}




function Home() {
    return (
        <div>

            <CarouselComponent />

            <div className='card-box'>
                <ActionAreaCard />
                <ActionAreaCard2 />
                <ActionAreaCard3 />
            </div>

            <Blog />

            <Slick />

        </div>
    )
}

export default Home

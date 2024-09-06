import React from 'react';
import './Carousel.css'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import slide1 from '../../../Images/img1.jpg'
import slide2 from '../../../Images/img2.jpg'
import slide3 from '../../../Images/img3.jpg'

function CarouselComponent(props) {
    var items = [
        {
            image: slide1
        },
        {
            image: slide2
        },
        {
            image: slide3
        }
    ]

    return (
        <Carousel
            navButtonsProps={{
                style: {
                    backgroundColor: 'transparent',
                    color: 'white',
                    borderRadius: 0,
                    marginTop: '-50px',
                }
            }}
            navButtonsWrapperProps={{
                style: {
                    top: '50%',
                    transform: 'translateY(-50%)'
                }
            }}
            interval={3000}
        >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper id='Carousel-box'>
            <img src={props.item.image} id='slide-img' alt="slide" />
        </Paper>
    )
}

export default CarouselComponent;

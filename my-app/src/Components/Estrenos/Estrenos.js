import React from "react";
import Slider from "react-slick";
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { arrayImg } from "./arrayImg.js";



export const Title = styled(Typography)(() => ({
    fontSize: 24,
    marginBottom: 25,
    marginTop: 25,
    textAlign: 'center',
}))


const Estrenos = () =>{
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 3000,
            cssEase: "linear"
    };
    return (
        <Box sx={{
            mb: 8,
        }}>

            <Title sx={{color: '#FF7700'}} gutterBottom>Proximos Estrenos</Title>
            <Slider {...settings}>
                {arrayImg.map((item) => (
                    <div className="Pelicula">
                        <img src={item.pelicula} alt={item.title} />
                    </div>
                )) }
            </Slider>
        </Box>

    );
}
export default Estrenos;
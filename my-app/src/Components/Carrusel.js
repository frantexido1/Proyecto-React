// import React, { useState } from 'react';
// import { useTheme } from '@mui/material/';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {datosCarrusel} from "./Data";
import "./Carrusel.css";

export const Carrusel = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  
    return (
    <div classname="Carrusel">
        <Slider {...settings}>
        {datosCarrusel.map((item)=>(
        <div classname="card">
          <div classname="card-top">
            <img src={item.linkImg} alt={item.title}/>
            <h1>{item.title}</h1>
          </div>
          <div classname="card-bottom">
            <h3>{item.price}</h3>
            <p className="category">{item.category}</p>
          </div>
        </div>
        ))}
        </Slider>
    </div>
   );
}


export default Carrusel;
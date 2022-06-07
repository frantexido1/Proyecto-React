import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Imagenes from "./imageSlider";
import Arrows from "./Arrows";
import Dots from "./Dots";
import "./Slider.css";

const len = Imagenes.length - 1;

function Slider(props){
    const [activeIndex, setActiveIndex]= useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 10000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return(
        <div className="slider-container">
            <SliderContent activeIndex={activeIndex} imageSlider={Imagenes}/>
            <Arrows 
            prevSlide={() => 
                setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
            nextSlide={() => 
                setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
            />
            <Dots activeIndex={activeIndex} imageSlider={Imagenes} 
            onclick={activeIndex=>setActiveIndex(activeIndex)}/>
        </div>
    );
}

export default Slider;
import React from "react";
import "../Components/imageSlider";

function Dots({activeIndex, onclick, imageSlider}) {
    return(
        <div className="all-dots">
            {imageSlider.map((Slide, index)=> (
                <span 
                key={index} 
                className={`${activeIndex === index ? "dot active-dot" : "dot"}`} 
                onClick={() => onclick(index)}
            ></span>))}
        </div>
    );
}

export default Dots;

import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react'

import f1  from '../pictures/fudger/final-screen-1.png'
import f2  from '../pictures/fudger/final-screen-2.png'
import f3  from '../pictures/fudger/final-screen-3.png'
function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };
    
    return (
        <div className="carousel">
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
        <Carousel.Item>
           
            <img
            className="carousel-img"
            src={f1}
            alt="First slide"
            />
        
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="carousel-img"
            src={f2}
            alt="Second slide"
            />
    
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="carousel-img"
            src= {f3}
            alt="Third slide"
            />
        </Carousel.Item>
        </Carousel>
        <a className="project-button-a" href="https://fqqihb.axshare.com/#g=1&p=home&c=1" target="_blank" rel="noopener noreferrer"> 
            <button className="project-button">
            View prototype
            </button>
        </a>
    
        </div>
    );
}

 
export default ControlledCarousel
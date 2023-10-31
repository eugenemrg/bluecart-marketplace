import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
    return (
        <Carousel>
            <div>
                <img src="image1.jpg"/> 
            </div>
            <div>
                <img src="image2.jpg"/>
            </div>
            <div>
                <img src="image3.jpg"/>
            </div>
        </Carousel>
    )
}

export default CarouselComponent;

import React from "react";
import { Carousel } from "react-responsive-carousel";
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
    return (
      
   <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="logo" class="d-block w-100" alt="" />
    </div>
    <div class="carousel-item">
      <img src="logo" class="d-block w-100" alt="" />
    </div>
    <div class="carousel-item">
      <img src="logo" class="d-block w-100" alt="" />
    </div>
  </div>
</div>
        
    )
}

export default CarouselComponent;

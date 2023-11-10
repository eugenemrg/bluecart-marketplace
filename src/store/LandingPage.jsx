import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Footer from "./Footer";
import "react-responsive-carousel/lib/styles/carousel.css";
import './LandingPage.css';
import { Link } from "react-router-dom";

const LandingPage = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit =() =>{
        const query= searchQuery
        localStorage.setItem('searchQuery',query)
    }

    return (
        <div className="page">
            <div className="landing-page">
                <div className="carousel-text">
                    <h1>Discover the best deals on all popular online stores</h1>
                    <p>Millions of products across multiple categories for all shopping needs</p>
                    <input
                        id="search"
                        type="text"
                        placeholder="Search for items and products"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <button onClick={handleSubmit}><Link to='/product'>Search</Link></button>
                </div>

                <Carousel
                    showArrows={true}
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={5000}
                >
                    <div>
                        <img src="/public/assets/pexels-cup-of-couple-6956801.png" alt="carousel-1" />
                    </div>
                    <div>
                        <img src="/public/assets/pexels-ivan-samkov-7621012.png" alt="carousel-2" />
                    </div>
                    <div>
                        <img src="/public/assets/pexels-sora-shimazaki-5935744.png" alt="carousel-3" />
                    </div>
                </Carousel>
            </div>
            <Footer />
        </div>
    );
};

export default LandingPage;

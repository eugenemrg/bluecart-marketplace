import React, { useState } from "react";
import Footer from "./Footer";
import './LandingPage.css';

const LandingPage = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <>
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
                </div>

                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/src/assets/pexels-cup-of-couple-6956801.png" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="/src/assets/pexels-ivan-samkov-7621012.png" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="/src/assets/pexels-sora-shimazaki-5935744.png" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default LandingPage;

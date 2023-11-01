import React from "react";
import Carousel from './CarouselComponent';
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from './Actions';
import Footer from "./Footer";
import './LandingPage.css';


const LandingPage = () => {
    const dispatch = useDispatch();
    const searchQuery = useSelector((state) => state.searchQuery);

    const handleSearchChange = (e) => {
        const newQuery = e.target.value;
        dispatch(setSearchQuery(newQuery));
    };

    return (
        <>
            <div className="landing-page">
                <div className="header">
                    <h1>Discover the best deals on all <br /> popular online stores</h1>
                    <p>Millions of products across multiple categories for all shopping needs</p>
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search for items and products"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
                <Carousel />
            </div>
            <Footer />
        </>
    );
};

export default LandingPage;

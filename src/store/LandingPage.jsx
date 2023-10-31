import React from "react";
import Basket from './Basket';
import Carousel from './Carousel';
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from './Actions'; 

const LandingPage = () => {
    const dispatch = useDispatch();
    const searchQuery = useSelector((state) => state.searchQuery);

    const handleSearchChange = (e) => {
        const newQuery = e.target.value; 
        dispatch(setSearchQuery(newQuery)); 
    };

    return (
        <div className="landing-page">
            <Basket />
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
                    <button onClick={() => console.log('Search clicked')}>Search</button>
                </div>
            </div>
            <Carousel />
            <div className="footer">
                <h2>Supported Sites</h2>
                <div className="logo-container">
                </div>
            </div>
        </div>
    );
};

export default LandingPage;

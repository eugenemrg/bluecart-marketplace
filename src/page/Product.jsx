import React, { useState, useEffect } from 'react';
import ProductCard from '../component/ProductCard';
import ProductFilter from '../component/ProductFilter';

function Product() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const [showCard, setShowCard] = useState(false);
  const [filterType, setFilterType] = useState(null);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
    // Set the searchQuery to the value from local storage
    const storedQuery = localStorage.getItem('searchQuery');
    if (storedQuery) {
      setSearchQuery(storedQuery);
    }
  }, []);

  function fetchData() {
    let queryToUse = searchQuery;

    // Check if there is a search query in local storage
    const storedQuery = localStorage.getItem('searchQuery');
    if (storedQuery) {
      queryToUse = storedQuery;
    }

    if (queryToUse !== "") {
      const requestBody = JSON.stringify({ query: queryToUse });

      fetch("https://bluecart-api.onrender.com/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestBody,
      })
        .then((response) => response.json())
        .then((responseData) => setData(responseData))
        .catch((error) => console.error('Error fetching data:', error));
    }
  }

  const openProductCard = (product) => {
    setSelectedProduct(product);
    setShowCard(true);
  };

  const closeProductCard = () => {
    setSelectedProduct(null);
    setShowCard(false);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const getIconForUrl = (url) => {
    if (url) {
      if (url.includes('amazon')) {
        return 'fa-brands fa-amazon';
      } else if (url.includes('ebay')) {
        return 'fa-brands fa-ebay';
      } else if (url.includes('alibaba')) {
        return '';
      }
    }

    return 'default-icon.png';
  };

  const handleFilter = (newFilterType) => {
    setFilterType(newFilterType);
  };

  const toggleFilterDropdown = () => {
    setShowFilterDropdown(!showFilterDropdown);
  };

  // Use useEffect to fetch data when searchQuery changes
  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  return (
    <div className={`page ${showCard ? 'fade' : ''}`}>
      <div className="card">
        <div className="search">
          <p>Millions of products across multiple categories for all your shopping needs</p>
          <input
            type="text"
            placeholder="Search here for your products ..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className="filter">
          <button onClick={toggleFilterDropdown}>
            <i className="fas fa-sort"></i> Filter
          </button>
          {showFilterDropdown && <ProductFilter onFilterChange={handleFilter} />}
        </div>
      </div>
      <div className="container">
        {data.map((item, index) => (
          <div className="box" key={index} onClick={() => openProductCard(item)}>
            <img src={item.image} alt="" />
            <p>{item.name}</p>
            <br />
            <p>Price <span>{item.price}</span></p>
            <br />
            <p>Rating <span>{item.rating}</span></p>
            <br />
            <i className={getIconForUrl(item.link)}></i>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <ProductCard product={selectedProduct} onClose={closeProductCard} />
      )}
      <style>
        {`
          input[type="text"],
          input[type="email"],
          input[type="password"] {
            text-transform: none;
          }
        `}
      </style>
    </div>
  );
}

export default Product;

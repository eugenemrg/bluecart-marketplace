import React, { useState, useEffect } from 'react';
import ProductCard from '../component/ProductCard';

function Product() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const [showCard, setShowCard] = useState(false);

  // useEffect(() => {
    
  //   }
  // }, [searchQuery]);

function getitems(e) {
  if (e.keyCode === 13){
    if (searchQuery !== "") {
      const requestBody = JSON.stringify({ query: searchQuery });
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
}
  console.log(data);

  const openProductCard = (product) => {
    setSelectedProduct(product);
    setShowCard(true); // Show the card and fade the background
  };

  const closeProductCard = () => {
    setSelectedProduct(null);
    setShowCard(false); // Hide the card and restore the background
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setSearchQuery(event.target.value);
    }
  };
  const getIconForUrl = (url) => {
   if(url){
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
            onKeyUp={getitems}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="filter">
          <button>
            <i className="fas fa-sort"></i> Filter {/* Use the correct Font Awesome class name */}
          </button>
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

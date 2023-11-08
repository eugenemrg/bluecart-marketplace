import React, { useState, useEffect } from 'react';
import ProductCard from '../page/Product';

function Product() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]); 

  useEffect(() => {
    const requestBody = JSON.stringify({ query: searchQuery });

    if (searchQuery == ""){
      fetch("https://bluecart-api.onrender.com/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
      })
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error('Error fetching data:', error));
    }
  
    
  }, [searchQuery]);
  

  const openProductCard = (product) => {
    setSelectedProduct(product);
  };

  const closeProductCard = () => {
    setSelectedProduct(null);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  console.log(data)

  return (
    <div className="page">
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
          <button>
            <i className="fa-solid fa-sort"></i> Filter
          </button>
        </div>
      </div>
      <div className="container">
       
      </div>
      {selectedProduct && (
        <ProductCard product={selectedProduct} onClose={closeProductCard} />
      )}
    </div>
  );
}

export default Product;

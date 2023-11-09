import React from 'react';

function ProductFilter({ onFilterChange }) {
  const handleFilterChange = (filterType) => {
    onFilterChange(filterType);
  };

  return (
    <div className="filter-card">
      <label>Filter by:</label>
      <button className='btn'>Review</button>
    </div>
  );
}

export default ProductFilter;

import React from 'react'

function Product() {
  return (
    <div className='page'>
        <div className="card">
            <div className="search">
                <p>Millions of products across multiple categories for all your shopping needs</p>
                <input type="text" placeholder='search here for your products ...'/>
            </div>
            <div className="filter">
                <button><i class="fa-solid fa-sort"> </i> Filter</button>
            </div>
        </div>
    </div>
  )
}

export default Product
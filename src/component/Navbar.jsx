import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='header'>
        <div className="logo">
            <i class="fa-solid fa-cart-shopping"></i>
            <span>Blue Cart</span>
        </div>
        <div className='Links'>
            <Link>Home</Link>
            <Link>Sponsors</Link>
            <Link>FAQs</Link>
            <Link>Terms</Link>
        </div>
        <div className="buttons">
            <button>Login</button>
            <button>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar
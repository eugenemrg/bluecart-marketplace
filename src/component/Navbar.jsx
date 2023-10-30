import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignupForm from './SignupForm';

function Navbar() {
  const [showSignupForm, setShowSignupForm] = useState(false);

  const toggleSignupForm = () => {
    setShowSignupForm(!showSignupForm);
  };

  return (
    <div className='header'>
      <div className="logo">
        <i className="fa-solid fa-cart-shopping"></i>
        <span>Blue Cart</span>
      </div>
      <div className='Links'>
        <Link to='/'>Home</Link>
        <Link to='/product'>Product</Link>
        <Link>Profile</Link>
        <Link>History</Link>
      </div>
      <div className="buttons">
        <button>Login</button>
        <button onClick={toggleSignupForm}>Sign Up</button>
      </div>
      {showSignupForm && <SignupForm />}
    </div>
  );
}

export default Navbar;

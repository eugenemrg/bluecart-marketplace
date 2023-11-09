import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm'; 
import SignupForm from './SignupForm'; 


function Navbar() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowSignupForm(false)
  };

  const toggleSignupForm = () => {
    setShowSignupForm(!showSignupForm);
    setShowLoginForm(false)
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
        <Link to='/profile'>Profile</Link>
        <Link to='/history'>History</Link>
      </div>
      <div className="buttons">
        <button onClick={toggleLoginForm}>Login</button>
        <button onClick={toggleSignupForm}>Sign Up</button>
      </div>
      {showSignupForm && <SignupForm onClose={toggleSignupForm} onOpen={toggleLoginForm}/>}
      {showLoginForm && <LoginForm onClose={toggleLoginForm} onOpen={toggleSignupForm}/>}
    </div>
  );
}

export default Navbar;

import React, { useState } from 'react';

function SignupForm({ onClose }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleForm = () => {
    setIsOpen(!isOpen);
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className={`form ${isOpen ? 'open' : 'closed'}`}>
      
      <h3>Blue MarketPlace</h3>
      
      <form action="">
        <input type="text" id="username" placeholder='Username' required />
        <input type="email" id="email" placeholder='Email' required />
        <input type="password" id="password" required placeholder='Enter password' />
        <input type="password" id="confirmPassword" required placeholder='Confirm password'/>
        <button>Sign Up</button>
        <p>Already have an account? <span>LogIn</span></p>
      </form>
    </div>
  );
}

export default SignupForm;

import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

function LoginForm({ onClose }) {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);

  useEffect(() => {
    const handleTokenFromURL = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');

      if (token) {
        localStorage.setItem('token', token);
        setToken(token);
      }
    };

    handleTokenFromURL();
  }, []);

  const toggleForm = () => {
    setIsOpen(!isOpen);
    if (onClose) {
      onClose();
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    try {
      const response = await fetch('https://bluecart-api.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log(data)
        localStorage.setItem('token', data);
        setToken(data);

        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'You have successfully logged in.',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Invalid email or password. Please try again.',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred during login. Please try again later.',
      });
    }
  };

  return (
    <div className={`form form2 ${isOpen ? 'open' : 'closed'}`}>
      <form onSubmit={handleLogin}>
        <h3>Blue MarketPlace</h3>
        <input type="email" placeholder="email" value={email} onChange={handleEmailChange} />
        <input type="password" placeholder="password" value={password} onChange={handlePasswordChange} />
        <p>
          <span>Forgot password </span>I do not have an account? <span>Signup</span>
        </p>
        <button type="submit">Login</button>
      </form>
      <style>
        {`
          input[type="text"],
          input[type="email"],
          input[type="password"] {
            text-transform: none; /* Remove default capitalization */
          }
        `}
      </style>
    </div>
  );
}

export default LoginForm;

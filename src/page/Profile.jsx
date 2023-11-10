import React, { useEffect, useState } from 'react';

function Profile() {
  const handleDeleteAccount = async () => {
    const deleteApiUrl = 'https://bluecart-api.onrender.com/profile';
    const token = localStorage.getItem('access_token');

    if (!token) {
      alert('You need to be logged in to delete your account.');
      return;
    }

    try {
      const response = await fetch(deleteApiUrl, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        localStorage.removeItem('token');
        alert('Account deleted successfully.');
      } else {
        const errorData = await response.json();
        console.error('Error response data:', errorData);
        alert(`Failed to delete account. Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while deleting the account. Please try again.');
    }
  };

  const [userData, setUserData] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      upDate(token);
    }
  }, []);

  const upDate = (token) => {
    fetch('https://bluecart-api.onrender.com/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUserData(data));
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const updateApiUrl = 'https://bluecart-api.onrender.com/profile';
    const token = localStorage.getItem('access_token');
    if (!token) {
      alert('You need to be logged in to update your profile.');
      return;
    }
    const { username, newPassword, confirmNewPassword } = e.target.elements;
    if (newPassword && newPassword.value !== confirmNewPassword.value) {
      alert('New password and confirm password do not match.');
      return;
    }

    const requestData = {
      username: username.value,
      newPassword: newPassword.value,
    };

    try {
      const response = await fetch(updateApiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        alert('Profile updated successfully.');
        upDate(token);
      } else {
        const errorData = await response.json();
        console.error('Error response data:', errorData);
        alert(`Failed to update profile. Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while updating the profile. Please try again.');
    }
  };

  return (
    <div className='page'>
    <div className="profile">
      <h3>Profile Settings</h3>
      <form onSubmit={handleUpdateProfile}>
        <input type="text" name="username" placeholder='Username' value={userData.username} />
        <input type="email" placeholder='Email' value={userData.email} disabled />
        <input type="password" placeholder='Old Password' value={userData.password} disabled />
        <input type="password" name="newPassword" placeholder='New Password' />
        <input type="password" name="confirmNewPassword" placeholder='Confirm Password' />
        <button type="submit">Update Profile</button>
        <span onClick={handleDeleteAccount}>Delete Account</span>
      </form>
      
    </div>
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

export default Profile;

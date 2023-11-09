import React, { useEffect, useState } from 'react';

function Profile() {
  const handleDeleteAccount = async () => {
    const deleteApiUrl = 'https://bluecart-api.onrender.com/profile';
    const token = localStorage.getItem('access_token')
    console.log(token)

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


  const [userData, setUserData]=useState('')
  const [userName, setUserName]=useState('')
  useEffect(() =>{
    const token = localStorage.getItem('access_token')
    console.log(token)
    if(token){
      upDate(token)
    }
  },[])
  const upDate = (token) =>{
    fetch('https://bluecart-api.onrender.com/profile',{
      headers:{
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res)=>res.json())
    .then((data) =>setUserData(data))
  }
  console.log(userData)
  return (
    <div className='page'>
      <div className="profile">
        <h3>Profile Settings</h3>
        <form action="">
          <input type="text" placeholder='Username' value={userData.username} />
          <input type="email" placeholder='Email' value={userData.email} disabled/>
          <input type="password" placeholder='Old Password' value={userData.password} disabled/>
          <input type="password" placeholder='New Password' />
          <input type="password" placeholder='Confirm Password'/>
          <button>Update Profile</button>
          <span onClick={handleDeleteAccount}>Delete Account</span>
        </form>
      </div>
    </div>
  );
}

export default Profile;
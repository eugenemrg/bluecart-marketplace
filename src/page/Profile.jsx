import React from 'react';

function Profile() {
  const handleDeleteAccount = () => {
    
    const deleteApiUrl = 'https://bluecart-api.onrender.com/profile';

    fetch(deleteApiUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        
      },
    })
      .then((response) => {
        if (response.ok) {
          
          alert('Account deleted successfully.');
        } else {
      
          alert('Failed to delete account. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='page'>
      <div className="profile">
        <h3>Profile Settings</h3>
        <form action="">
                <input type="text" placeholder='Username'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='old password'/>
                <input type="password" placeholder='new password'/>

                <button>Update Profile</button>

                <span onClick={handleDeleteAccount}>Delete Account?</span>
          </form>
      </div>
    </div>
  );
}

export default Profile;

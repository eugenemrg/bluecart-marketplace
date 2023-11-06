import React from 'react'

function Profile() {
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

                <span>Delete Account?</span>
            </form>
        </div>
    </div>
  )
}

export default Profile;
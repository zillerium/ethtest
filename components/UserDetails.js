// components/UserDetails.js
import React from 'react';

function UserDetails({ userDetails }) {
  return (
    <div>
      <p>Username: {userDetails.username}</p>
      {/* Display additional user details here */}
    </div>
  );
}

export default UserDetails;


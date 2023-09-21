import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve the JWT token from local storage
    const token = localStorage.getItem('token');

    // Make an authenticated HTTP GET request to get user details
    axios.get('/users/id', {
      headers: {
        Authorization: `Bearer ${token}`, // Include the JWT token in the Authorization header
      },
    })
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>ID: {user.id}</p>
      <p>Phone Number: {user.phoneNumber}</p>
      <p>Created At: {new Date(user.createdAt).toLocaleString()}</p>
      {/* Add more user details as needed */}
    </div>
  );
}

export default UserProfile;

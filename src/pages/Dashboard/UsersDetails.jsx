import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    // Define a function to fetch user details
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/users/${id}`, {
          // Add authorization headers with the JWT token
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    // Call the fetchUserDetails function
    fetchUserDetails();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      {/* <p>ID: {user.id}</p> */}
      <p>Phone Number: {user.phoneNumber}</p>
      <p>Created At: {new Date(user.createdAt).toLocaleString()}</p>
      {/* Add more user details as needed */}
    </div>
  );
}

export default UserProfile;

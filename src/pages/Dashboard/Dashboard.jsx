// // Dashboard.js
// import React from 'react';
// import UserDetails from './UsersDetails'; // Import the UserDetails component

// const Dashboard = () => {
//     const [user, setUser] = useState(null);

    

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <UserDetails user={user} />
//     </div>
//   );
// };

// export default Dashboard;

// UserProfile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Make a GET request to fetch the user details
    axios.get('http://localhost:4000/users/profile') // Replace with the actual endpoint and user ID or username
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          {/* Display other user details as needed */}
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default Dashboard;


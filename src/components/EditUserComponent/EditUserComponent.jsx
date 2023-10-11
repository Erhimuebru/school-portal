// // EditUserComponent.jsx
// import React, { useState } from 'react';
// import { apiUpdate } from '../../utils/api/axios'; // Import your API function for making PATCH requests

// const EditUserComponent = ({ user, onUpdate }) => {
//   const [formData, setFormData] = useState({
//     surname: user.surname,
//     password: user.password,
//     fullName: user.fullName,
//     classSection: user.classSection,
//     paymentStatus: user.paymentStatus,
//     examScores: user.examScores,
//     testScores: user.testScores,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleUpdate = async () => {
//     try {
//       // Make a PATCH request to update the user information
//       await apiUpdate(`/users/${user.id}`, formData);

//       // Call the onUpdate callback to inform the parent component about the update
//       onUpdate();
//     } catch (error) {
//       // Handle errors here
//       console.error('Error updating user:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Edit User Information</h2>
//       <div>
//         <label>Surname:</label>
//         <input type="text" name="surname" value={formData.surname} onChange={handleInputChange} />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
//       </div>
//       {/* Add more input fields for other user properties */}
//       <button onClick={handleUpdate}>Update</button>
//     </div>
//   );
// };

// export default EditUserComponent;



import React, { useState } from 'react';
import { apiGet, apiUpdate } from '../../utils/api/axios'; // Import your API functions

const EditUserComponent = () => {
  const [surname, setSurname] = useState('');
  const [user, setUser] = useState(null);

  const [formData, setFormData] = useState({
    surname: '',
    password: '',
    fullName: '',
    classSection: '',
    paymentStatus: '',
    examScores: '',
    testScores: '',
  });
  const handleGetUser = async () => {
    try {
      const response = await apiGet(`/users/${surname}`); // Replace with your API endpoint to get user by surname
      setUser(response.data);
    } catch (error) {
      // Handle error
      console.error('Error fetching user:', error);
    }
  };

  const handleEditUser = async (updatedUserData) => {
    try {
      const response = await apiUpdate(`/users/${user.id}`, updatedUserData); // Replace with your API endpoint to update user
      setUser(response.data);
      console.log('User updated successfully:', response.data);
    } catch (error) {
      // Handle error
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <button onClick={handleGetUser}>Get User</button>

      {user && (
        <div>
          <h2>User Details</h2>
          <p>Surname: {user.surname}</p>
          {/* Render other user details here */}

          <h2>Edit User</h2>
          {/* Create a form to edit user data */}
          {/* For simplicity, assuming user properties are directly editable */}
          <input
            type="text"
            placeholder="New Full Name"
            value={user.fullName}
            onChange={(e) => setUser({ ...user, fullName: e.target.value })}
          />

          
          {/* Add more input fields for other user properties */}
          <button onClick={() => handleEditUser(user)}>Save Changes</button>
        </div>
      )}
    </div>
  );
};

export default EditUserComponent;



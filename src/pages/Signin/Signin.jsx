// // src/components/SignIn.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { apiPost } from "../../utils/api/axios";
// import { useNavigate } from 'react-router-dom';
// function SignIn() {
//     const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     phoneNumber: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { phoneNumber, password } = formData;

//     try {
//       // Send a POST request to your authentication endpoint
//       const response = await apiPost('/users/login', { phoneNumber, password });

//       // If the authentication is successful, you can handle the response here
//       console.log('Authentication successful:', response.data);
//       navigate('/dashboard');
//     } catch (error) {
//       // Handle authentication failure
//       console.error('Authentication failed:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="w-full max-w-md">
//         <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
//           <h2 className="text-2xl font-bold mb-6">Sign In</h2>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
//             phoneNumber
//             </label>
//             <input
//               className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               type="phoneNumber"
//               id="phoneNumber"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//               Password
//             </label>
//             <input
//               className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               type="submit"
//             >
//               Sign In
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SignIn;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircleLoader } from 'react-spinners'
import { apiPost } from "../../utils/api/axios";
const SignIn = () =>
{
    const Navigate = useNavigate();
    const [formData, setFormData] = useState({
        surname: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) =>
    {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };



const handleSubmit = async (e) =>
    {
        e.preventDefault();

        try
        {
            // Send login request to the backend API
            const response = await fetch('http://localhost:4000/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const responseData = await response.json();
            if (response.ok)
            {
                const id  = responseData.user.id; // Extract the userId and token from the response data
                console.log(responseData);
                localStorage.setItem('id', id); // Save the userId to localStorage
                // localStorage.setItem('token', token); // Save the token to localStorage
                // Login successful
                console.log('Login successful:', responseData);
                // Redirect to the dashboard or perform any other actions
                Navigate('/dashboard')
            } else
            {
                // Login failed
                const errorData = responseData;
                console.log('Login failed:', errorData.message);

                // Display the error message
                setErrorMessage(errorData.message);
            }
            if (formData.surname === 'example' && formData.password === 'password') {
                // Successful login
              } else {
                setErrorMessage('Invalid credentials. Please try again.');
              }
        } catch (error)
        {
            console.error('Error during login:', error);
        }
    };

   

    return (
        <div className="login-main min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-80">
          <h1 className="font-extrabold mb-4">Login To Student Portal</h1>
          <form onSubmit={handleSubmit} className="login-form">
            {errorMessage && (
              <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
            )}
            <label className="block mb-4">
              Surname:
              <input
                type="text"
                placeholder="Enter your surname name"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3 mt-1"
              />
            </label>
            <label className="block mb-4">
              Password:
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3 mt-1"
              />
            </label>
            <button
          type="submit"
          className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ${loading ? 'cursor-not-allowed' : ''}`}
          disabled={loading} 
        >
          {loading ? 'Loading...' : 'Log In'}
        </button>
          </form>
        </div>
      </div>
    );
};

export default SignIn;


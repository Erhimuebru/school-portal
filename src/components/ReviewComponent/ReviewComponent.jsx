
import { apiPost } from "../../utils/api/axios";
import SubNav from '../../components/SubNav/SubNav';
import React, { useEffect, useState } from 'react';
import { BsPersonCircle, BsPeople, BsReceipt  } from 'react-icons/bs'; // Import the book icon
import { BookOpenIcon, ReceiptPercentIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { PiMoneyBold} from 'react-icons/pi';
import Header from '../../components/Header/Head';
import {ArrowLeftIcon} from '@heroicons/react/24/solid';


const ReviewComponent = () => {
  const navigate  = useNavigate();
  const [comments, setComments] = useState('');
  const [name, setName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleCommentChange = (e) => {
    setComments(e.target.value);
  };

  const handleSubmit = async () => {
    if (name.trim() === '' || comments.trim() === '') {
      setErrorMessage('Please input all fields.');
      setSuccessMessage(''); // Clear the success message if there was a previous success
      return;
    }
  
    try {
      // Make the API call with name and comment data
      const response = await apiPost('/reviews', {
        name: name,
        comments: comments,
      });
      // navigate('/dashboard');
    setName('');
    setComments('');
      setSuccessMessage('Comments posted successfully! Return Home');
    } catch (error) {
      // Handle error
      console.error('Error:', error);
      setErrorMessage('Failed to post comments. Please try again.');
      setSuccessMessage(''); // Clear the success message if there was a previous success
    }
  };


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const handleSignOut = () => {
    // Clear the user's session (e.g., remove JWT token from local storage)
    localStorage.removeItem('token');
    localStorage.removeItem('id');

    // Navigate to the home screen
    navigate('/');
  };

  const handleClick = () => {
    navigate('/dashboard');
  };
  return (

    <><div>
      <SubNav />

      <div className='flex flex-1 pt-6 justify-between items-center'>

      <div onClick={handleClick} className="absolute flex flex-1 top-40 left-4 p-3 bg-red-500 rounded-full">
       
       <ArrowLeftIcon  onClick={handleClick}  className="h-6 w-6 text-white " />
       
     </div>

        <div className="sm:hidden">
          <button
            className="text-black ml-4 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6 mr-20" />
            ) : (
              <FaBars className="w-6 h-6 mt-5 lg:mr-6" />
            )}
          </button>


          {isMobileMenuOpen && (

            <div className="fixed top-0 left-8 z-50 w-screen h-screen bg-[#2c2c2c] py-6 px-6">
              <p onClick={closeMobileMenu}>
                <FaTimes className="w-10 h-10 ml-72 mb-2 text-white" />
              </p>
              <ul className="space-y-2">
                {/* <li className="flex gap-3 p-4 hover:cursor-pointer hover:text-red-950 text-white"><p>Class: <span className='font-bold'>{user?.classSection}</span></p></li> */}
                {/* <li className="flex gap-3 p-4 hover:cursor-pointer hover:text-red-950 text-white"> <p>School Fee Status: <span className="font-bold">{user?.paymentStatus}</span></p></li> */}
                {/* <li className="flex gap-3 p-4 hover:cursor-pointer hover:text-red-950 text-white"><PiMoneyBold className='w-6 h-6 text-[green]' /><p className="font-bold">School Fee: {user?.paymentStatus}</p></li> */}
                {/* <li className="flex gap-3 p-4 hover:cursor-pointer hover:text-red-950 text-white"><BsPersonCircle className='w-6 h-6' /><p className="font-bold"> {user?.fullName}</p></li> */}
                <li onClick={handleSignOut} className="flex gap-3 p-4 hover:cursor-pointer hover:text-red-950 text-white"> <ArrowLeftOnRectangleIcon className='w-6 h-6' />Sign Out</li>
              </ul>

            </div>
          )}
        </div>
        <Header />
        <div>

          <div className='flex flex-1 gap-24 sm:ml-10 ml-10 lg:ml-10'>

          </div>
        </div>

        <div>

          <ul className="hidden lg:flex gap-6 space-x-4 mr-20">
            {/* <li><p className='font-bold'>Home</p></li> */}
            {/* <li><p>{user?.classSection}</p></li> */}
            {/* <li> <p>School Fee Status: <span className="font-bold">{user?.paymentStatus}</span></p></li> */}
            {/* <li className='flex flex-1 gap-2'><BsPersonCircle className='w-6 h-6' /><p className="font-bold"> {user?.fullName}</p></li> */}
          </ul>
        </div>
      </div>
    </div><div className="mb-4 mt-20 text-center">
        <h2 className="text-xl font-extrabold text-red-500 mb-12">Write a Review</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-center font-bold mb-2">Parent Name:</label>
          <input
            type="text"
            id="name"
            className="w-2/3 md:w-1/2 p-2 border rounded mx-auto"
            placeholder="Your Name"
            value={name}
            onChange={handleNameChange} />
        </div>
        <div className="mb-4">
          <label htmlFor="comments" className="block text-center font-bold mb-2">Remarks:</label>
          <textarea
            id="comments"
            className="w-2/3 md:w-1/2 h-32 p-2 border rounded mx-auto"
            placeholder="Enter your comments here..."
            value={comments}
            onChange={handleCommentChange} />
        </div>
        {successMessage && (
          <p className="text-green-500 text-2xl">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-500 text-2xl text-center pb-2">{errorMessage}</p>
        )}
        <div>
          <button className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-700" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div></>
  );
};

export default ReviewComponent;




// import React, { useState } from 'react';
// import { apiPost } from "../../utils/api/axios";

// const ReviewComponent = () => {
//   const [comments, setComments] = useState('');
//   const [name, setName] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };
//   const handleCommentChange = (e) => {
//     setComments(e.target.value);
//   };

//   const handleSubmit = async () => {
//     if (name.trim() === '' || comments.trim() === '') {
//       // If either name or comment is empty, do not make the API call
//       return;
//     }
  
//     try {
//       // Make the API call with name and comment data
//       const response = await apiPost('/reviews', {
//         name: name,
//         comments: comments,
//       });

//       // Check if the response indicates success (you need to customize this based on your API response structure)
//       if (response.status === 200) {
//         console.log(response)
//         // Update the success message state
       
//         // Clear the name and comment inputs after successful submission
//         setName('');
//         setComments('');
//       } else {
//         // Handle other status codes or error responses if necessary
//       }
//     } catch (error) {
//       // Handle error
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="mb-4 mt-40 text-center">
//       <h2 className="text-xl font-extrabold text-red-500 mb-12">Write a Review</h2>
//       <div className="mb-4">
//         <label htmlFor="name" className="block text-center font-bold mb-2">Parent Name:</label>
//         <input
//           type="text"
//           id="name"
//           className="w-2/3 md:w-1/2 p-2 border rounded mx-auto"
//           placeholder="Your Name"
//           value={name}
//           onChange={handleNameChange}
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="comments" className="block text-center font-bold mb-2">Remarks:</label>
//         <textarea
//           id="comments"
//           className="w-2/3 md:w-1/2 h-32 p-2 border rounded mx-auto"
//           placeholder="Enter your comments here..."
//           value={comments}
//           onChange={handleCommentChange}
//         />
//       </div>

//       {successMessage && (
//         <p className="text-green-500 text-2xl">{successMessage}</p>
//       )}

//       <div>
//         <button className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-700" onClick={handleSubmit}>
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ReviewComponent;

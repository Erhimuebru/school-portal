import React, { useState } from 'react';
import { apiPost } from "../../utils/api/axios";

const ReviewComponent = () => {
  const [comments, setComments] = useState('');
  const [name, setName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
  
      // Assuming the API response contains the data you want to pass to onSubmit
      // onSubmit(response.data);
    // Clear the name and comment inputs after successful submission
    setName('');
    setComments('');
  

      // Set the success message after successful submission
      setSuccessMessage('Comments posted successfully!');
    } catch (error) {
      // Handle error
      console.error('Error:', error);
      setErrorMessage('Failed to post comments. Please try again.');
      setSuccessMessage(''); // Clear the success message if there was a previous success
    }
  };

  return (
    <div className="mb-4 mt-40 text-center">
      <h2 className="text-xl font-extrabold text-red-500 mb-12">Write a Review</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-center font-bold mb-2">Parent Name:</label>
        <input
          type="text"
          id="name"
          className="w-2/3 md:w-1/2 p-2 border rounded mx-auto"
          placeholder="Your Name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="comments" className="block text-center font-bold mb-2">Remarks:</label>
        <textarea
          id="comments"
          className="w-2/3 md:w-1/2 h-32 p-2 border rounded mx-auto"
          placeholder="Enter your comments here..."
          value={comments}
          onChange={handleCommentChange}
        />
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
    </div>
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

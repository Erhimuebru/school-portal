// import React, { useEffect, useState } from 'react';

// const Dashboard = () => {
//   const [user, setUser] = useState(null); // Initialize user state as null

//   const id = localStorage.getItem('id');
//       console.log(id);
  
//       useEffect(() => {
//           // Fetch the user's phone number from the backend API
//           fetch(`http://localhost:4000/users/${id}`, {
//             method: 'GET',
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem('token')}`, // Replace 'token' with your actual token key
//             },
//           })
//             .then((response) => {
//               if (!response.ok) {
//                 throw new Error('Network response was not ok');
//               }
//               return response.json();
//             })
//             .then((data) => {
//               console.log(data);
//               setUser(data);
//                // Console the data response here
//               // Set the phoneNumber state with the fetched data
//               // setPhoneNumber(data.phoneNumber);
//             })
//             .catch((error) => {
//               console.error('Error fetching phone number:', error);
//             });
//         }, [id]);
        

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-md w-96">
//         {user ? (
//           <div>
//             <h2 className="text-2xl font-bold mb-4">User Profile</h2>
//             <p>
//               <span className="font-bold">Full Name:</span> {user.fullName}
//             </p>
//             <p>
//               <span className="font-bold">Phone Number:</span> {user.phoneNumber}
//             </p>
//             <p>
//               <span className="font-bold">Class Section:</span> {user.classSection}
//             </p>
//             <p>
//               <span className="font-bold">Payment Status:</span> {user.paymentStatus}
//             </p>
//             <div className="flex mt-4">
//               <div className="w-1/2 pr-2">
//                 <h3 className="text-lg font-semibold">Exam Scores:</h3>
//                 <table className="w-full">
//                   <thead>
//                     <tr>
//                       {/* <th>Subject</th> */}
//                       {/* <th>Score</th> */}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {user.examScores.map((score, index) => (
//                       <tr key={index}>
//                         <td>{score[0]}</td>
//                         <td>{score[1]}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//               <div className="w-1/2 pl-2">
//                 <h3 className="text-lg font-semibold">Test Scores:</h3>
//                 <table className="w-full">
//                   <thead>
//                     <tr>
//                       {/* <th>Subject</th> */}
//                       {/* <th>Score</th> */}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {user.testScores.map((score, index) => (
//                       <tr key={index}>
//                         <td>{score[0]}</td>
//                         <td>{score[1]}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <p>Loading user data...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import React, { useEffect, useState } from 'react';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
// import { BsPersonCircle } from 'react-icons/bs';

// const Dashboard = () => {
//   const [user, setUser] = useState(null);
//   const [userInfoVisible, setUserInfoVisible] = useState(false);

//   const id = localStorage.getItem('id');

//   useEffect(() => {
//     fetch(`http://localhost:4000/users/${id}`, {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setUser(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching user data:', error);
//       });
//   }, [id]);

//   const toggleUserInfo = () => {
//     setUserInfoVisible(!userInfoVisible);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-md w-96">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-2xl font-bold">User Profile</h2>
//           <button
//             className="text-gray-600 hover:text-gray-800"
//             onClick={toggleUserInfo}
//           >
//             <BsPersonCircle />
//           </button>
//         </div>
//         {userInfoVisible && (
//           <div>
//             <p>
//               <span className="font-bold">Full Name:</span> {user?.fullName}
//             </p>
//             <p>
//               <span className="font-bold">Phone Number:</span> {user?.phoneNumber}
//             </p>
//             <p>
//               <span className="font-bold">Class Section:</span> {user?.classSection}
//             </p>
//             <p>
//               <span className="font-bold">Payment Status:</span> {user?.paymentStatus}
//             </p>
//             <div className="flex mt-4">
//               <div className="w-1/2 pr-2">
//                 <h3 className="text-lg font-semibold">Exam Scores:</h3>
//                 <table className="w-full">
//                   <thead>
//                     <tr>
//                       {/* <th>Subject</th> */}
//                       {/* <th>Score</th> */}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {user?.examScores.map((score, index) => (
//                       <tr key={index}>
//                         <td>{score[0]}</td>
//                         <td>{score[1]}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//               <div className="w-1/2 pl-2">
//                 <h3 className="text-lg font-semibold">Test Scores:</h3>
//                 <table className="w-full">
//                   <thead>
//                     <tr>
//                       {/* <th>Subject</th> */}
//                       {/* <th>Score</th> */}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {user?.testScores.map((score, index) => (
//                       <tr key={index}>
//                         <td>{score[0]}</td>
//                         <td>{score[1]}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import React, { useEffect, useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs'; // Import the book icon

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [userInfoVisible, setUserInfoVisible] = useState(false);
  const [examScoresVisible, setExamScoresVisible] = useState(false);
  const [testScoresVisible, setTestScoresVisible] = useState(false); // State for examScores visibility

  const id = localStorage.getItem('id');

  useEffect(() => {
    fetch(`http://localhost:4000/users/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [id]);

  const toggleUserInfo = () => {
    setUserInfoVisible(!userInfoVisible);
  };

  const toggleExamScores = () => {
    setExamScoresVisible(!examScoresVisible);
  };



  const toggleTestScores = () => {
    setTestScoresVisible(!testScoresVisible);
  };

  return (
    <div className="min-h-screen flex items-center gap-10 justify-center bg-gray-100">
       <div className="grid lg:grid-cols-2 gap-8 w-full sm:w-11/12 md:w-3/4 lg:w-3/5">



      <div  onClick={toggleUserInfo} className="bg-[red] ml-6 sm:ml-5 p-8 rounded shadow-md w-72 lg:w-96 sm:w-20">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-extrabold">Student Profile</h2>
          <div className="flex space-x-4">
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={toggleUserInfo}
            >
              <BsPersonCircle className='w-8 h-8' />
            </button>
          </div>
        </div>
        {userInfoVisible && (
          <div>
            <p>
              <span className="font-bold">Full Name:</span> {user?.fullName}
            </p>
            <p>
              <span className="font-bold">Phone Number:</span> {user?.phoneNumber}
            </p>
            <p>
              <span className="font-bold">Class Section:</span> {user?.classSection}
            </p>
            <p>
              <span className="font-bold">Payment Status:</span> {user?.paymentStatus}
            </p>
          </div>
        )}
      </div>



     
        <div onClick={toggleExamScores} className="bg-[red] ml-6 sm:ml-5 p-8 rounded shadow-md w-72 lg:w-96 sm:w-20">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-extrabold">Results</h2>
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={toggleExamScores}
            >
              <BsPersonCircle />
            </button>
          </div>
          {examScoresVisible && (
          // <table className="w-full">
          //   <thead>
          //     <tr>
          //       <th>Subject</th>
          //       <th>Score</th>
          //     </tr>
          //   </thead>
          //   <tbody>
          //     {user?.examScores.map((score, index) => (
          //       <tr key={index}>
          //         <td>{score[0]}</td>
          //         <td>{score[1]}</td>
          //       </tr>
          //     ))}
          //   </tbody>
          // </table>

          <p>No Results yet!....</p>
             )} 
        </div>




        <div onClick={toggleTestScores} className="bg-[red] ml-6 sm:ml-5 p-8 rounded shadow-md w-72 lg:w-96 sm:w-20">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-extrabold">Previous Results</h2>
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={toggleTestScores}
            >
              <BsPersonCircle />
            </button>
          </div>
          {testScoresVisible && (
          // <table className="w-full">
          //   <thead>
          //     <tr>
          //       <th>Subject</th>
          //       <th>Score</th>
          //     </tr>
          //   </thead>
          //   <tbody>
          //     {user?.testScores.map((score, index) => (
          //       <tr key={index}>
          //         <td>{score[0]}</td>
          //         <td>{score[1]}</td>
          //       </tr>
          //     ))}
          //   </tbody>
          // </table>

          <p>No Results yet!....</p>
             )} 
        </div>




        <div onClick={toggleUserInfo} className="bg-[red] ml-6 sm:ml-5 p-8 rounded shadow-md w-72 lg:w-96 sm:w-20">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-extrabold">Subjects For The Term</h2>
          <div className="flex space-x-4">
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={toggleUserInfo}
            >
              <BsPersonCircle />
            </button>
          </div>
        </div>
        {userInfoVisible && (
          <div>
            <p>
              <span className="font-bold">Full Name:</span> {user?.fullName}
            </p>
            <p>
              <span className="font-bold">Phone Number:</span> {user?.phoneNumber}
            </p>
            <p>
              <span className="font-bold">Class Section:</span> {user?.classSection}
            </p>
            <p>
              <span className="font-bold">Payment Status:</span> {user?.paymentStatus}
            </p>
          </div>
        )}
      </div>




      <div   onClick={toggleUserInfo} className="bg-[red] ml-6 sm:ml-5 p-8 rounded shadow-md w-72 lg:w-96 sm:w-20">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-extrabold">Parent Review</h2>
          <div className="flex space-x-4">
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={toggleUserInfo}
            >
              <BsPersonCircle />
            </button>
          </div>
        </div>
        {userInfoVisible && (
          <div>
            <p>
              <span className="font-bold">Full Name:</span> {user?.fullName}
            </p>
            <p>
              <span className="font-bold">Phone Number:</span> {user?.phoneNumber}
            </p>
            <p>
              <span className="font-bold">Class Section:</span> {user?.classSection}
            </p>
            <p>
              <span className="font-bold">Payment Status:</span> {user?.paymentStatus}
            </p>
          </div>
        )}
      </div>
    
    </div>
    </div>
  );
};

export default Dashboard;




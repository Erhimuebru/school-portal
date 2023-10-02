// // ExamScoresPage.jsx

// import React from 'react';

// const ExamScoresPage = (props) => {
//     const { examScores } = props.location.state;
// // const ExamScoresPage = ({ examScores }) => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center">
//       <h1 className="text-3xl font-bold mb-6">Exam Scores</h1>
//       <table className="border border-gray-300">
//         <thead>
//           <tr>
//             <th className="border-b">Subject</th>
//             <th className="border-b">Score</th>
//           </tr>
//         </thead>
//         <tbody>
//           {examScores.map((score, index) => (
//             <tr key={index}>
//              <td>{score[0]}</td>
//             <td>{score[1]}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ExamScoresPage;


import React from 'react';
import { useLocation } from 'react-router-dom';

const ExamScoresPage = () => {
  const location = useLocation();
  const examScores = location?.state?.examScores;

  console.log('Exam Scores received:', examScores);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
           <h1 className="text-3xl font-bold mb-6">Exam Scores</h1>
           <table className="border border-gray-300">
             <thead>
               <tr>
                 <th className="border-b">Subject</th>
               <th className="border-b">Score</th>
              </tr>
            </thead>
             <tbody>
               {/* {examScores.map((score, index) => (
                <tr key={index}>
                 <td>{score[0]}</td>
             <td>{score[1]}</td> */}
                {/* </tr> */}
               {/* ))} */}
            </tbody>
          </table>
         </div>
  );
};

export default ExamScoresPage;

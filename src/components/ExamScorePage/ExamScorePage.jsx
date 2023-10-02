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
  const { state } = location;
  const examScoresData = state.examScores;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Exam Scores</h2>
      <table className="min-w-full border rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-2 px-4">Subject</th>
            <th className="py-2 px-4">Score</th>
          </tr>
        </thead>
        <tbody>
          {examScoresData.map((score, index) => {
            const [subject, value] = score[0].split(':');
            return (
              <tr key={index} className={(index % 2 === 0 ? 'bg-gray-100' : 'bg-white')}>
                <td className="py-2 px-4">{subject}</td>
                <td className="py-2 px-4">{value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  


  );
};

export default ExamScoresPage;

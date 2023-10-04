import React from 'react';
import { useLocation } from 'react-router-dom';



const calculateGrade = (totalScore) => {
  if (totalScore >= 90) {
    return 'A';
  } else if (totalScore >= 80) {
    return 'B';
  } else if (totalScore >= 70) {
    return 'C';
  } else if (totalScore >= 60) {
    return 'D';
  } else {
    return 'F';
  }
};

const ExamScoresPage = () => {
  const location = useLocation();
  const { state } = location;
  const examScoresData = state.examScores;
  const testScoresData = state.testScores;
 
  // Calculate total score and grade for each subject
  const combinedScores = examScoresData.map((examScore, index) => {
    const [subject, examValue] = examScore[0].split(':');
    const [testSubject, testValue] = testScoresData[index][0].split(':');
    const totalScore = parseInt(examValue, 10) + parseInt(testValue, 10);
    const grade = calculateGrade(totalScore);
    return {
      subject,
      examScore: parseInt(examValue, 10),
      testScore: parseInt(testValue, 10),
      totalScore,
      grade,
    };
  });



  return (

   



    
    <div className="container mx-auto mb-36 p-4">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Results</h2>
        <table className="min-w-full border rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr className='mr-10-'>
              <th className="py-4 px-4 ">Subject</th>
              <th className="py-2 px-4">Test Score</th>
              <th className="py-6 px-4">Exam Score</th>
              <th className="py-2 px-4">Total Score</th>
              <th className="py-2 px-4">Grade</th>
            </tr>
          </thead>
          <tbody>
            {combinedScores.map((score, index) => (
              <tr key={index} className={(index % 2 === 0 ? 'bg-gray-100' : 'bg-white')}>
                <td className="py-2 px-4 text-center">{score.subject}</td>
                <td className="py-2 px-4 text-center">{score.testScore}</td>
                <td className="py-2 px-4 text-center">{score.examScore}</td>
                <td className="py-2 px-4 text-center">{score.totalScore}</td>
                <td className="py-2 px-4 text-center">{score.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
      </div>

  );
};

export default ExamScoresPage;

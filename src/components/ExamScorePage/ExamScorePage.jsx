import React from 'react';
import { useLocation } from 'react-router-dom';
import {ArrowLeftIcon} from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';



const calculateGrade = (totalScore) => {
  if (totalScore >= 75) {
    return 'A';
  } else if (totalScore >= 60) {
    return 'B';
  } else if (totalScore >= 50) {
    return 'C';
  } else if (totalScore >= 40) {
    return 'D';
  } else {
    return 'F';
  }
};

  const ExamScoresPage = () => {
    const navigate  = useNavigate();
  const location = useLocation();
  const { state } = location;
  const examScoresData = state.examScores;
  const firstCaScoresData = state.firstCaScores;
  const SecondCaScoresData = state.SecondCaScores;
  const totalStudentData = state.totalStudent;
  const fullData = state.fullName;
  const classSection = state.classSection
 
  // Calculate total score and grade for each subject
  const combinedScores = examScoresData.map((examScore, index) => {
 
    const [subject, examValue] = examScore[0].split(':');
    const [testSubject, testValue] = firstCaScoresData[index][0].split(':');
    const [secondtestSubject, secondtestValue] = SecondCaScoresData[index][0].split(':');
    const totalScore = parseInt(examValue, 10) + parseInt(secondtestValue, 10);
    const grade = calculateGrade(totalScore);
    return {
      subject,
      examScore: parseInt(examValue, 10),
      firstCaScores: parseInt(testValue, 10),
      SecondCaScores : parseInt(secondtestValue, 10),
      totalScore,
      grade,
    };
  });




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
      <div onClick={handleClick} className="absolute flex flex-1 top-16 left-4 p-3 bg-red-500 rounded-full">
       
          <ArrowLeftIcon  onClick={handleClick}  className="h-6 w-6 text-white" />
          
        </div>
      
      <div className='flex flex-1 pt-6 justify-between items-center'>

    


        <div>
       
          <div className='flex flex-1 gap-24 sm:ml-10 ml-10 lg:ml-10'>
          <p>Top Academy</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container mx-auto mb-36 p-4">
        <div className="mb-8">
          {/* <p>{fullData}</p> */}
          <h2 className="text-3xl font-bold mb-10 text-center">Results</h2>
          <p className='font-extrabold capitalize pb-5'>{fullData}</p>
          <p className='font-bold pb-5'>Class: {classSection} </p>
          <p className='font-bold pb-5'>Term:  </p>
          <table className="min-w-full border rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-white">
              <tr className='mr-10-'>
                <th className="py-4 px-4 ">Subject</th>
                <th className="py-2 px-4">1st CA(20)</th>
                <th className="py-2 px-4">2nd CA(20)</th>
                <th className="py-6 px-4">Exam Score</th>
                <th className="py-2 px-4">Total Score</th>
                <th className="py-6 px-4">Class Average</th>
                <th className="py-2 px-4">Grade</th>
                <th className="py-2 px-4">Remark</th>
              
              </tr>
            </thead>
            <tbody>
              {combinedScores.map((score, index) => (
                <tr key={index} className={(index % 2 === 0 ? 'bg-gray-100' : 'bg-white')}>
                  <td className="py-2 px-4 text-center">{score.subject}</td>
                  <td className="py-2 px-4 text-center">{score.firstCaScores}</td>
                  <td className="py-2 px-4 text-center">{score.SecondCaScores}</td>
                  <td className="py-2 px-4 text-center">{score.examScore}</td>
                  <td className="py-2 px-4 text-center">{score.totalScore}</td>
                   <th className="py-2 px-4">Remark</th>
                  <td className="py-2 px-4 text-center">{score.grade}</td>
                 
                  <td className="py-2 px-4 text-center">{score.totalStudent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        <div onClick={ handleSignOut} className=" absolute flex flex-row right-2 lg:right-28 mt-4 rounded-md cursor-pointer p-2 bg-[red]">
        <p className="text-white font-extrabold">Sign out</p>
      </div>

      </div></>

  );
};

export default ExamScoresPage;

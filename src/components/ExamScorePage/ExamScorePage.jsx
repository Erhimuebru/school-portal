import React from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';


const calculateGrade = (totalScore, percentage) => {
  let grade, remark;

  if (totalScore >= 90) {
    grade = 'A1';
    remark = 'Excellent';
  } else if (totalScore >= 90) {
    grade = 'B2';
    remark = 'Excellent';
  } else if (totalScore >= 80) {
    grade = 'B3';
    remark = 'V.Good';
  } else if (totalScore >=  70) {
    grade = 'C4';
    remark = 'Good';
  } 
  else if (totalScore >= 60) {
    grade = 'C5';
    remark = 'Good';
  }
  else if (totalScore >= 54) {
    grade = 'C6';
    remark = 'Good';
  }
  else if (totalScore >= 45) {
    grade = 'D';
    remark = 'Fair';
  }
  else if (totalScore >= 40) {
    grade = 'E';
    remark = 'Pass';
  }

  else {
    grade = 'F';
    remark = 'Fail';
  }

  return { grade, remark };
};



const ExamScoresPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { examScores, firstCaScores, SecondCaScores, fullName, classSection, age,  house,
    timeAbsent,
    timePresent,
    gender,
    timeSchoolOpen,
    department,
    totalStudent,
    term,
    punctuality,
    neatness,
    health,
    emotionalStabilty,
    honesty,
    sport,
    writing,
    greeting,
    atitude,
    socialSkills,
    leaderShip,
    practical,
  } = state;

  const combinedScores = examScores.map((examScore, index) => {
    const [subject, examValue] = examScore[0].split(':');
    const [testSubject, testValue] = firstCaScores[index][0].split(':');
    const [secondtestSubject, secondtestValue] = SecondCaScores[index][0].split(':');
    const totalScore = parseInt(examValue, 10) + parseInt(secondtestValue, 10) + parseInt(testValue);
    const totalMarks = examValue + testValue + secondtestValue;
   
    // console.log(`Total Subjects: ${totalSubjects}`);
    
    const { grade, remark } = calculateGrade(totalScore);
    return {
      subject,
      examScore: parseInt(examValue, 10),
      firstCaScores: parseInt(testValue, 10),
      SecondCaScores: parseInt(secondtestValue, 10),
      totalScore,
      grade,
      remark,
      totalMarks 
    };
  });

  const totalScores = combinedScores.reduce((total, score) => total + score.totalScore, 0);
  const classAverage = totalScores / combinedScores.length;
  const totalSubjects = examScores.length;
  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    navigate('/');
  };

  const handleClick = () => {
    navigate('/dashboard');
  };


  const totalPossibleMarks = combinedScores.length * 100;

  // Calculate percentage
  const percentage = (totalScores / totalPossibleMarks) * 100;
  const { grade, remark } = calculateGrade(percentage);
  return (
    <>
      <div>
        <div onClick={handleClick} className="absolute flex flex-1 top-16 left-4 p-3 bg-red-500 rounded-full">
          <ArrowLeftIcon onClick={handleClick} className="h-6 w-6 text-white" />
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
          <h2 className="text-3xl font-bold mb-16 text-center uppercase">{term} TERM REsults</h2>
       
        
        
<div className='rounded-sm container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-x-20 mb-4'>
           <div> 
                      <p className='font-extrabold uppercase pb-3'>Name: {fullName}</p>
                      <p className=' uppercase font-bold pb-3'>Age: {age} </p>
                      <p className='font-bold uppercase pb-3'>Gender: {gender} </p>
            </div>



            <div> 
                  <p className='font-bold uppercase  pb-3'>House: {house} </p>
                  <p className='font-bold uppercase  pb-3'>Class: {classSection} <span className='uppercase'>{department}</span> </p>
                  <p className='font-bold uppercase  pb-3'>Total Student: {totalStudent} </p>
             </div>


        <div> 
                <p className='font-extrabold uppercase whitespace-nowrap pb-3'>No Of Times School Opened: {timeSchoolOpen}</p>
                <p className='font-extrabold  uppercase pb-3'>No Of Time Present: {timePresent}</p>
                <p className='font-bold uppercase  pb-3'>No Of Time Absent: {timeAbsent} </p>
          </div>


       
</div>


<div className='bg-red-900 mb-5 text-xxs'>
  <p className='p-2 font-bold uppercase text-white'>KEY FOR GRADING: A1 (90-100), B2(80-90), B3 (70-80), C4(60-70), C5 (55-60), C6 (50-54), D (45-49), E (40-44), F (0-39).</p>
  </div>


<table className="min-w-full border border-collapse rounded-lg overflow-hidden">
  <thead className="bg-red-900 text-white">
    <tr className='mr-10-'>
      <th className="py-4 px-4 border border-black uppercase">Subject</th>
      <th className="py-2 px-4 border border-black">1st CA(20)</th>
      <th className="py-2 px-4 border border-black">2nd CA(20)</th>
      <th className="py-6 px-4 border border-black">Exam (60)</th>
      <th className="py-2 px-4 border border-black">Total (100)</th>
      <th className="py-6 px-4 border border-black">Grade</th>
      <th className="py-2 px-4 border border-black">Remark</th>
      {/* <th className="py-2 px-4">Class Average</th>  */}
    </tr>
  </thead>
  <tbody>
    {combinedScores.map((score, index) => (
      <tr key={index} className={(index % 2 === 0 ? 'bg-gray-100' : 'bg-white')}>
        <td className="py-2 px-4 text-center border border-black">{score.subject}</td>
        <td className="py-2 px-4 text-center border border-black">{score.firstCaScores}</td>
        <td className="py-2 px-4 text-center border border-black">{score.SecondCaScores}</td>
        <td className="py-2 px-4 text-center border border-black">{score.examScore}</td>
        <td className="py-2 px-4 text-center border border-black">{score.totalScore}</td>
        <td className="py-2 px-4 text-center border border-black">{score.grade}</td>
        <td className="py-2 px-4 text-center border border-black">{score.remark}</td>
        {/* <td className="py-2 px-4 text-center border border-black">{classAverage.toFixed(2)}</td> */}
      </tr>
    ))}
  </tbody>
</table>





<div className='mt-2 uppercase font-bold'>
  <p className='bg-red-900 text-center p-3 mb-6 text-white  font-bold uppercase' >APPRAISAL</p>

<div className='rounded-sm container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-x-28 mb-4'>
 
          <div>  
                    <p className='pb-3'>punctuality: {punctuality}</p>
                    <p  className='pb-3'>neatness: {neatness}</p>
                    <p className='pb-3'>health: {health}</p>
                    <p className='pb-3'>emotional Stabilty: {emotionalStabilty}</p>
          </div>


          <div> 
                    <p className='pb-3'>honesty: {honesty}</p>
                    <p className='pb-3'>sport: {sport}</p>
                    <p className='pb-3'>writing: {writing}</p>
                    <p className='pb-3'>greeting: {greeting}</p>
          </div>
          
          <div>
                 
                    <p className='pb-3'>social Skills: {socialSkills}</p>
                    <p className='pb-3'>leaderShip skills: {leaderShip}</p>
                    <p className='pb-3'>practicals: {practical}</p>
                    <p className='pb-3 whitespace-nowrap'>ATTITUDE TO ACCADEMICS: {atitude}</p>
          </div>


          </div>
</div>


<div className='mt-2'>
  <p className='bg-red-900 text-center p-3 mb-6 text-white  font-bold uppercase' >Summary</p>

            <div className='rounded-sm container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-x-20 mb-4'>

                    <div>
                              <p className='pb-3 font-bold whitespace-nowrap uppercase'>TOTAL MARKS OBTAINABLE: {totalPossibleMarks}</p>
                              <p className='pb-3 font-bold uppercase'>TOTAL SUBJECT OFFERED: {totalSubjects}</p>
                              <p className='pb-3 font-bold uppercase'>Remark: {remark}</p>
                    </div>



                    <div>
                            <p className='pb-3 font-bold uppercase'>PERCENTAGE: {percentage.toFixed(2)}%</p>
                            <p className='pb-3 font-bold uppercase'>TOTAL MARKS OBTAINED: {totalScores}</p>
                            <p className='pb-3 font-bold uppercase'>Grade: {grade}</p>
                    </div>

            </div>
</div>


          <div className="py-6 px-4 text-center">Class Average: {classAverage.toFixed(2)}</div>
        </div>
        <div onClick={handleSignOut} className="absolute right-2 lg:right-28 mt-4 rounded-md cursor-pointer p-2 bg-[red]">
          <p className="text-white font-extrabold">Sign out</p>
        </div>
      </div>
    </>
  );
};

export default ExamScoresPage;

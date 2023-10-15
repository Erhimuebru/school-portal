import React, { useState, useEffect } from 'react';

const AddStudent = () => {
  // const [subjectScores, setSubjectScores] = useState([{ subject: '', firstCA: '', secondCA: '', exam: '', classTotal: '' }]);

  const [subjectsConfirmed, setSubjectsConfirmed] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [subjectScores, setSubjectScores] = useState([
    { subject: '', firstCA: '', secondCA: '', exam: '', classTotal: '' },
    { subject: '', firstCA: '', secondCA: '', exam: '', classTotal: '' },
    { subject: '', firstCA: '', secondCA: '', exam: '', classTotal: '' },
    { subject: '', firstCA: '', secondCA: '', exam: '', classTotal: '' },
    { subject: '', firstCA: '', secondCA: '', exam: '', classTotal: '' },
    { subject: '', firstCA: '', secondCA: '', exam: '', classTotal: '' },
    { subject: '', firstCA: '', secondCA: '', exam: '', classTotal: '' },
    { subject: '', firstCA: '', secondCA: '', exam: '', classTotal: '' },
    { subject: '', firstCA: '', secondCA: '', exam: '', classTotal: '' },
    { subject: '', firstCA: '', secondCA: '', exam: '', classTotal: '' },
    { subject: '', firstCA: '', secondCA: '', exam: '', classTotal: '' },
    { subject: '', firstCA: '', secondCA: '', exam: '', classTotal: '' },
  ]);
  const handleSubjectChange = (index, newSubject) => {
    const updatedScores = [...subjectScores];
    updatedScores[index].subject = newSubject;
    setSubjectScores(updatedScores);
  };

  const handleFCAChange = (index, newScore) => {
    const updatedScores = [...subjectScores];
    updatedScores[index].firstCA = newScore;
    setSubjectScores(updatedScores);
  };

  const handleSCAChange = (index, newScore) => {
    const updatedScores = [...subjectScores];
    updatedScores[index].secondCA = newScore;
    setSubjectScores(updatedScores);
  };

  const handleExamChange = (index, newScore) => {
    const updatedScores = [...subjectScores];
    updatedScores[index].exam = newScore;
    setSubjectScores(updatedScores);
  };

  const handleClassTotalChange = (index, newScore) => {
    const updatedScores = [...subjectScores];
    updatedScores[index].classTotal = newScore;
    setSubjectScores(updatedScores);
  };

 
  // const addSubject = (e) => {
  //   e.preventDefault();
  // setFormData((prevData) => ({
  //   ...prevData,
  //   subjectScores: [...prevData.subjectScores, ...subjectScores],
  // }));

  //   setSubjectScores([...subjectScores, { subject: '', firstCA: '', secondCA: '', exam: '', classTotal:'' }]);
  //     // setSubjectScores([{ subject: '', firstCA: '', secondCA: '', exam: '' }]);
  //     // Logging the updated state to the console
  //     console.log('Updated Subject Scores:', subjectScores);
  // };
  

  // const confirmSubject = (e) => {
  //   e.preventDefault();
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     subjectScores: [...prevData.subjectScores, ...subjectScores],
  //   }));
  //   // setSubjectScores([...subjectScores, { subject: '', firstCA: '', secondCA: '', exam: '' }]);
  //     // Logging the updated state to the console
  //     console.log('Updated Subject Scores:', subjectScores);
  // };


  // const confirmSubject = (e) => {
  //   e.preventDefault();
  
  //   // Check if all subjects are selected
  //   if (subjectScores.some((score) => score.subject === '')) {
  //     console.log('Please select a subject for all entries.');
  //     return;
  //   }

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     subjectScores: [...prevData.subjectScores, ...subjectScores],
  //   }));

  //   console.log('Updated Subject Scores:', subjectScores);
  // };
  
 

  const confirmSubject = (e) => {
    e.preventDefault();
  
    // Check if subjects have already been confirmed
    if (subjectsConfirmed) {
      setError('Subjects have already been confirmed.');
      setSuccess(null);
      return;
    }
  
    // Check if all subjects are selected
    if (subjectScores.some((score) => score.subject === '')) {
      setError('Please select a subject for all entries.');
      setSuccess(null);
      return;
    }
  
    // Update subjectsConfirmed to prevent further additions
    setSubjectsConfirmed(true);
    setSuccess('Subjects confirmed successfully!');
    setError(null);
    console.log('Subjects confirmed:', subjectScores);
  };
  
  
  
const handleRemoveSubject = (e,index) => {
  e.preventDefault();
  const updatedSubjectScores = [...subjectScores];
  updatedSubjectScores.splice(index, 1);
  setSubjectScores(updatedSubjectScores);
};



  const [formData, setFormData] = useState({
    surname: '',
    password: '',
    fullName: '',
    classSection: '',
    paymentStatus: '',
    age: '',
    house: '',
    timeAbsent: '',
    timePresent: '',
    gender: '',
    term: '',
    totalStudent: '',
    timeSchoolOpen: '',
    department: '',
    caSubject: '', // single input field for First CA, Second CA, and Exam Scores
    firstCaScores: [],
    SecondCaScores: [],
    examScores: [],
    punctuality: '',
    neatness: '',
    health: '',
    emotionalStabilty: '',
    honesty: '',
    sport: '',
    writing: '',
    greeting: '',
    atitude: '',
    socialSkills: '',
    leaderShip: '',
    practical: '',
    subjectScores:subjectScores,
    subject: '',
     firstCA: '',
      secondCA: '', 
      exam: ''
  });


  



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make the API call to add a new user
      const response = await fetch('http://localhost:4000/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('User added successfully.');
        // Reset the form after successful submission
        setFormData({
          surname: '',
          password: '',
          fullName: '',
          classSection: '',
          paymentStatus: '',
          age: '',
          house: '',
          timeAbsent: '',
          timePresent: '',
          gender: '',
          term: '',
          totalStudent: '',
          timeSchoolOpen: '',
          department: '',
          caSubject: '', 
          firstCaScores: [],
          SecondCaScores: [],
          examScores: [],
          punctuality: '',
          neatness: '',
          health: '',
          emotionalStabilty: '',
          honesty: '',
          sport: '',
          writing: '',
          greeting: '',
          atitude: '',
          socialSkills: '',
          leaderShip: '',
          practical: '',
          subjectScores:subjectScores,
          firstCA: '',
          secondCA: '', 
          exam: ''
        });

        setSubjectScores([
          { subject: '', firstCA: '', secondCA: '', exam: '', classTotal: '' },
          { subject: '', firstCA: '', secondCA: '', exam: '', classTotal: '' },
          { subject: '', firstCA: '', secondCA: '', exam: '', classTotal: '' },
          { subject: '', firstCA: '', secondCA: '', exam: '', classTotal: '' },
          { subject: '', firstCA: '', secondCA: '', exam: '', classTotal: '' },
          { subject: '', firstCA: '', secondCA: '', exam: '', classTotal: '' },
          { subject: '', firstCA: '', secondCA: '', exam: '', classTotal: '' },
          { subject: '', firstCA: '', secondCA: '', exam: '', classTotal: '' },
          { subject: '', firstCA: '', secondCA: '', exam: '', classTotal: '' },
          { subject: '', firstCA: '', secondCA: '', exam: '', classTotal: '' },
          { subject: '', firstCA: '', secondCA: '', exam: '', classTotal: '' },
          { subject: '', firstCA: '', secondCA: '', exam: '', classTotal: '' },
        ]);
         
        console.log('User gone successfully', formData)
        // setFormData();
      } else {
        console.error('Failed to add user.');
      }
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  

  return (
    <div className="container mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center"> New Student Info</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Surname */}
        <div>
          <label htmlFor="surname" className="block font-semibold text-gray-800">Surname</label>
          <input
            type="text"
            id="surname"
            className="mt-1 p-2 border rounded w-full"
            value={formData.surname}
            onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
            required
          />
        </div>



{/* Password */}
<div>
          <label htmlFor="password" className="block font-semibold text-gray-800">Password</label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 border rounded w-full"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </div>

        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block font-semibold text-gray-800">Full Name</label>
          <input
            type="text"
            id="fullName"
            className="mt-1 p-2 border rounded w-full"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            required
          />
        </div>

        {/* Class Section */}
       
      <div className="mb-4">
          <label htmlFor="classSection" className="block text-sm font-medium text-gray-600">
          Class
          </label>
          <select
            id="classSection"
            name="classSection"
            className="mt-1 p-2 border rounded w-full"
            value={formData.classSection}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Class</option>
            <option value="J.S.S.1">J.S.S.1</option>
            <option value="J.S.S.2">J.S.S.2</option>
            <option value="J.S.S.3">J.S.S.3</option>
            <option value="S.S.S.1">S.S.S.1</option>
            <option value="S.S.S.2">S.S.S.2</option>
            <option value="S.S.S.3">S.S.S.3</option>
            
          </select>
        </div>


          {/* Department */}
        
      
        <div className="mb-4">
          <label htmlFor="department" className="block text-sm font-medium text-gray-600">
          Department
          </label>
          <select
            id="department"
            name="department"
            className="mt-1 p-2 border rounded w-full"
            value={formData.department}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Department</option>
            <option value="Art">Art</option>
            <option value="Commercial">Commercial</option>
            <option value="science">science</option>
            
          </select>
        </div>


        {/* Payment Status */}
      
         <div className="mb-4">
          <label htmlFor="paymentStatus" className="block text-sm font-medium text-gray-600">
            Payment Status
          </label>
          <select
            id="paymentStatus"
            name="paymentStatus"
            className="mt-1 p-2 border rounded w-full"
            value={formData.paymentStatus}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Status</option>
            <option value="Completed">Completed</option>
            <option value="Not-Completed">Not-Completed</option>
            {/* Add more options as needed */}
          </select>
        </div>


        {/* Age */}
        <div>
          <label htmlFor="age" className="block font-semibold text-gray-800">Age</label>
          <input
            type="number"
            id="age"
            className="mt-1 p-2 border rounded w-full"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            required
          />
        </div>



         {/* House */}
        

        <div className="mb-4">
          <label htmlFor="house" className="block text-sm font-medium text-gray-600">
          HOUSE
          </label>
          <select
            id="house"
            name="house"
            className="mt-1 p-2 border rounded w-full"
            value={formData.house}
            onChange={handleInputChange}
            required
          >
            <option value="">Select House</option>
            <option value="Jasmin">Jasmin</option>
            <option value="Mauve">Mauve</option>
            <option value="Lavenda">Lavenda</option>
            <option value="Marrigold">Marrigold</option>  
          </select>
        </div>

        {/* Time Absent */}
        <div>
          <label htmlFor="timeAbsent" className="block font-semibold text-gray-800">Time Absent</label>
          <input
            type="text"
            id="timeAbsent"
            className="mt-1 p-2 border rounded w-full"
            value={formData.timeAbsent}
            onChange={(e) => setFormData({ ...formData, timeAbsent: e.target.value })}
            required
          />
        </div>

        {/* Time Present */}
        <div>
          <label htmlFor="timePresent" className="block font-semibold text-gray-800">Time Present</label>
          <input
            type="text"
            id="timePresent"
            className="mt-1 p-2 border rounded w-full"
            value={formData.timePresent}
            onChange={(e) => setFormData({ ...formData, timePresent: e.target.value })}
            required
          />
        </div>


         {/* Time school open */}
         <div>
          <label htmlFor="timeSchoolOpen" className="block font-semibold text-gray-800">Time School Open</label>
          <input
            type="text"
            id="timeSchoolOpen"
            className="mt-1 p-2 border rounded w-full"
            value={formData.timeSchoolOpen}
            onChange={(e) => setFormData({ ...formData, timeSchoolOpen: e.target.value })}
            required
          />
        </div>

        {/* Gender */}
       
         <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-600">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            className="mt-1 p-2 border rounded w-full"
            value={formData.gender}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>




        {/* Term */}
    
         <div className="mb-4">
          <label htmlFor="term" className="block text-sm font-medium text-gray-600">
            Term
          </label>
          <select
            id="term"
            name="term"
            className="mt-1 p-2 border rounded w-full"
            value={formData.term}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Term</option>
            <option value="First">First</option>
            <option value="Second">Second</option>
            <option value="Third">Third</option>
          </select>
        </div>

        {/* Total Student */}
        <div>
          <label htmlFor="totalStudent" className="block font-semibold text-gray-800">Total Student</label>
          <input
            type="text"
            id="totalStudent"
            className="mt-1 p-2 border rounded w-full"
            value={formData.totalStudent}
            onChange={(e) => setFormData({ ...formData, totalStudent: e.target.value })}
            required
          />
        </div>



 <div className="w-full p-4 bg-white rounded shadow-lg mt-8">
      <h1 className="text-2xl font-bold mb-4">Performance</h1>
      {subjectScores?.map((subjectScore, index) => (
        <div key={index} className="mb-10">
          <select
            value={subjectScore.subject}
            onChange={(e) => handleSubjectChange(index, e.target.value)}
            className="border border-gray-400 p-2 rounded mr-2"
          >
            <option value="">Select Subject</option>
            <option value="MATHEMATICS">MATHEMATICS</option>
            <option value="ENGLISH LANGUAGE">ENGLISH LANGUAGE</option>
            <option value="MARKETING">MARKETING</option>
            <option value="COMPUTER STUDIES">COMPUTER STUDIES</option>
            <option value="FINANCIAL ACCOUNTING">FINANCIAL ACCOUNTING</option>
            <option value="ECONOMICS">ECONOMICS</option>
            <option value="BIOLOGY">BIOLOGY</option>
            <option value="COMMERCE">COMMERCE</option>
            <option value="AGRICULTURE SCIENCE">AGRICULTURE SCIENCE</option>
            <option value="ECONOMICS">ECONOMICS</option>
            <option value="FOOD & NUTRITION">FOOD & NUTRITION</option>
            <option value="CIVIC EDUCATION">CIVIC EDUCATION</option>
            <option value="DATA PROCESSING">DATA PROCESSING</option>
            <option value="YORUBA">YORUBA</option>
            
          
            {/* Add more subject options */}
          </select>
          <input
            type="number"
            placeholder="First CA"
            value={subjectScore.firstCA}
            onChange={(e) => handleFCAChange(index, e.target.value)}
            className="border border-gray-400 p-2 rounded mr-2"
          />
          <input
            type="number"
            placeholder="Second CA"
            value={subjectScore.secondCA}
            onChange={(e) => handleSCAChange(index, e.target.value)}
            className="border border-gray-400 p-2 rounded mr-2"
          />
          <input
            type="number"
            placeholder="Exam Score"
            value={subjectScore.exam}
            onChange={(e) => handleExamChange(index, e.target.value)}
            className="border border-gray-400 p-2 rounded mr-2"
          />


            <input
            type="number"
            placeholder="Class Total"
            value={subjectScore.classTotal}
            onChange={(e) => handleClassTotalChange(index, e.target.value)}
            className="border border-gray-400 p-2 rounded mr-2"
          />  
        </div>
      ))}


            {/* Display Error Message */}
            {error && <div className="text-red-500">{error}</div>}

{/* Display Success Message */}
{success && <div className="text-green-500">{success}</div>}

      <button onClick={confirmSubject} className="bg-blue-500 text-white py-2 mb-6 px-4 rounded mr-2">
        Confirm Subjects
      </button>
      {/* <button onClick={ addSubject} className="bg-[green] text-white py-2 px-4 rounded mr-2">
        Add Subjects
      </button> */}
{/*      
     <button
  onClick={handleRemoveSubject}
  disabled={subjectScores.length <= 2}
  className={`py-2 px-4 rounded ${
    subjectScores.length <= 2
      ? 'bg-gray-300 cursor-not-allowed'
      : 'bg-red-500 hover:bg-red-600 text-white'
  }`}
>
  Remove Subject
</button> */}
    </div>



         {/* Punctuality */}
         <div className="mb-4">
          <label htmlFor="punctuality" className="block text-sm font-medium text-gray-600">
            Punctuality
          </label>
          <select
            id="punctuality"
            name="punctuality"
            className="mt-1 p-2 border rounded w-full"
            value={formData.punctuality}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Punctuality</option>
            <option value="Excellent">Excellent</option>
            <option value="V.Good">Very Good</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Fail">Fail</option>
            {/* Add more options as needed */}
          </select>
        </div>


        <div className="mb-4">
          <label htmlFor="neatness" className="block text-sm font-medium text-gray-600">
            Neatness
          </label>
          <select
            id="neatness"
            name="neatness"
            className="mt-1 p-2 border rounded w-full"
            value={formData.neatness}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Neatness</option>
            <option value="Excellent">Excellent</option>
            <option value="V.Good">Very Good</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Fail">Fail</option>
            {/* Add more options as needed */}
          </select>
        </div>


        <div className="mb-4">
          <label htmlFor="health" className="block text-sm font-medium text-gray-600">
            Health
          </label>
          <select
            id="health"
            name="health"
            className="mt-1 p-2 border rounded w-full"
            value={formData.health}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Health</option>
            <option value="Excellent">Excellent</option>
            <option value="V.Good">Very Good</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Fail">Fail</option>
            {/* Add more options as needed */}
          </select>
        </div>


        <div className="mb-4">
          <label htmlFor="emotionalStabilty" className="block text-sm font-medium text-gray-600">
            Emotional Stability
          </label>
          <select
            id="emotionalStabilty"
            name="emotionalStabilty"
            className="mt-1 p-2 border rounded w-full"
            value={formData.emotionalStabilty}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Emotional Stability</option>
            <option value="Excellent">Excellent</option>
            <option value="V.Good">Very Good</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Fail">Fail</option>
            {/* Add more options as needed */}
          </select>
        </div>



        <div className="mb-4">
          <label htmlFor="honesty" className="block text-sm font-medium text-gray-600">
          Honesty
          </label>
          <select
            id="honesty"
            name="honesty"
            className="mt-1 p-2 border rounded w-full"
            value={formData.honesty}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Honesty</option>
            <option value="Excellent">Excellent</option>
            <option value="V.Good">Very Good</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Fail">Fail</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="sport" className="block text-sm font-medium text-gray-600">
          Sport
          </label>
          <select
            id="sport"
            name="sport"
            className="mt-1 p-2 border rounded w-full"
            value={formData.sport}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Sport</option>
            <option value="Excellent">Excellent</option>
            <option value="V.Good">Very Good</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Fail">Fail</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="writing" className="block text-sm font-medium text-gray-600">
          Writing
          </label>
          <select
            id="writing"
            name="writing"
            className="mt-1 p-2 border rounded w-full"
            value={formData.writing}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Writing</option>
            <option value="Excellent">Excellent</option>
            <option value="V.Good">Very Good</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Fail">Fail</option>
            {/* Add more options as needed */}
          </select>
        </div>


        <div className="mb-4">
          <label htmlFor="greeting" className="block text-sm font-medium text-gray-600">
          Greeting
          </label>
          <select
            id="greeting"
            name="greeting"
            className="mt-1 p-2 border rounded w-full"
            value={formData.greeting}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Greeting</option>
            <option value="Excellent">Excellent</option>
            <option value="V.Good">Very Good</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Fail">Fail</option>
            {/* Add more options as needed */}
          </select>
        </div>


        <div className="mb-4">
          <label htmlFor="atitude" className="block text-sm font-medium text-gray-600">
          Attitude To Accademic
          </label>
          <select
            id="atitude"
            name="atitude"
            className="mt-1 p-2 border rounded w-full"
            value={formData.atitude}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Attitude To Accademics</option>
            <option value="Excellent">Excellent</option>
            <option value="V.Good">Very Good</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Fail">Fail</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="socialSkills" className="block text-sm font-medium text-gray-600">
          Social Skills
          </label>
          <select
            id="socialSkills"
            name="socialSkills"
            className="mt-1 p-2 border rounded w-full"
            value={formData.socialSkills}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Social Skills</option>
            <option value="Excellent">Excellent</option>
            <option value="V.Good">Very Good</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Fail">Fail</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="leaderShip" className="block text-sm font-medium text-gray-600">
          LeaderShip Skills
          </label>
          <select
            id="leaderShip"
            name="leaderShip"
            className="mt-1 p-2 border rounded w-full"
            value={formData.leaderShip}
            onChange={handleInputChange}
            required
          >
            <option value="">Select LeaderShip Skills</option>
            <option value="Excellent">Excellent</option>
            <option value="V.Good">Very Good</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Fail">Fail</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="practical" className="block text-sm font-medium text-gray-600">
          Practicals
          </label>
          <select
            id="practical"
            name="practical"
            className="mt-1 p-2 border rounded w-full"
            value={formData.practical}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Practicals</option>
            <option value="Excellent">Excellent</option>
            <option value="V.Good">Very Good</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Fail">Fail</option>
            {/* Add more options as needed */}
          </select>
        </div>


        {/* Submit Button */}
        <div>
          <button
            type="submit" onClick={handleSubmit}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;

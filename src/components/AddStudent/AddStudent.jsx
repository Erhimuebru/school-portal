import React, { useState, useEffect } from 'react';

const AddStudent = () => {
  const [subjectScores, setSubjectScores] = useState([{ subject: '', firstCA: '', secondCA: '', exam: '' }]);

  const handleSubjectChange = (index, newSubject) => {
    const updatedScores = [...subjectScores];
    updatedScores[index].subject = newSubject;
    setSubjectScores(updatedScores);
  };
//  useEffect(() => {
//     const lastSubject = subjectScores[subjectScores.length - 1];
//     if (lastSubject.subject && !lastSubject.firstCA && !lastSubject.secondCA && !lastSubject.exam) {
//       setSubjectScores([...subjectScores, { subject: '', firstCA: '', secondCA: '', exam: '' }]);
//     }
//   }, [subjectScores]);

//   const handleSubjectChange = (index, newSubject) => {
//     const updatedScores = [...subjectScores];
//     updatedScores[index].subject = newSubject;
//     setSubjectScores(updatedScores);
//   };

// 

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

  const addSubject = (e) => {
    e.preventDefault();
  setFormData((prevData) => ({
    ...prevData,
    subjectScores: [...prevData.subjectScores, ...subjectScores],
  }));

    setSubjectScores([...subjectScores, { subject: '', firstCA: '', secondCA: '', exam: '' }]);
      // setSubjectScores([{ subject: '', firstCA: '', secondCA: '', exam: '' }]);
      // Logging the updated state to the console
      console.log('Updated Subject Scores:', subjectScores);
  };
  

  const confirmSubject = (e) => {
    e.preventDefault();

    // setSubjectScores([...subjectScores, { subject: '', firstCA: '', secondCA: '', exam: '' }]);
      // Logging the updated state to the console
      console.log('Updated Subject Scores:', subjectScores);
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
    subjectScores:[],
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
          subjectScores: [],
          firstCA: '',
          secondCA: '', 
          exam: ''
        });

        setSubjectScores([{ subject: '', firstCA: '', secondCA: '', exam: '' }])
         
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
        <div>
          <label htmlFor="classSection" className="block font-semibold text-gray-800">Class Section</label>
          <input
            type="text"
            id="classSection"
            className="mt-1 p-2 border rounded w-full"
            value={formData.classSection}
            onChange={(e) => setFormData({ ...formData, classSection: e.target.value })}
            required
          />
        </div>


          {/* Department */}
          <div>
          <label htmlFor="department" className="block font-semibold text-gray-800">Department</label>
          <input
            type="text"
            id="department"
            className="mt-1 p-2 border rounded w-full"
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
            required
          />
        </div>


        {/* Payment Status */}
        {/* <div>
          <label htmlFor="paymentStatus" className="block font-semibold text-gray-800">Payment Status</label>
          <input
            type="text"
            id="paymentStatus"
            className="mt-1 p-2 border rounded w-full"
            value={formData.paymentStatus}
            onChange={(e) => setFormData({ ...formData, paymentStatus: e.target.value })}
            required
          />
        </div> */}


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
         <div>
          <label htmlFor="house" className="block font-semibold text-gray-800">House</label>
          <input
            type="text"
            id="house"
            className="mt-1 p-2 border rounded w-full"
            value={formData.house}
            onChange={(e) => setFormData({ ...formData, house: e.target.value })}
            required
          />
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
        {/* <div>
          <label htmlFor="gender" className="block font-semibold text-gray-800">Gender</label>
          <input
            type="text"
            id="gender"
            className="mt-1 p-2 border rounded w-full"
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            required
          />
        </div> */}


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
            {/* Add more options as needed */}
          </select>
        </div>




        {/* Term */}
        {/* <div>
          <label htmlFor="term" className="block font-semibold text-gray-800">Term</label>
          <input
            type="text"
            id="term"
            className="mt-1 p-2 border rounded w-full"
            value={formData.term}
            onChange={(e) => setFormData({ ...formData, term: e.target.value })}
            required
          />
        </div> */}


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
            {/* Add more options as needed */}
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
            <option value="Mathematics">Mathematics</option>
            <option value="English">English</option>
            <option value="Marketing">Marketing</option>
            <option value="Computer">Computer</option>
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
        </div>
      ))}
      <button onClick={confirmSubject} className="bg-blue-500 text-white py-2 mb-6 px-4 rounded mr-2">
        Confirm Subjects
      </button>
      <button onClick={ addSubject} className="bg-[green] text-white py-2 px-4 rounded mr-2">
        Add Subjects
      </button>
     
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
</button>
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

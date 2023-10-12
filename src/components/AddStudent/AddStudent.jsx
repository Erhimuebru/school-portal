import React, { useState } from 'react';

const AddStudent = () => {
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
        });
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
      <h2 className="text-2xl font-bold mb-6">Add New Student</h2>
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
        <div>
          <label htmlFor="paymentStatus" className="block font-semibold text-gray-800">Payment Status</label>
          <input
            type="text"
            id="paymentStatus"
            className="mt-1 p-2 border rounded w-full"
            value={formData.paymentStatus}
            onChange={(e) => setFormData({ ...formData, paymentStatus: e.target.value })}
            required
          />
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
        <div>
          <label htmlFor="gender" className="block font-semibold text-gray-800">Gender</label>
          <input
            type="text"
            id="gender"
            className="mt-1 p-2 border rounded w-full"
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            required
          />
        </div>

        {/* Term */}
        <div>
          <label htmlFor="term" className="block font-semibold text-gray-800">Term</label>
          <input
            type="text"
            id="term"
            className="mt-1 p-2 border rounded w-full"
            value={formData.term}
            onChange={(e) => setFormData({ ...formData, term: e.target.value })}
            required
          />
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

        <div className="flex space-x-2">
          <div>
            <label htmlFor="caSubject" className="block font-semibold text-gray-800">Subject</label>
            <input
              type="text"
              id="caSubject"
              className="mt-1 p-2 border rounded w-full"
              value={formData.caSubject}
              onChange={(e) => setFormData({ ...formData, caSubject: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="firstCaScores" className="block font-semibold text-gray-800">First CA Scores</label>
            <input
              type="number"
              id="firstCaScores"
              className="mt-1 p-2 border rounded w-full"
              value={formData.firstCaScores[0] || ''}
              onChange={(e) => setFormData({ ...formData, firstCaScores: [parseInt(e.target.value), ...formData.firstCaScores.slice(1)] })}
              required
            />
          </div>
          <div>
            <label htmlFor="secondCaScores" className="block font-semibold text-gray-800">Second CA Scores</label>
            <input
              type="number"
              id="secondCaScores"
              className="mt-1 p-2 border rounded w-full"
              value={formData.SecondCaScores[0] || ''}
              onChange={(e) => setFormData({ ...formData, SecondCaScores: [parseInt(e.target.value), ...formData.SecondCaScores.slice(1)] })}
              required
            />
          </div>
          <div>
            <label htmlFor="examScores" className="block font-semibold text-gray-800">Exam Scores</label>
            <input
              type="number"
              id="examScores"
              className="mt-1 p-2 border rounded w-full"
              value={formData.examScores[0] || ''}
              onChange={(e) => setFormData({ ...formData, examScores: [parseInt(e.target.value), ...formData.examScores.slice(1)] })}
              required
            />
          </div>
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

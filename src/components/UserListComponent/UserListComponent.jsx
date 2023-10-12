import React, { useState, useEffect } from 'react';

const ClassSectionsComponent = () => {
  const [classSections, setClassSections] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');

  useEffect(() => {
    const fetchClassSections = async () => {
      try {
        const response = await fetch(`http://localhost:4000/users?classSection=${selectedClass}`);
        const data = await response.json();
        setClassSections(data);
      } catch (error) {
        console.error('Error fetching class sections:', error);
      }
    };
     fetchClassSections();
  }, []);

  const filteredClassSections = classSections.filter(section => section.includes(selectedClass));

  return (
    <div>
      <label htmlFor="classSection">Enter Class Section:</label>
      <input
        type="text"
        id="classSection"
        value={selectedClass}
        onChange={(e) => setSelectedClass(e.target.value)}
      />

      <h2>Filtered Class Sections</h2>
      <ul>
        {filteredClassSections.map((section, index) => (
          <li key={index}>{section}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClassSectionsComponent;

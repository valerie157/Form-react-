import React, { useState } from 'react';
import axios from 'axios';

const AddStudentForm = () => {
  const [studentData, setStudentData] = useState({
    studentName: '',
    studentGrade: '',
  });

  const handleStudentChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleStudentSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/students', studentData);
      console.log('Student added:', response.data);
      // Optionally, you can reset the form after a successful submission
      setStudentData({ studentName: '', studentGrade: '' });
    } catch (error) {
      console.error('Error adding student:', error);
      // Handle error scenarios, such as displaying an error message to the user
    }
  };

  return (
    <div>
      <h2>Add Student Form</h2>
      <form onSubmit={handleStudentSubmit}>
        <input
          type="text"
          name="studentName"
          placeholder="Student Name"
          value={studentData.studentName}
          onChange={handleStudentChange}
        />
        <input
          type="number"
          name="studentGrade"
          placeholder="Student Grade"
          value={studentData.studentGrade}
          onChange={handleStudentChange}
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudentForm;

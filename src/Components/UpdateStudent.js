import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateStudentForm = ({ studentId }) => {
  const [studentData, setStudentData] = useState({
    studentName: '',
    studentGrade: '',
  });

  // Fetch the student's data from the server when the component mounts
  useEffect(() => {
    async function fetchStudent() {
      try {
        const response = await axios.get(`http://localhost:4000/students/${studentId}`);
        const { studentName, studentGrade } = response.data; // Assuming the response contains student data
        setStudentData({ studentName, studentGrade });
      } catch (error) {
        console.error('Error fetching student:', error);
      }
    }
    fetchStudent();
  }, [studentId]);

  const handleStudentChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleStudentUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:4000/students/${studentId}`, studentData);
      console.log('Student updated:', response.data);
      // Optionally, perform any necessary actions upon successful update
    } catch (error) {
      console.error('Error updating student:', error);
      // Handle error scenarios
    }
  };

  return (
    <div>
      <h2>Update Student Form</h2>
      <form onSubmit={handleStudentUpdate}>
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
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
};

export default UpdateStudentForm;

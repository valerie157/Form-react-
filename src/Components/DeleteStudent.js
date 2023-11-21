import React from 'react';
import axios from 'axios';

const DeleteStudentButton = ({ studentId }) => {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:4000/students/${studentId}`);
      console.log('Student deleted:', response.data);
      // Optionally, perform any necessary actions upon successful deletion
    } catch (error) {
      console.error('Error deleting student:', error);
      // Handle error scenarios
    }
  };

  return (
    <div>
      <h2>Delete Student</h2>
      <button onClick={handleDelete}>Delete Student</button>
    </div>
  );
};

export default DeleteStudentButton;

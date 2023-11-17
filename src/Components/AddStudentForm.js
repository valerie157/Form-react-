import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

const AddStudentForm = () => {
  const [studentData, setStudentData] = useState({
    studentName: '',
    studentGrade: '',
  });

  const [errors, setErrors] = useState({
    studentName: '',
    studentGrade: '',
  });

  const handleStudentChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    if (name === 'studentName' && value.trim() === '') {
      setErrors((prevErrors) => ({ ...prevErrors, studentName: 'Student name is required.' }));
    } else if (name === 'studentGrade' && (isNaN(value) || value.trim() === '' || value < 0 || value > 100)) {
      setErrors((prevErrors) => ({ ...prevErrors, studentGrade: 'Please enter a valid grade (0-100).' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  const handleStudentSubmit = (e) => {
    e.preventDefault();
    const isFormValid = Object.values(errors).every((error) => !error);

    if (isFormValid) {
      toast.success('Student added successfully!');
      // Logic to send data to the server goes here
    } else {
      toast.error('Please correct the errors in the form.');
    }
  };

  return (
    <div className="container mt-4">
      <h3>Add Student Form</h3>
      <form onSubmit={handleStudentSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="studentName"
            placeholder="Student Name"
            value={studentData.studentName}
            onChange={handleStudentChange}
            className="form-control"
          />
          <p className="text-danger">{errors.studentName}</p>
        </div>
        <div className="mb-3">
          <input
            type="number"
            name="studentGrade"
            placeholder="Student Grade"
            value={studentData.studentGrade}
            onChange={handleStudentChange}
            className="form-control"
          />
          <p className="text-danger">{errors.studentGrade}</p>
        </div>
        <button type="submit" className="btn btn-primary">Add Student</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddStudentForm;


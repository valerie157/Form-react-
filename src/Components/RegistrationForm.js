import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

const RegistrationForm = () => {
  const [registrationData, setRegistrationData] = useState({
    regUsername: '',
    regEmail: '',
    regPassword: '',
  });

  const [errors, setErrors] = useState({
    regUsername: '',
    regEmail: '',
    regPassword: '',
  });

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData({ ...registrationData, [name]: value });
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    if (name === 'regUsername' && (value.trim() === '' || value.length < 3)) {
      setErrors((prevErrors) => ({ ...prevErrors, regUsername: 'Username is required and should be at least 3 characters.' }));
    } else if (name === 'regEmail' && (value.trim() === '' || !value.includes('@'))) {
      setErrors((prevErrors) => ({ ...prevErrors, regEmail: 'Please enter a valid email address.' }));
    } else if (name === 'regPassword' && value.trim() === '') {
      setErrors((prevErrors) => ({ ...prevErrors, regPassword: 'Password is required.' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    const isFormValid = Object.values(errors).every((error) => !error);

    if (isFormValid) {
      toast.success('Registration successful!');
    
    } else {
      toast.error('Please correct the errors in the form.');
    }
  };

  return (
    <div className="container mt-4">
      <h3>Registration Form</h3>
      <form onSubmit={handleRegistrationSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="regUsername"
            placeholder="Username"
            value={registrationData.regUsername}
            onChange={handleRegistrationChange}
            className="form-control"
          />
          <p className="text-danger">{errors.regUsername}</p>
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="regEmail"
            placeholder="Email"
            value={registrationData.regEmail}
            onChange={handleRegistrationChange}
            className="form-control"
          />
          <p className="text-danger">{errors.regEmail}</p>
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="regPassword"
            placeholder="Password"
            value={registrationData.regPassword}
            onChange={handleRegistrationChange}
            className="form-control"
          />
          <p className="text-danger">{errors.regPassword}</p>
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default RegistrationForm;

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    loginEmail: '',
    loginPassword: '',
  });

  const [errors, setErrors] = useState({
    loginEmail: '',
    loginPassword: '',
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    if (name === 'loginEmail' && (value.trim() === '' || !value.includes('@'))) {
      setErrors((prevErrors) => ({ ...prevErrors, loginEmail: 'Please enter a valid email address.' }));
    } else if (name === 'loginPassword' && value.trim() === '') {
      setErrors((prevErrors) => ({ ...prevErrors, loginPassword: 'Password is required.' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const isFormValid = Object.values(errors).every((error) => !error);

    if (isFormValid) {
      try {
        // Make a POST request to the backend endpoint for login authentication
        const response = await axios.post('http://localhost:4000/login', loginData);
        // Check the response from the server for success or failure
        if (response.data.success) {
          toast.success('Login successful!');
          window.location.href = "/dashboard"; // Redirect to the dashboard upon successful login
        } else {
          toast.error('Invalid email or password.');
        }
      } catch (error) {
        console.error('Error logging in:', error);
        toast.error('An error occurred during login.');
      }
    } else {
      toast.error('Please correct the errors in the form.');
    }
  };

  return (
    <div className="container mt-4">
      <h3>Login Form</h3>
      <form onSubmit={handleLoginSubmit}>
        <div className="mb-3">
          <input
            type="email"
            name="loginEmail"
            placeholder="Email"
            value={loginData.loginEmail}
            onChange={handleLoginChange}
            className="form-control"
          />
          <p className="text-danger">{errors.loginEmail}</p>
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="loginPassword"
            placeholder="Password"
            value={loginData.loginPassword}
            onChange={handleLoginChange}
            className="form-control"
          />
          <p className="text-danger">{errors.loginPassword}</p>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;

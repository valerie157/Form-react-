import React from 'react';
import RegistrationForm from './Components/RegistrationForm';
import AddStudentForm from './Components/AddStudentForm';
import LoginForm from './Components/LoginForm';

const App = () => {
  // Your component logic
  
  return (
    <div>
      <RegistrationForm />
      <LoginForm />
      <AddStudentForm />
      {/* Other components or content */}
    </div>
  );
};

export default App;

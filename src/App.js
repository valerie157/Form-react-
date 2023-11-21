import React from 'react';
import RegistrationForm from './Components/RegistrationForm';
import AddStudentForm from './Components/AddStudentForm';
import LoginForm from './Components/LoginForm';
import UpdateStudentForm from './Components/UpdateStudent';
import DeleteStudentButton from './Components/DeleteStudent';
import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/addstudent">Add Student</Link>
            </li>
            <li>
              <Link to="/updatestudent">Update Student</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/deletestudent">DeleteStudentButton</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <LoginForm />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/register">
            <RegistrationForm />
          </Route>
          <Route path="/addstudent">
            <AddStudentForm />
          </Route>
          <Route path="/updatestudent">
            <UpdateStudentForm/>
          </Route>
          <Route path="/deletestudent">
            <DeleteStudentButton/>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;

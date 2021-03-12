import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from './components/UserForm'
import UserCard from './components/UserCard'
import React, { useState } from 'react';

const App = (props) => {

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChanges = (e) => {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  }

  return (
    <div className="App">
      <UserForm 
        inputs = {user}
        handleInputChange = {handleChanges}
        handleFormSubmit = {handleSubmit}
      />
      <UserCard 
        firstName = {user.firstName}
        lastName = {user.lastName}
        email = {user.email}
        password = {user.password}
        confirmPassword = {user.confirmPassword}
      />
    </div>
  );
}

export default App;

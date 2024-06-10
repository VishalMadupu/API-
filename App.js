import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    gender: '',
    phonenumber: ''
  });

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // Send a POST request to the backend with user data
      await axios.post('http://localhost:3000/adduser', formData);
      setFormData({
        firstname: '',
        lastname: '',
        gender: '',
        phonenumber: ''
      });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div>
      <h1>User Management System</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          placeholder="First Name"
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          placeholder="Last Name"
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="gender"
          value={formData.gender}
          placeholder="Gender"
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="phonenumber"
          value={formData.phonenumber}
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default App;
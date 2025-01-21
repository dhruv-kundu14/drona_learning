import React, { useState } from 'react';
import axios from 'axios';
import "./Register.css";
import { useNavigate } from 'react-router-dom';


const RegistrationForm = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    phoneNumber: '',
    address: '',
    addresspoint: '', // Address from the map
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Form Data:', formData);

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
      const response = await axios.post(
        `${backendUrl}/common-backend/api/registerForm`,
        formData
      );
      console.log('Response:', response.data);
      alert('User has been registered successfully');
      navigate('/login');
    } catch (error) {
      console.error('Error in registration:', error.response || error);
      alert('Failed to register user. Please try again.');
    }
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2>Register New User</h2>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password *</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            placeholder="Confirm your password"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="gender">Gender *</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number *</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
          />
        </div>
      </div>

      <div className="form-row address-row">
        <div className="form-group address-input">
          <label htmlFor="address">Address *</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="Enter your address"
          />
        </div>
      </div>

     

      <button type="submit" className="submit-btn">
        Sign up
      </button>

      <p>
        Already have an account? <a href="/user">Login</a>
      </p>
    </form>
  );
};

export default RegistrationForm;

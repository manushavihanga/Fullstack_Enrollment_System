import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';
import { useNavigate } from 'react-router-dom';

const Auth = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('Sign Up');
  const [formData, setFormData] = useState({
    studentName: '',
    mobilenum: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currState === 'Sign Up') {
        await axios.post("http://localhost:8080/api/v1/user/sign-up", formData);
        alert('Account created successfully!');
        setCurrState('Login');
        setFormData({
          email: '',
          password: '',
        });
        // Clear additional fields if necessary
      } else {
        await axios.post("http://localhost:8080/api/v1/account/user-login", {
          email: formData.email,
          password: formData.password,
        });
        alert('Logged in successfully!');
        localStorage.setItem('userEmail', formData.email); // Store email in local storage
        navigate('/home'); // Navigate to the Home page
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className='login-popup-auth'>
    <form onSubmit={handleSubmit} className="login-popup-container">
      <h1>EV-olution</h1>
      <div className="login-popup-inputs">
        {currState === 'Login' ? null : (
          <>
            <input
              type="text"
              name="studentName"
              placeholder="Your name"
              value={formData.studentName}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="mobilenum"
              placeholder="Your mobile number"
              value={formData.mobilenum}
              onChange={handleChange}
              required
            />
          </>
        )}
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="login-popup-condition">
        <p>By continuing, I agree to the terms of use & privacy policy.</p>
        <input type="checkbox" required />
      </div>
      <button type="submit">{currState === 'Sign Up' ? 'Create account' : 'Login'}</button>
     <div className='clic'>
     {currState === 'Login' ? (
        <p>
          Create a new account? 
          <span onClick={() => {
            setCurrState('Sign Up');
            setFormData({
              studentName: '',
              mobilenum: '',
              email: '',
              password: '',
            });
          }}>Click here</span>
        </p>
      ) : (
        <p>
          Already have an account? 
          <span onClick={() => {
            setCurrState('Login');
            setFormData({
              studentName: '',
              mobilenum: '',
              email: '',
              password: '',
            });
          }}>Login here</span>
        </p>
      )}
     </div>
    </form>
  </div>
  
  );
};

export default Auth;

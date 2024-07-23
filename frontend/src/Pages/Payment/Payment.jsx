import React, { useState, useEffect } from 'react';
import './Payment.css';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { food_list } from '../../assets/asset';
import axios from 'axios';

const Payment = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    userName: '',
    instructorName: '',
    subject: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    fees:'',
  });

  useEffect(() => {
    const lecture = food_list.find(item => item._id === id);
    if (lecture) {
      setFormData(prevFormData => ({
        ...prevFormData,
        instructorName: lecture.name,
        subject: lecture.subject,
        fees:lecture.price
      }));
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v1/course/save-my-course", {
        studentName: formData.userName,
        email: formData.userName,
        lectName: formData.instructorName,
        subject: formData.subject
      });
      alert('Payment successful and registered!');
      navigate('/home');
    } catch (error) {
      console.error('Error during form submission:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className='login-popup'>
      <form onSubmit={handleSubmit} className="login-popup-container">
        <h1>REGISTER</h1>
        <div className="login-popup-inputs">         
          <input
            type="text"
            name="userName"
            placeholder="User name"
            value={formData.userName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="instructorName"
            placeholder="Instructor Name"
            value={formData.instructorName}
            onChange={handleChange}
            required
            readOnly
          />
          <input
            type="text"
            name="subject"
            placeholder="Enter Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            readOnly
          />
        </div>
        <div className="login-popup-condition">
          <p>Please Pay Rs.{formData.fees} for Registration.</p>
          <div className="card-details">
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="expirationDate"
              placeholder="Expiration Date (MM/YY)"
              value={formData.expirationDate}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={formData.cvv}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit">Pay and Register</button>    
      </form>
    </div>
  );
};

export default Payment;

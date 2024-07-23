import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './YourCourses.css';
import Contact from '../Footer/Contact';
import Navbar from '../Navbar/Navbar';

const YourCourses = () => {
  const [email, setEmail] = useState('');
  const [courses, setCourses] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    setEmail(storedEmail || '');

    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/course/get-my-courses', {
          params: { email: storedEmail }
        });
        console.log("API response:", response);
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    if (storedEmail) {
      fetchCourses();
    }
  }, []);
/*
  const deleteCourse = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/delete-course/${id}`);
      setCourses(courses.filter(course => course.id !== id));
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };
*/
  return (
    <div>  
     
      <div className='my-4'>
        <h1>Welcome to Your Course Dashboard</h1>
        {email && <p>You're logged in as: {email}</p>}
        
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Course ID</th>
              <th scope="col">Student Name</th>
              <th scope="col">Lecture Name</th>
              <th scope="col">Subject</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.length > 0 ? (
              courses.map((course) => (
                <tr key={course.id}>
                  <td>{course.id}</td>
                  <td>{course.studentName}</td>
                  <td>{course.lectName}</td>
                  <td>{course.subject}</td>
                  <td>
                    <Link className='btn' to={`/viewcourse/${course.id}`}>View</Link>
                    <button className='btn ' onClick={() => deleteCourse(course.id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No courses found</td>
              </tr>
            )}
          </tbody>
        </table>
       <button onClick={()=>navigate("/home")}>Back To Home</button>
      </div>
      <Contact/>
    </div>
  );
};

export default YourCourses;

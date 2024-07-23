import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Auth from './Pages/Auth/Auth';
import Payment from './Pages/Payment/Payment';
import YourCourses from './component/YourCourses/YourCourses';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" />} /> 
        <Route path="/auth" element={<Auth />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/payment/:id" element={<Payment />} />
        <Route path="/home/your-courses" element={<YourCourses/>} />
      </Routes>
    </Router>     
  );
}

export default App;

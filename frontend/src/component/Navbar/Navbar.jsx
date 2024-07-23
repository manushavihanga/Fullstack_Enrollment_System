import React, { useState } from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const [menu,setMenu]=useState("home");
  const navigate = useNavigate();
  const handleClick = () => {
    setMenu('lecture');
    navigate('/home/your-courses'); 
  };

  return (
    <div className='nav'>
      
       <div className="nav-logo">EV-olution</div> 
       <div>
       <ul className="nav-menu">
           <a href='#header' onClick={()=>setMenu("header")}  className={menu==="header"?"active":""}>home</a>
           <a href='#about' onClick={()=>setMenu("about")}  className={menu==="about"?"active":""}>about</a>
           <a href='#courses' onClick={()=>setMenu("courses")}  className={menu==="courses"?"active":""}>lectures</a>         
           <a href='#footer' onClick={()=>setMenu("footer")}  className={menu==="footer"?"active":""} >contact</a>
           <a href='#your-courses' onClick={handleClick}  className={menu==="lecture"?"active":""}>your-courses</a>
           <li className="signin">Log-out</li>

       </ul>  
       </div>
           
    </div>
  );
};

export default Navbar;

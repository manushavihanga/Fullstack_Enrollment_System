import React from 'react';
import './Courses.css';

const Courses = ({ onSelectCategory }) => {

   
  const handleClick = (category) => {
    onSelectCategory(category);
}
  return (
    <div className='courses' id='courses'>
      <h2> Choose your preferred subject stream to begin your academic journey.</h2>
     
      <div className='courses-stream'>
        <ul>
        <ul>
                <li onClick={() => handleClick("All")}>All</li>
                <li onClick={() => handleClick("Science")}>Science</li>
                <li onClick={() => handleClick("Commerce")}>Commerce</li>
                <li onClick={() => handleClick("Tech")}>Technology</li>
                <li onClick={() => handleClick("Art")}>Arts</li>
            </ul>
        </ul>
      </div>
    </div>
  );
};

export default Courses;

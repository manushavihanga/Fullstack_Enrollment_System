import React from 'react'
import Courses from '../Courses/Courses';
import Lecture from '../Lecture/Lecture';

const Parent = () => {
    const [category, setCategory] = useState("All");
  return (
    <div>
        <Courses category={category} setCategory={setCategory} />
        <Lecture category={category} />
    </div>
  )
}

export default Parent
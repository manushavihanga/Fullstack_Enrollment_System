import React from 'react'
import './LectureOne.css'

const LectureOne = ({name,description,image}) => {
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>
                {name}
            </p>
        </div>
        <p className="food-item-desc">{description}</p>
      </div> 
    </div>
  )
}

export default LectureOne
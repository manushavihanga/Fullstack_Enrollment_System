import React, { useState } from 'react';
import './Lecture.css';
import { food_list } from '../../assets/asset';
import Courses from '../Courses/Courses';
import { useNavigate } from 'react-router-dom';

const Lecture = () => {
    const [category, setCategory] = useState("All");
    const navigate = useNavigate();

    const handleRegisterClick = (foodId) => {
        navigate(`/payment/${foodId}`);
    };

    const handleSelectCategory = (selectedCategory) => {
        setCategory(selectedCategory);
    };

    const filteredFoodList = category === "All" ? food_list : food_list.filter(food => food.category === category);

    return (
        <div className="lecture-container">
            <Courses onSelectCategory={handleSelectCategory}/>
            <div className="lecture">
                
                
                <div className="lecture-list">
                    {filteredFoodList.map((food) => (
                        <div key={food._id} className="food-item">
                            <img src={food.image} alt={food.name} className="food-image" />
                            <h2 className="food-name">{food.name}</h2>
                            <p className="food-name">{food.subject}</p>
                            <p className="food-description">{food.description}</p>
                            <p className="food-price">Fees per Month: Rs.{food.price}</p>
                            <p className="food-category">{food.category}</p>
                            <button onClick={() => handleRegisterClick(food._id)}>Register</button>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Lecture;

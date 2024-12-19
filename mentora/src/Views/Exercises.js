import React from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';

const Exercises = ({respondFromAI}) => {

const [userInput, setUserInput] = useState("")
console.log(userInput)

const getExercise = async() => {  
const options = {
  method: 'GET',
  url: `https://exercisedb.p.rapidapi.com/exercises/name/${userInput}`,
  params: {
    offset: '0',
    limit: '10'
  },
  headers: {
    'x-rapidapi-key': 'c1dfea8db0msh6c9a0b6dc30b061p1c9e2djsn036a81b500e8',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}

const handleChange = e => {
    let data = e.target.value;
    setUserInput(data)
  };

    return <div className="Exercises section">
        <h1>My exercise program</h1>
        <p>Complete 3 sets of 10-12 reps per exercise</p>


<div className="exercise_grid">
    
    
        {respondFromAI.training.map((weekday) => {
            return <div className="container week_day_box">
                    <h2>{Object.entries(weekday)[0][0]}</h2>
                    <h3>{Object.entries(weekday)[0][1]}</h3>
                </div>
        }
        )}

        </div>
            <h1>EXERCISES INFO</h1>
                <p>We provides users with a comprehensive collection of workout movements. 
                It teaches users the correct form for each exercise, ensuring they perform movements safely and effectively.
                </p>

                <div>
                    <input className="input" placeholder="choose your exercise" onChange={handleChange}/>
                    <button onClick={getExercise}>search exercise</button>
                </div>

                <div>
                    <h2>name of exercise</h2>
                    <image sec="image of exercise"/>
                    <p>description how to do the exercise</p>
                    <link src="link to video of exercise"/>
                    <p>which muscle is working</p>
                </div>

           </div>
}

export default Exercises;






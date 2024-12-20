import React from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';

const Exercises = ({respondFromAI}) => {
  //sending from the App.js the function that is used (respondFromAI)

const [userInput, setUserInput] = useState("");

const [exerciseFromApi, setExerciseFromApi] = useState([]);
//this render the request to the API for a exercise by the user.

const getExercise = async() => {  
const options = {
  method: 'GET',
  url: `https://exercisedb.p.rapidapi.com/exercises/name/${userInput.toLowerCase()}`,
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
	setExerciseFromApi(response.data);
} catch (error) {
	console.error(error);
}
};
//this send the request to the API and handle the wait until the promise the served

const handleChange = e => {
    let data = e.target.value;
    setUserInput(data)
  };
  //this render and change in the input and put it into state

  const mapExercise = () => {
    if(exerciseFromApi.length>0){
    return exerciseFromApi.map((ele) => {
         return <div className="container week_day_box">
                    <h2>{ele.name}</h2>
                    <p>{ele.bodyPart}</p>
                    <ol>
                        {ele.instructions.map((step) => <li>{step}</li>)}
                    </ol>
                    <img src={ele.gifUrl} alt={ele.name}/>
                    <p>{ele.equipment}</p>
                </div>
    })}
  };
  //this function map on the request from API and shows all the variation
  //on the exercise. it give sit the style container and about the instruction,
  //it maping also and show it as a numbered-list

    return <div className="Exercises section">
        <h1>My exercise program</h1>
        <p>Complete 3 sets of 10-12 reps per exercise</p>


<div className="exercise_grid">
    
        {respondFromAI?.training.map((weekday) => {
            return <div className="container week_day_box">
                    <h2>{Object.entries(weekday)[0][0]}</h2>
                    <h3>{Object.entries(weekday)[0][1]}</h3>
                </div>
        }
        )};
        {/*this function map on the request from AI and the workout plan in style containe.
        it turns the objects(every day workput plan) to an array and shows every item by it's index*/}
        </div>
            <h1>EXERCISES INFO</h1>
                <p>We provides users with a comprehensive collection of workout movements. 
                It teaches users the correct form for each exercise, ensuring they perform movements safely and effectively.
                </p>

                <div>
                    <input className="input" placeholder="choose your exercise" onChange={handleChange}/>
                    <button onClick={getExercise}>search exercise</button>
                </div>
                <div className="exercise_grid">
                {mapExercise()}
                {/*this function called from up and gives () to be executed*/}
                </div>
           </div>
}

export default Exercises;






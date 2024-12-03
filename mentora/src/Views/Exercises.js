import React from "react";
import { NavLink } from "react-router-dom";

const Exercises = ({respondFromAI}) => {

    return <div className="Exercises section">
        <h1>My exercise program</h1>
        <p>Complete 3 sets of 10-12 reps per exercise</p>

<div className="exercise_grid">
    
        {respondFromAI.training.map((weekday) => {
            return <div className="week_day_box">
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
                    <input placeholder="here the user search fo the exercise"/>
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






import React from "react";
import { NavLink } from "react-router-dom";

const Exercises = () => {

    return <div className="Exercises section">
            <h1>EXERCISES</h1>
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
import React from "react";
import { NavLink } from "react-router-dom";

const Exercises = () => {

    return <div>
            <h1>EXERCISES</h1>
                <p>We provides users with a comprehensive collection of workout movements. 
                It teaches users the correct form for each exercise, ensuring they perform movements safely and effectively.
                </p>

                <div>
                    <input>here the user search fo the exercise</input>
                </div>

                <div>
                    <h2>name of exercise</h2>
                    <image>image of exercise</image>
                    <p>description how to do the exercise</p>
                    <link>link to video of exercise</link>
                    <span>which muscle is working</span>
                </div>

           </div>
}

export default Exercises;
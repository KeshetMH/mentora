import React from "react";
import { NavLink } from "react-router-dom";

const Meals = ({respondFromAI}) => {

    return <div className="Meals section">
            <h1>My nutrition program</h1>

            {respondFromAI.diet.map((weekday,idx) => {
            return <div key={idx}>
                {console.log(Object.entries(weekday))}
                <h2>{Object.entries(weekday)[0][0]}</h2>
                <h2>{Object.entries(weekday)[0][1].meals}</h2>
                <h2>Total Calories:{Object.entries(weekday)[0][1].total_calories}</h2>
                <h2>Protein:{Object.entries(weekday)[0][1].protein}</h2>
                
            </div>
        }
        )}

            <h1>Meals library</h1>
            <p>This library features recipes for healthy, quick-to-make, and nutritious 
                meals that are both delicious and satisfying. Each recipe is designed to be 
                ready in 30 minutes or less, using wholesome ingredients that support a 
                balanced diet.</p>

                <div>
                    <img src="image of recipe"/>
                        <div>
                            <p>time preparation</p>
                            <p>calories</p>
                            <h2>name of recipe</h2>
                            <p>description(low-card,low-calories,high protein, etc)</p>
                        </div>
                </div>

           </div>

}

export default Meals;
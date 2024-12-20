import React from "react";

const Meals = ({respondFromAI}) => {

    return <div className="Meals section">

            <h1>My nutrition program</h1>
        <div className="exercise_grid">
            {respondFromAI?.diet.map((weekday,idx) => {
            return <div className="container week_day_box" key={idx}>
                {console.log(Object.entries(weekday))}
                <h2>{Object.entries(weekday)[0][0]}</h2>
                <h2>{Object.entries(weekday)[0][1].meals}</h2>
                <h2>Protein:{Object.entries(weekday)[0][1].protein}</h2>
                <h2>Carbs:{Object.entries(weekday)[0][1].carbs}</h2>
                <h2>Fat:{Object.entries(weekday)[0][1].fat}</h2>
                <h2>Total Calories:{Object.entries(weekday)[0][1].total_calories}</h2>
            </div>
        }
        )}
                </div>

           </div>

}

export default Meals;
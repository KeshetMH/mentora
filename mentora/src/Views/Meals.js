import React from "react";
import { NavLink } from "react-router-dom";

const Meals = () => {

    return <div className="Meals section">
            <h1></h1>
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
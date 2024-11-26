import React from "react";
import { NavLink } from "react-router-dom";

const Meals = () => {

    return <div>
            <h1></h1>
            <p>This library features recipes for healthy, quick-to-make, and nutritious 
                meals that are both delicious and satisfying. Each recipe is designed to be 
                ready in 30 minutes or less, using wholesome ingredients that support a 
                balanced diet.</p>

                <div>
                    <img>image of recipe</img>
                        <div>
                            <span>time preparation</span>
                            <span>calories</span>
                            <h2>name of recipe</h2>
                            <p>description(low-card,low-calories,high protein, etc)</p>
                        </div>
                </div>

           </div>

}

export default Meals;
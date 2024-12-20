import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {

    return <div className="About">
                <h1>HOW IT WORKS</h1>
                <section className="About_p">
                    <p> MENTORA was createed with the goal of make it easy for people to
                    achive their health goals through personalized, AI-driven workout and nutrition plans. 
                    This platform offers users customized workout plans tailored 
                    to their fitness goals, experience level, and current physical state. 
                    Upon signing up, users provide key information such as their age, weight, height, fitness goals 
                    (e.g., muscle gain, fat loss, endurance), exercise preferences, and dietary needs 
                    (including vegetarian, vegan, keto, etc.). The AI processes this data and generates a customized 
                    plan that includes:
                    </p>
                    <p>
                    Weekly Workouts: Tailored strength routines, adjusted for gym or home settings, 
                    along with video tutorials and progress tracking.
                    </p>
                    <p>
                    Nutrition Plans: Calorie-targeted meal suggestions that align with dietary preferences, featuring balanced 
                    macronutrients and easy-to-make recipes. These meal plans evolve weekly based on user feedback and goal progress.
                    are dynamically adjusted each week based on user feedback and performance tracking.
                    </p>
                    <p>
                    Users can adjust their plans anytime by updating preferences or logging progress, allowing the AI to refine recommendations. 
                    MENTORA Planner creates a dynamic, supportive, and intelligent fitness experience to help users stay consistent and achieve 
                    their goals efficiently.
                    </p>
                    </section>
           </div>

}

export default About;
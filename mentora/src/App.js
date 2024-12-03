import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Exercises from "./Views/Exercises.js";
import Meals from "./Views/Meals.js";
import Articles from "./Views/Articles.js";
import Goal from "./Views/Form/goal.js";
import About from "./Views/About.js";
import Navbar from "./Components/Navbar.js";
import Home from "./Views/Home.js";
import Footer from './Components/Footer.js';
import { useEffect, useState } from 'react';
import axios from 'axios';



function App() {

const [userInput,setUserInput]=useState({})
console.log(userInput)

//here will be all the info from user sent to AI
//and we send reqest to AI
const [respondFromAI, setRespondFromAI]=useState(null)
console.log(respondFromAI)

console.log(respondFromAI)

const sendGroqRequest = async () => {
 
  const endpoint = 'https://api.groq.com/openai/v1/chat/completions';
  const apiKey = process.env.REACT_APP_GROQ_API; // Access API key from .env

  const payload = 
  {
    model: 'llama3-8b-8192',
    messages: [
      {
        role: 'system',
        content: `
          You are a personal trainer AI. Respond **only in JSON format**, strictly adhering to the provided JSON schema. Do not include any additional text or explanations outside the JSON object. 
  
          ### User Details:
          - Gender: ${userInput.gender}
          - Age: ${userInput.age} years
          - Current Weight: ${userInput.wieght} kg
          - Height: ${userInput.hieght} cm
          -current body fat: ${userInput.bodyfat}
          - Target Body Fat: ${userInput.targetbodyfat}
          - Goal: ${userInput.goal}
          - Food Preference: ${userInput.foodpreference}
          - Food Restriction: ${userInput.foodrestriction}
  
          ### Response Requirements:
          Create a comprehensive **weight loss program** that includes:
          1. **Training Regime**:
             - A weekly gym exercise schedule (Monday to Sunday), specifying exercises, not number of sets and reps.
          2. **Diet Plan**:
             - A daily meal plan for the week (Monday to Sunday), including:
               - Meal details
               - Total calories
               - Nutritional breakdown (protein, carbs, fat).
          3. **Shopping List**:
             - A list of required ingredients for the week, including:
               - Product names
               - Quantities
               - Estimated prices (in EUR, assuming I live in Spain).
          4. **Explanations**:
             - Reason for the calorie deficit or diet adjustments.
             - Explanation of the training program's structure.
  
          ### JSON Schema:
          Respond with the following template:
          {
            "training": [
              { "monday": "All exercises for Monday" },
              { "tuesday": "All exercises for Tuesday" },
              { "wednesday": "All exercises for Wednesday" },
              { "thursday": "All exercises for Thursday" },
              { "friday": "All exercises for Friday" },
              { "saturday": "All exercises for Saturday" },
              { "sunday": "All exercises for Sunday" }
            ],
            "diet": [
              {
                "monday": {
                  "meals": "All meals for Monday",
                  "total_calories": "0",
                  "protein": "0g",
                  "carbs": "0g",
                  "fat": "0g"
                }
              },
              {
                "tuesday": {
                  "meals": "All meals for Tuesday",
                  "total_calories": "0",
                  "protein": "0g",
                  "carbs": "0g",
                  "fat": "0g"
                }
              },
               {
                "wednesday": {
                  "meals": "All meals for Wednesday",
                  "total_calories": "0",
                  "protein": "0g",
                  "carbs": "0g",
                  "fat": "0g"
                }
              },
               {
                "thursday": {
                  "meals": "All meals for Thursday",
                  "total_calories": "0",
                  "protein": "0g",
                  "carbs": "0g",
                  "fat": "0g"
                }
              },
               {
                "friday": {
                  "meals": "All meals for Friday",
                  "total_calories": "0",
                  "protein": "0g",
                  "carbs": "0g",
                  "fat": "0g"
                }
              },
               {
                "saturday": {
                  "meals": "All meals for Saturday",
                  "total_calories": "0",
                  "protein": "0g",
                  "carbs": "0g",
                  "fat": "0g"
                }
              },
               {
                "sunday": {
                  "meals": "All meals for Sunday",
                  "total_calories": "0",
                  "protein": "0g",
                  "carbs": "0g",
                  "fat": "0g"
                }
              }
            ],
            "shopping_list": [
              { "product": "Bananas", "quantity": "3", "estimated_price_eur": "1.50" },
              { "product": "Chicken Breast", "quantity": "1.5 kg", "estimated_price_eur": "9.00" }
            ],
            "reason_for_creating_this_specific_program": "Explanation for the chosen calorie amount and fitness plan.",
            "program_explanation": "Brief explanation of the diet and training plan."
          }
  
          ### Important Notes:
          - Ensure all string values are enclosed in double quotes.
          - All quantities and prices must be realistic and match the user's location (Spain).
          - Ensure the total calorie count is suitable for ${userInput.goal} based on the user's details.
          - Format all nutritional values as strings with units (e.g., "0g").
        `
      },
      { role: 'user', content: 'Create a new training program and diet plan based on my preferences. Respond in JSON format.You must respond with valid JSON that adheres to the given schema. Avoid trailing commas, missing commas, or any other syntax errors. Verify that the JSON is valid before sending.' }
    ],
    
    max_tokens: 7000,
    temperature: 0.3
  };
  
  try {
    const res = await axios.post(endpoint, payload, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });
    localStorage.setItem('userProgram', res.data.choices[0].message.content);
    setRespondFromAI(JSON.parse(res.data.choices[0].message.content));}
    
  catch (err) {
    console.error('Error during Groq request:', err);
  } 
};

useEffect(() => {
  const userProgram = localStorage.getItem('userProgram');
  if (userProgram) {
    try {
      setRespondFromAI(JSON.parse(userProgram));
    } catch (err) {
      console.error('Error parsing stored user program:', err);
    }
  }
}, []);

  return (
    <div className="App">
      {/* Declaring the router which will hold al the routes/URLs*/}
      <Router>
      <Navbar/>
{/* We need to use the Routes wrapper */}
        <Routes>
{/* For every URL we can render a separate component */}
          <Route path="/" element={<Home />} />
          <Route path="/Exercises" element={<Exercises respondFromAI={respondFromAI} />} />
          <Route path="/Meals" element={<Meals respondFromAI={respondFromAI}/>} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/Form" element={<Goal sendGroqRequest={sendGroqRequest} userInput={userInput} setUserInput={setUserInput}/>} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

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

//here will be all the info from user sent to AI
//and we send reqest to AI
const [respondFromAI, setRespondFromAI]=useState(null)

const sendGroqRequest = async () => {
 
  const endpoint = 'https://api.groq.com/openai/v1/chat/completions';
  const apiKey = process.env.REACT_APP_GROQ_API; // Access API key from .env

  const payload = {
    model: 'llama3-8b-8192',
    messages: [
      { role: 'system', content: `Respond only in JSON format:
          Act as a personal trainer. Here are my details:
          - Gender: Male
          - Age: 30 years
          - Current weight: 75 kg
          - Height: 172 cm
          - Goal: Lose weight
          
          Create a training program and food plan to achieve my lose weight goal. Provide the following in a JSON object format:
          1. **Training Regime**:
             - Weekly exercise schedule for the gym, detailing exercises for each day (Monday to Sunday).
          2. **Diet Plan**:
             - Daily meals for the week with total calories and nutritional breakdown for each day.
          3. **Shopping List**:
             - List of required ingredients for the week with quantities and estimated prices, assuming I live in Spain.
          4. **Explanations**:
             - Reason for the adjusted calorie amount.
             - Brief explanation of the changes made to my diet and training plan.
          **JSON Template**:
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
                  "total_calories": 0,
                  "protein": "0g",
                  "carbs": "0g",
                  "fat": "0g"
                }
              },
              {
                "tuesday": {
                  "meals": "All meals for Tuesday",
                  "total_calories": 0,
                  "protein": "0g",
                  "carbs": "0g",
                  "fat": "0g"
                }
              }
            ],
            "shopping_list": [
              { "product": "Bananas", "quantity": 3, "estimated_price_eur": 1.50 },
              { "product": "Chicken Breast", "quantity": "1.5 kg", "estimated_price_eur": 9.00 }
            ],
            "reason_for_creating_this_specific_program": "Explanation for the chosen calorie amount and fitness plan.",
            "program_explanation": "Brief explanation of the diet and training plan."
          }` },
      { role: 'user', content: 'Create a new training program and diet plan based on my preferences. Respond in JSON format.'  },
    ],
    max_tokens: 6000,
    temperature: 0.3,
  };

  try {
    const res = await axios.post(endpoint, payload, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    setRespondFromAI(JSON.parse(res.data.choices[0].message.content));
  } catch (err) {
    console.error('Error during Groq request:', err);
  } 
};

useEffect(() => {
sendGroqRequest();
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
          <Route path="/Exercises" element={<Exercises />} />
          <Route path="/Meals" element={<Meals />} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/Form" element={<Goal userInput={userInput} setUserInput={setUserInput}/>} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

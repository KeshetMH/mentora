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
import { useState } from 'react';



function App() {

const [userInput,setUserInput]=useState({})
console.log(userInput)
//here will be all the info from user sent to AI
//and we send reqest to AI
const [respondFromAI, setRespondFromAI]=useState({})


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

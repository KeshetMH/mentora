import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Exercises from "./Views/Exercises.js";
import Meals from "./Views/Meals.js";
import Articles from "./Views/Articles.js";
import Goal from "./Views/personal_plan/goal.js";
import About from "./Views/About.js";
import Navbar from "./Components/Navbar.js";


function App() {
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
          <Route path="/Form" element={<Form />} />
          <Route path="/Form/goal" element={<Goal />} />
          <Route path="/Form/profile" element={<Goal />} />
          <Route path="/Form/bf-current" element={<Goal />} />
          <Route path="/Form/bf-target" element={<Goal />} />
          <Route path="/Form/nutrition" element={<Goal />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

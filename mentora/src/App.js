import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Views/Home.js";
import Exercises from "./Views/Exercises.js";
import Meals from "./Views/Meals.js";
import Wall_of_honor from "./Views/Wall_of_honor.js";
import Articles from "./Views/Articles.js";
import Start from "./Views/Start.js";
import About from "./Views/About.js";
import Navbar from "./Components/Navbar.js";


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Declaring the router which will hold al the routes/URLs*/}
      <Router>
{/* We need to use the Routes wrapper */}
        <Routes>
{/* For every URL we can render a separate component */}
          <Route path="/" element={<Home />} />
          <Route path="/Exercises.js" element={<Exercises />} />
          <Route path="/Meals.js" element={<Meals />} />
          <Route path="/Wall_of_honor.js" element={<Wall_of_honor />} />
          <Route path="/Articles.js" element={<Articles />} />
          <Route path="/Start.js" element={<Start />} />
          <Route path="/About.js" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Exercises from "./Views/exercises.js";
import Meals from "./Views/meals.js";
import Articles from "./Views/articles.js";
import Start from "./Views/start.js";
import About from "./Views/about.js";
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
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/form" element={<Form />} />
          <Route path="/form/goal" element={<Goal />} />
          <Route path="/form/profile" element={<Goal />} />
          <Route path="/form/bf-current" element={<Goal />} />
          <Route path="/form/bf-target" element={<Goal />} />
          <Route path="/form/nutrition" element={<Goal />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

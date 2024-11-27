import React from "react";
// We need to import the NavLink component from the router
import { NavLink } from "react-router-dom";
import logoImage from "../images/logoImage.png";

const Navbar = () => <div className="navbar">
{/* For every NavLink element we can specify the URL and the label */}
      <NavLink 
// This would be the URL
        to={"/"}>

        <img className="logo" src={logoImage}/> 
      </NavLink>

      <div className="nav_link">


      <NavLink
        to={"/exercises"}>
        Exercises
      </NavLink>

      <NavLink
        to={"/meals"}>
        Meals
      </NavLink>

      <NavLink
        to={"/articles"}>
        Articles
      </NavLink>


      <NavLink
        to={"/about"}>
        About
      </NavLink>

      <button>start</button>

      </div>

      
    </div>
export default Navbar;


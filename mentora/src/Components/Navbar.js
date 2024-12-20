import React from "react";
// We need to import the NavLink component from the router
import { NavLink } from "react-router-dom";
import logoImage from "../images/logoImage.png";

const Navbar = () => <div className="navbar">
    {/*this conected and create link between the componenet Navbar to every url*/}
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
          to={"/about"}>
          About
        </NavLink>

        <NavLink
          to={"/form"}>
          <button>start</button>
        </NavLink>
      </div>
    </div>
export default Navbar;


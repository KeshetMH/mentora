import React from "react";
// We need to import the NavLink component from the router
import { NavLink } from "react-router-dom";

const Navbar = () => <div>
{/* For every NavLink element we can specify the URL and the label */}
      <NavLink 
// This would be the URL
        to={"/"}>
{/* This would be the label */}
        MENTORA {/* IMAGE */}
      </NavLink>

      <NavLink
        to={"/About"}>
        About
      </NavLink>

      <NavLink
        to={"/Exercises"}>
        Exercises
      </NavLink>

      <NavLink
        to={"/Meals"}>
        Meals
      </NavLink>

      <NavLink
        to={"/Wall_of_honor"}>
        Wall of honor
      </NavLink>

      <NavLink
        to={"/Articles"}>
        Articles
      </NavLink>

      <div className="start_bottum">

      <NavLink
        to={"/Start"}>
        Start
      </NavLink>

      </div>
    </div>
export default Navbar;


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
        to={"/about"}>
        About
      </NavLink>

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

      <div className="start_bottum">

    

      </div>
    </div>
export default Navbar;


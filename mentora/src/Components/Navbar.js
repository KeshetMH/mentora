import React from "react";
// We need to import the NavLink component from the router
import { NavLink } from "react-router-dom";

const Navbar = () => <div style={styles.navStyles}>
{/* For every NavLink element we can specify the URL and the label */}
      <NavLink style={({isActive}) => (isActive ? styles.active : styles.default)}
// This would be the URL
        to={"/"}>
{/* This would be the label */}
        Home
      </NavLink>

      <NavLink
        style={({isActive}) => (isActive ? styles.active : styles.default)}
        to={"/about"}>
        About
      </NavLink>

      <NavLink
        style={({isActive}) => (isActive ? styles.active : styles.default)}
        to={"/exercises"}>
        Exercises
      </NavLink>

      <NavLink
        style={({isActive}) => (isActive ? styles.active : styles.default)}
        to={"/meals"}>
        Meals
      </NavLink>

      <NavLink
        style={({isActive}) => (isActive ? styles.active : styles.default)}
        to={"/storysharing"}>
        Wall of honor
      </NavLink>

      <NavLink
        style={({isActive}) => (isActive ? styles.active : styles.default)}
        to={"/articles"}>
        Articles
      </NavLink>

      <NavLink
        style={({isActive}) => (isActive ? styles.active : styles.default)}
        to={"/fillform"}>
        Start
      </NavLink>
    </div>
export default Navbar;

const styles = {
  navStyles: {
    display: "flex",
    height: 60,
    alignItems: "center",
    justifyContent: "space-around"
  },
  active: {
    color: "red"
  },
  default: {
    textDecoration: "none",
    color: "black"
  }
};
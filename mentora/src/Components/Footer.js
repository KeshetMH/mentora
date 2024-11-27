import React from "react";
import { NavLink } from "react-router-dom";
import logoImage from "../images/logoImage.png";
import Exercises from "../Views/Exercises";
import Articles from "../Views/Articles";
import About from "../Views/About";
import Meals from "../Views/Meals";
import email_logo from "../images/email_logo.png"
import linkedin_logo from "../images/linkedin_logo.png"

const Footer = () => {
    return(
    <div className="footer">

    <div className="footer_Link">
        <img className="logo" src={logoImage}/>

        <div className="footer_pages">
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
        </div>

        <div className="footer_contact">
        <a  href="page.html"><img id="logo_footer" src={linkedin_logo}/></a>
        <a href="page.html"><img id="logo_footer" src={email_logo}/></a>
        </div>
    </div>

    <hr className="footer_line"/>

    <div className="fotter_notes">
        <p>© 2024. All rigts reserved.</p>
        <p>*Users are advised to consult with a healthcare professional or fitness expert before starting any workout plan provided by this website.*</p>
    </div>

    </div>

        
        
    )
}

export default Footer;
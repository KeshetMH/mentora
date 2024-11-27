import React from "react";
import { NavLink } from "react-router-dom";
import splashImage from "../images/main3.jpg";

const Home = () => {

    return <div className="Home">
           <img className="splashImage" src={splashImage}/>

            <button>start your workout plans</button>

           </div>

    

}

export default Home;
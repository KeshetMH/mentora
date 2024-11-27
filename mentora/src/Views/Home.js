import React from "react";
import { NavLink } from "react-router-dom";
import splashImage from "../images/main2.jpeg";

const Home = () => {

    return <div>
           <img className="splashImage" src={splashImage}/>

            <button>start your workout plans</button>

           </div>

    

}

export default Home;
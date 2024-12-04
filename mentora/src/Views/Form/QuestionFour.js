import React from 'react';
import american from "../../images/american.png";
import chinese from "../../images/chinese.png";
import eastern_european from "../../images/eastern_european.png";
import greek from "../../images/greek.png";
import indian from "../../images/indian.png";
import italian from "../../images/italian.png";
import japanese from "../../images/japanese.png";
import mediterranean from "../../images/mediterranean.png";
import mexican from "../../images/mexican.png";
import thai from "../../images/thai.png";
import { NavLink } from "react-router-dom";

const QuestionFour = ({onClick, handleOfChange}) =>  {

    return <div>
        <div>
            <p id="question_p">Do you have food restriction?</p>
            <input className="input" onChange={(e)=>handleOfChange(e)} type='text' name='foodrestriction' placeholder='lactose, gluten, nuts...'/>

        </div>

            <p id="question_p">What's your type of food?</p>

        <div className="foodpreference">

            <div className="container" onClick={()=>onClick({foodpreference:"Italian"})}>
                <img src={italian}/>
                <p>Italian</p> 
            </div>

            <div className="container" onClick={()=>onClick({foodpreference:"Japanese"})}>
                <img src={japanese}/>
                <p>Japanese</p>
            </div>

            <div className="container" onClick={()=>onClick({foodpreference:"Mexican"})}>
                <img src={mexican}/>
                <p>Mexican</p>
            </div>

            <div className="container" onClick={()=>onClick({foodpreference:"Mediterranean"})}>
                <img src={mediterranean}/>
                <p>Mediterranean</p>
            </div>

            <div className="container" onClick={()=>onClick({foodpreference:"Indian"})}>
                <img src={indian}/>
                <p>Indian</p>
            </div>

            <div className="container" onClick={()=>onClick({foodpreference:"Thai"})}>
                <img src={thai}/>
                <p>Thai</p>
            </div>

            <div className="container" onClick={()=>onClick({foodpreference:"Greek"})}>
                <img src={greek}/>
                <p>Greek</p>
            </div>

            <div className="container" onClick={()=>onClick({foodpreference:"Chinese"})}>
                <img src={chinese}/>
                <p>Chinese</p>
            </div>

            <div className="container" onClick={()=>onClick({foodpreference:"American"})}>
                <img src={american}/>
                <p>American</p>
            </div>

            <div className="container" onClick={()=>onClick({foodpreference:"Eastern European"})}>
                <img src={eastern_european}/>
                <p>Eastern European</p>
            </div>
        </div>

        <NavLink
        to={"/"}>
        <button onClick={()=>onClick('questionFour')}>NEXT</button>
      </NavLink>
               
           </div>
}

export default QuestionFour;
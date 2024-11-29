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


const QuestionFour = ({onClick}) =>  {

    return <div>
        <div>
            <p>Do you have food restriction?</p>
            <input></input>

        </div>

            <p>What's your type of food?</p>

        <div className="foodpreference">

            <div onClick={()=>onClick({foodpreference:"Italian"})}>
                <img src={italian}/>
                <button>Italian</button> 
            </div>

            <div onClick={()=>onClick({foodpreference:"Japanese"})}>
                <img src={japanese}/>
                <button>Japanese</button>
            </div>

            <div onClick={()=>onClick({foodpreference:"Mexican"})}>
                <img src={mexican}/>
                <button>Mexican</button>
            </div>

            <div onClick={()=>onClick({foodpreference:"Mediterranean"})}>
                <img src={mediterranean}/>
                <button>Mediterranean</button>
            </div>

            <div onClick={()=>onClick({foodpreference:"Indian"})}>
                <img src={indian}/>
                <button>Indian</button>
            </div>

            <div onClick={()=>onClick({foodpreference:"Thai"})}>
                <img src={thai}/>
                <button>Thai</button>
            </div>

            <div onClick={()=>onClick({foodpreference:"Greek"})}>
                <img src={greek}/>
                <button>Greek</button>
            </div>

            <div onClick={()=>onClick({foodpreference:"Chinese"})}>
                <img src={chinese}/>
                <button>Chinese</button>
            </div>

            <div onClick={()=>onClick({foodpreference:"American"})}>
                <img src={american}/>
                <button>American</button>
            </div>

            <div onClick={()=>onClick({foodpreference:"Eastern European"})}>
                <img src={eastern_european}/>
                <button>Eastern European</button>
            </div>
        </div>

                <button>NEXT</button>
               
           </div>

}

export default QuestionFour;
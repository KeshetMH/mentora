import React from "react";
import QuestionZero from "./QuestionZero";
import QuestionOne from "./QuestionOne";
import QuestionTwoWomen from "./QuestionTwoWomen";
import QuestionThreeWomen from "./QuestionThreeWomen ";
import QuestionFour from "./QuestionFour";
import { useState } from "react";
import QuestionTwoMan from "./QuestionTwoMan";
import QuestionThreeMan from "./QuestionThreeMan";
import number1 from "../../images/number1.png";
import number2 from "../../images/number2.png";
import number3 from "../../images/number3.png";
import number4 from "../../images/number4.png";
import number5 from "../../images/number5.png";


const Start = ({userInput, setUserInput}) => {

    const onClick = (data) => {
        setUserInput((prevInput) => ({
            ...prevInput,
            ...data
        }));
    };


    return <div className="section">

                <div>
                    <p>This 5 steps form collects key information to create a personalized workout plan</p>
                    <div className="userInputProgress">
                        <div>
                            <img src={number1}/>
                            <p>Goal</p>
                        </div>

                        <div>
                            <img src={number2}/> 
                            <p>About you</p>
                        </div>

                        <div>
                            <img src={number3}/>
                            <p>Current state</p>
                        </div>

                        <div>
                            <img src={number4}/>
                            <p>Trget</p>
                        </div>

                        <div>
                            <img src={number5}/>
                            <p>nutrition</p>
                        </div>
                    </div>
                </div>

            <QuestionZero onClick={onClick}/>
            <QuestionOne onClick={onClick}/>
            <QuestionTwoWomen onClick={onClick}/>
            <QuestionTwoMan onClick={onClick}/>
            <QuestionThreeWomen onClick={onClick}/>
            <QuestionThreeMan onClick={onClick}/>
            <QuestionFour onClick={onClick}/>

           </div>

}

export default Start;
import React from "react";
import QuestionZero from "./QuestionZero";
import QuestionOne from "./QuestionOne";
import QuestionTwoWomen from "./QuestionTwoWomen";
import QuestionThreeWomen from "./QuestionThreeWomen ";
import QuestionFour from "./QuestionFour";
import { useState } from "react";
import QuestionTwoMan from "./QuestionTwoMan";
import QuestionThreeMan from "./QuestionThreeMan";

const Start = ({userInput, setUserInput}) => {



    return <div className="section">

                <div>
                    <p>This 5 steps form collects key information to create a personalized workout plan</p>
                    <div className="userInputProgress">
                        <div>
                            <img src="icon of number"/>
                            <p>Goal</p>
                        </div>

                        <div>
                            <img src="icon of number"/> 
                            <p>About you</p>
                        </div>

                        <div>
                            <img src="icon of number"/>
                            <p>Current state</p>
                        </div>

                        <div>
                            <img src="icon of number"/>
                            <p>Trget</p>
                        </div>

                        <div>
                            <img src="icon of number"/>
                            <p>nutrition</p>
                        </div>
                    </div>
                </div>

            <QuestionZero />
            <QuestionOne />
            <QuestionTwoWomen />
            <QuestionTwoMan />
            <QuestionThreeWomen />
            <QuestionThreeMan />
            <QuestionFour />

           </div>

}

export default Start;
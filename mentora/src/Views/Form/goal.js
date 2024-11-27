import React from "react";
import Question_Zero from "./Question_Zero";
import Question_One from "./Question_One";
import Question_Two from "./Question_Two";
import Question_Three from "./Question_Three";
import Question_Four from "./Question_Four";
import { useState } from "react";

const Start = ({userInput, setUserInput}) => {

    const [progrees,setProgress]=useState[0]

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

            <Question_Zero />
            <Question_One />
            <Question_Two />
            <Question_Three />
            <Question_Four />

           </div>

}

export default Start;
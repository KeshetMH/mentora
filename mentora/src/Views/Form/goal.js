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

const Start = ({ sendGroqRequest,userInput, setUserInput }) => {
  const [progress, setProgress] = useState(0);

  const handleOfChange = (e) => {
    
    setUserInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  const onClick = (data) => {

    if (data.gender || data.foodpreference ) {
      setUserInput((prevInput) => ({
        ...prevInput,
        ...data,
      }));
    }

    else if (data!== 'questionOne' && data!== 'questionFour') {
      setUserInput((prevInput) => ({
        ...prevInput,
        ...data,
      }));

      setProgress((prevProgress) => prevProgress + 1);
    }

    if (data == 'questionOne'){
        if(userInput.gender&&userInput.age&&userInput.hieght&&userInput.wieght&&userInput.goal){
            setProgress((prevProgress) => prevProgress + 1);
        }
        else{alert('please fill all the fields')}

    }
    if(data =='questionFour'){
        if(userInput.foodpreference){
            if(userInput.goal&&userInput.gender&&userInput.age&&userInput.hieght&&userInput.wieght&&userInput.currentbodyfat&&userInput.targetbodyfat&&userInput.foodpreference){
                sendGroqRequest()}
        }
        else{alert('please select a food preference')}
    }

  };



  return (
    <div className="section">
      <div>
        <p>
          This 5 steps form collects key information to create a personalized
          workout plan
        </p>
        <div className="userInputProgress">
          <div
            className={progress == 0 ? "activeProgress" : "inactiveProgress"}
          >
            <img src={number1} />
            <p>Goal</p>
          </div>

          <div
            className={progress == 1 ? "activeProgress" : "inactiveProgress"}
          >
            <img src={number2} />
            <p>About you</p>
          </div>

          <div
            className={progress == 2 ? "activeProgress" : "inactiveProgress"}
          >
            <img src={number3} />
            <p>Current state</p>
          </div>

          <div
            className={progress == 3 ? "activeProgress" : "inactiveProgress"}
          >
            <img src={number4} />
            <p>Trget</p>
          </div>

          <div
            className={progress == 4 ? "activeProgress" : "inactiveProgress"}
          >
            <img src={number5} />
            <p>nutrition</p>
          </div>
        </div>
      </div>

      {progress == 0 && <QuestionZero onClick={onClick} />}
      {progress == 1 && (
        <QuestionOne userInput={userInput} handleOfChange={handleOfChange} onClick={onClick} />
      )}
      {progress == 2 && userInput.gender == "female" && (
        <QuestionTwoWomen onClick={onClick} />
      )}
      {progress == 2 && userInput.gender == "male" && (
        <QuestionTwoMan onClick={onClick} />
      )}
      {progress == 3 && userInput.gender == "female" && (
        <QuestionThreeWomen onClick={onClick} />
      )}
      {progress == 3 && userInput.gender == "male" && (
        <QuestionThreeMan onClick={onClick} />
      )}
      {progress == 4 && <QuestionFour onClick={onClick} handleOfChange={handleOfChange} />}
    </div>
  );
};

export default Start;
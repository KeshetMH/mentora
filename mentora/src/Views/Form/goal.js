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
  //this render progress of user through the questionery about the upper numbers and th flow

  const handleOfChange = (e) => {
    setUserInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };
  //render cange in input. ...prevInut(comes as an argument)=spreading keeps the info that was presed
  //as the qustion are prograss and adding the editional info. name=give name so to be the key of the value

  const onClick = (data) => {
    if (data.gender || data.foodpreference) {
      setUserInput((prevInput) => ({
        ...prevInput,
        ...data,
      }));
    }
    //if user clicked on any of this button he will not automatically move to the next question but it will update the state
    else if (data !== 'questionOne' && data !== 'questionFour') {
      setUserInput((prevInput) => ({
        ...prevInput,
        ...data,
      }));
      setProgress((prevProgress) => prevProgress + 1);
    }
    //this cheak if user didn't answer quiestions one and four, if its true then add data to the state and countinue to the next question
    if (data == 'questionOne'){
        if(userInput.gender&&userInput.age&&userInput.hieght&&userInput.wieght&&userInput.goal){
            setProgress((prevProgress) => prevProgress + 1);
        }
        //if all the info from question one is there then progress +1
        else{alert('please fill all the fields')}
    }
    if(data =='questionFour'){
        if(userInput.foodpreference){
            if(userInput.goal&&userInput.gender&&userInput.age&&userInput.hieght&&userInput.wieght&&userInput.currentbodyfat&&userInput.targetbodyfat&&userInput.foodpreference){
                sendGroqRequest()}
          //this cheaks at the last question if user put all info, if yes send request to AI
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
      {/*this div represent the progress of the questioneir with numbers on the top page
      it cheaks if the user is on spesific question on a given moment by cheaking the state
      and then by that chose the wihich styles of the css to use*/}

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
      {progress == 4 && <QuestionFour onClick={onClick} handleOfChange={handleOfChange} userInput={userInput}/>}
    </div>
    //this div renders the flow of the different questions base on prograss state
  );
};

export default Start;
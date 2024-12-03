import React from 'react';
import build_muscle from "../../images/build_muscle.png";
import loss_weight from "../../images/loss_weight.png";
import get_fitter from "../../images/get_fitter.png";


const QuestionZero = ({onClick}) =>  {

return(
<div>

    <p id="question_p">what's you main goals?</p>

    <div className="question_one">

        <div className="container" onClick={()=>onClick({goal:'LoseWeight'})}>
            <img src={loss_weight}/>
            <p>Lose weight</p>
            <p>burning fat and getting tinner</p>
        </div>

        <div className="container" onClick={()=>onClick({goal:'GetFitter'})}>
            <img src={get_fitter}/>
            <p>Get fitter</p>
            <p>bulding clean budy mass</p>
        </div>

        <div className="container" onClick={()=>onClick({goal:'BuildMuscle'})}>
            <img src={build_muscle}/>
            <p>Build mucsle</p>
            <p>building body mass and strength</p>
        </div>
    </div>

</div>

)}

export default QuestionZero;
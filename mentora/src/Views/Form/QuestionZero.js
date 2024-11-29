import React from 'react';


const QuestionZero = ({onClick}) =>  {


return(

<div>

    <p>what's you main goals?</p>

    <div className="question_one">

        <div onClick={()=>onClick({goal:'LoseWeight'})}>
            <img src="symbol"/>
            <p>Lose weight</p>
            <p>burning fat and getting tinner</p>
        </div>

        <div onClick={()=>onClick({goal:'GetFitter'})}>
            <img src="symbol"/>
            <p>Get fitter</p>
            <p>bulding clean budy mass</p>
        </div>

        <div onClick={()=>onClick({goal:'BuildMuscle'})}>
            <img src="symbol"/>
            <p>Build mucle</p>
            <p>building body mass and strength</p>
        </div>
    </div>

</div>

)}

export default QuestionZero;
import React from 'react';
import fat7_12 from "../../images/fat7_12.jpg";
import fat12_17 from "../../images/fat12_17.jpg";
import fat17_22 from "../../images/fat17_22.jpg";
import fat22_27 from "../../images/fat22_27.jpg";
import fat27_32 from "../../images/fat27_32.jpg";
import fat32_42 from "../../images/fat32_42.jpg";
import fat42_47 from "../../images/fat42_47.jpg";
import fat47_52 from "../../images/fat47_52.jpg";


const QuestionTwoWomen = ({onClick}) =>  {

    return <div>
            
            <p id="question_p">What image represents your current figure?</p>

            <div className="body_fat_photos">

            <div className="container" onClick={()=>onClick({currentbodyfat:'7-12%'})}>
                <img src={fat7_12}/>
                <p>Body fat</p>
                <p>7-12%</p>
            </div>

            <div className="container" onClick={()=>onClick({currentbodyfat:'12-17%'})}>
                <img src={fat12_17}/>  
                <p>Body fat</p>
                <p>12-17%</p>
            </div>

            <div className="container" onClick={()=>onClick({currentbodyfat:'17-22%'})}>
                <img src={fat17_22}/>
                <p>Body fat</p>
                <p>17-22%</p>
            </div>

            <div className="container" onClick={()=>onClick({currentbodyfat:'22-27%'})}>
                <img src={fat22_27}/>  
                <p>Body fat</p>
                <p>22-27%</p>
            </div>

            <div className="container" onClick={()=>onClick({currentbodyfat:'27-32%'})}>
                <img src={fat27_32}/>
                <p>Body fat</p>
                <p>27-32%</p>
            </div>

            <div className="container" onClick={()=>onClick({currentbodyfat:'32-42%'})}>
                <img src={fat32_42}/>
                <p>Body fat</p>
                <p>32-42%</p>
            </div>

            <div className="container" onClick={()=>onClick({currentbodyfat:'42-47%'})}>
                <img src={fat42_47}/>
                <p>Body fat</p>
                <p>42-47%</p>
            </div>

            <div className="container" onClick={()=>onClick({currentbodyfat:'47-52%'})}>
                <img src={fat47_52}/>
                <p>Body fat</p>
                <p>47-52%</p>
            </div>

            </div>

           </div>

}

export default QuestionTwoWomen;
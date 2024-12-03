import React from 'react';
import fat4_9 from "../../images/fat4_9.jpg";
import fat9_14 from "../../images/fat9_14.jpg";
import fat14_19 from "../../images/fat14_19.jpg";
import fat19_24 from "../../images/fat19_24.jpg";
import fat24_29 from "../../images/fat24_29.jpg";
import fat29_34 from "../../images/fat29_34.jpg";
import fat34_39 from "../../images/fat34_39.jpg";
import fat39_44 from "../../images/fat39_44.jpg";


const QuestionTwoMan = ({onClick}) =>  {

    return <div>
            
            <p id="question_p">What image represents your current figure?</p>

            <div className="body_fat_photos">

            <div className="container" onClick={()=>onClick({currentbodyfat:'4-9%'})}>
                <img src={fat4_9}/>
                <p>Body fat</p>
                <p>4-9%</p>
            </div>

            <div className="container" onClick={()=>onClick({currentbodyfat:'9-14%'})}>
                <img src={fat9_14}/>
                <p>Body fat</p>
                <p>9-14%</p>
            </div>

            <div className="container" onClick={()=>onClick({currentbodyfat:'14-19%'})}>
                <img src={fat14_19}/>  
                <p>Body fat</p>
                <p>14-19%</p>
            </div>

            <div className="container" onClick={()=>onClick({currentbodyfat:'19-24%'})}>
                <img src={fat19_24}/>
                <p>Body fat</p>
                <p>19-24%</p>
            </div>

            <div className="container" onClick={()=>onClick({currentbodyfat:'24-29%'})}>
                <img src={fat24_29}/>  
                <p>Body fat</p>
                <p>24-29%</p>
            </div>

            <div className="container" onClick={()=>onClick({currentbodyfat:'29-34%'})}>
                <img src={fat29_34}/>
                <p>Body fat</p>
                <p>29-34%</p>
            </div>

            <div className="container" onClick={()=>onClick({currentbodyfat:'34-39%'})}>
                <img src={fat34_39}/>
                <p>Body fat</p>
                <p>34-39%</p>
            </div>

            <div className="container" onClick={()=>onClick({currentbodyfat:'39-44%'})}>
                <img src={fat39_44}/>
                <p>Body fat</p>
                <p>39-44%</p>
            </div>

            </div>


           </div>

}

export default QuestionTwoMan;
import React from 'react'
import fat7_12 from "../../images/fat7_12.jpg";
import fat12_17 from "../../images/fat12_17.jpg";
import fat20_25 from "../../images/fat20_25.jpg";
import fat25_31 from "../../images/fat25_31.jpg";
import fat31_36 from "../../images/fat31_36.jpg";
import fat36_41 from "../../images/fat36_41.jpg";
import fat47_52 from "../../images/fat47_52.jpg";

const QuestionThreeWomen = ({onClick}) =>  {

    return <div>
            
            <p>What image represents your target figure?</p>

            <div onClick={()=>onClick({bodyfat:'7-12%'})}>
                <img src={fat7_12}/>
                <p>Body fat</p>
                <p>7-12%</p>
            </div>

            <div onClick={()=>onClick({bodyfat:'12-17%'})}>
                <img src={fat12_17}/>  
                <p>Body fat</p>
                <p>12-17%</p>
            </div>

            <div onClick={()=>onClick({bodyfat:'17-22%'})}>
                <img src={fat20_25}/>
                <p>Body fat</p>
                <p>17-22%</p>
            </div>

            <div onClick={()=>onClick({bodyfat:'22-27%'})}>
                <img src={fat25_31}/>  
                <p>Body fat</p>
                <p>22-27%</p>
            </div>

            <div onClick={()=>onClick({bodyfat:'27-32%'})}>
                <img src={fat31_36}/>
                <p>Body fat</p>
                <p>27-32%</p>
            </div>

            <div onClick={()=>onClick({bodyfat:'32-42%'})}>
                <img src={fat36_41}/>
                <p>Body fat</p>
                <p>32-42%</p>
            </div>

            <div onClick={()=>onClick({bodyfat:'42-47%'})}>
                <img src={fat41_47}/>
                <p>Body fat</p>
                <p>42-47%</p>
            </div>

            <div onClick={()=>onClick({bodyfat:'47-52%'})}>
                <img src={fat47_52}/>
                <p>Body fat</p>
                <p>47-52%</p>
            </div>

            <button>NEXT</button>

           </div>

}

export default QuestionThreeWomen;
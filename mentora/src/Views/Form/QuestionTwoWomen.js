import React from 'react'


const QuestionTwoWomen = ({onClick}) =>  {

    return <div>
            
            <p>What image represents your current figure?</p>

            <div onClick={()=>onClick({bodyfat:'7-12%'})}>
                <img src="image of body"/>
                <p>Body fat</p>
                <p>7-13%</p>
            </div>

            <div onClick={()=>onClick({bodyfat:'12-17%'})}>
                <img src="image of body"/>  
                <p>Body fat</p>
                <p>13-20%</p>
            </div>

            <div onClick={()=>onClick({bodyfat:'17-22%'})}>
                <img src="image of body"/>
                <p>Body fat</p>
                <p>20-25%</p>
            </div>

            <div onClick={()=>onClick({bodyfat:'22-27%'})}>
                <img src="image of body"/>  
                <p>Body fat</p>
                <p>25-31%</p>
            </div>

            <div onClick={()=>onClick({bodyfat:'27-32%'})}>
                <img src="image of body"/>
                <p>Body fat</p>
                <p>31-36%</p>
            </div>

            <div onClick={()=>onClick({bodyfat:'32-42%'})}>
                <img src="image of body"/>
                <p>Body fat</p>
                <p>36-41%</p>
            </div>

            <div onClick={()=>onClick({bodyfat:'42-47%'})}>
                <img src="image of body"/>
                <p>Body fat</p>
                <p>41-47%</p>
            </div>

            <div onClick={()=>onClick({bodyfat:'47-52%'})}>
                <img src="image of body"/>
                <p>Body fat</p>
                <p>47-52%</p>
            </div>

            <button>NEXT</button>

           </div>

}

export default QuestionTwoWomen;
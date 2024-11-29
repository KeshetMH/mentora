import React from 'react'


const QuestionTwoMan = ({onClick}) =>  {

    return <div>
            
            <p>What image represents your current figure?</p>

            <div onClick={()=>onClick({bodyfat:'4-9%'})}>
                <img src="image of body"/>
                <p>Body fat</p>
                <p>4-9%</p>
            </div>

            <div onClick={()=>onClick({bodyfat:'9-14%'})}>
                <img src="image of body"/>
                <p>Body fat</p>
                <p>9-14%</p>
            </div>

            <div onClick={()=>onClick({bodyfat:'14-19%'})}>
                <img src="image of body"/>  
                <p>Body fat</p>
                <p>14-19%</p>
            </div>

            <div onClick={()=>onClick({bodyfat:'19-24%'})}>
                <img src="image of body"/>
                <p>Body fat</p>
                <p>19-24%</p>
            </div>

            <div onClick={()=>onClick({bodyfat:'24-29%'})}>
                <img src="image of body"/>  
                <p>Body fat</p>
                <p>24-29%</p>
            </div>

            <div onClick={()=>onClick({bodyfat:'29-34%'})}>
                <img src="image of body"/>
                <p>Body fat</p>
                <p>29-34%</p>
            </div>

            <div onClick={()=>onClick({bodyfat:'34-39%'})}>
                <img src="image of body"/>
                <p>Body fat</p>
                <p>34-39%</p>
            </div>

            <div onClick={()=>onClick({bodyfat:'39-44%'})}>
                <img src="image of body"/>
                <p>Body fat</p>
                <p>39-44%</p>
            </div>

            

            <button>NEXT</button>

           </div>

}

export default QuestionTwoMan;
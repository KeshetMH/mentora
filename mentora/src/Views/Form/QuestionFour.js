import React from 'react'


const QuestionFour = ({onClick}) =>  {

    return <div>
        <div>
            <p>Do you have food restriction?</p>
            <input></input>
        </div>

            <p>What's your type of food?</p>

            <div onClick={()=>onClick({foodpreference:"Italian"})}>
                <img src="symbol"/>
                <button>Italian</button> 
            </div>

            <div onClick={()=>onClick({foodpreference:"Japanese"})}>
                <img src="symbol"/>
                <button>Japanese</button>
            </div>

            <div onClick={()=>onClick({foodpreference:"Mexican"})}>
                <img src="symbol"/>
                <button placeholder="Mexican"/>
            </div>

            <div onClick={()=>onClick({foodpreference:"Mediterranean"})}>
                <img src="symbol"/>
                <button placeholder="Mediterranean"/>
            </div>

            <div onClick={()=>onClick({foodpreference:"Indian"})}>
                <img src="symbol"/>
                <button placeholder="Indian"/>
            </div>

            <div onClick={()=>onClick({foodpreference:"Thai"})}>
                <img src="symbol"/>
                <button placeholder="Thai"/>
            </div>

            <div onClick={()=>onClick({foodpreference:"Greek"})}>
                <img src="symbol"/>
                <button placeholder="Greek"/>
            </div>

            <div onClick={()=>onClick({foodpreference:"Chinese"})}>
                <img src="symbol"/>
                <button placeholder="Chinese"/>
            </div>

            <div onClick={()=>onClick({foodpreference:"American"})}>
                <img src="symbol"/>
                <button placeholder="American"/>
            </div>

            <div onClick={()=>onClick({foodpreference:"Eastern European"})}>
                <img src="symbol"/>
                <button placeholder="Eastern European"/>
            </div>

                <button>NEXT</button>
               
           </div>

}

export default QuestionFour;
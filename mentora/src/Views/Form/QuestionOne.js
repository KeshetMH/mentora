
import React from 'react';
import male from "../../images/male.png";
import female from "../../images/female.png";



const QuestionOne = ({userInput, onClick, handleOfChange}) =>  {

    return <div>
                <div>
                    <p id="question_p">Some questions about you...</p>

                    <div className="gender_icon">
                        <div className={userInput.gender == "male"?"container active_selection":"container"} onClick={()=>onClick({gender:'male'})}>
                            <img src={male}/>
                            <p>Male</p>
                        </div>

                        <div className={userInput.gender == "female"?"container active_selection":"container"} name ="gender" onClick={()=>onClick({gender:'female'})}>
                            <img src={female}/>
                            <p>Female</p>
                        </div>
                    </div>

                    <div>
                         <input className="input" name='age' min="16" max="90" type='number' onChange={(e)=>handleOfChange(e)} placeholder="Age"/>
                    </div>

                    <div>
                         <input className="input" name='hieght' min="300" max="140" type='number' onChange={(e)=>handleOfChange(e)} placeholder="Hieght"/>
                    </div>

                    <div>
                         <input  className="input" name='wieght' min="20" max="300" type='number' onChange={(e)=>handleOfChange(e)} placeholder="wieght"/>
                    </div>

                    <button onClick={()=>onClick('questionOne')}>NEXT</button>

                </div>

           </div>

}

export default QuestionOne;
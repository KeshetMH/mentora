import React from 'react';
import male from "../../images/male.png";
import female from "../../images/female.png";



const QuestionOne = ({onClick, handleOfChange}) =>  {

    return <div>
                <div>
                    <p>Some questions about you...</p>

                    <div className="gender_icon">
                        <div onClick={()=>onClick({gender:'male'})}>
                            <img src={male}/>
                            <p>Male</p>
                        </div>

                        <div onClick={()=>onClick({gender:'female'})}>
                            <img src={female}/>
                            <p>Female</p>
                        </div>
                    </div>

                    <div>
                        <p>Age</p>
                         <input name='age' type='number' onChange={(e)=>handleOfChange(e)} plceholder="type your age"/>
                    </div>

                    <div>
                        <p>hieght</p>
                         <input name='hieght' type='number' onChange={(e)=>handleOfChange(e)} plceholder="type your hieght"/>
                         <button>change unit to CM</button>
                         <button>change unit to FT</button>
                    </div>

                    <div>
                        <p>wieght</p>
                         <input name='wieght' type='number' onChange={(e)=>handleOfChange(e)} plceholder="type your wieght"/>
                         <button>change unit to KG</button>
                         <button>change unit to LBS</button>
                    </div>

                    <button>NEXT</button>

                </div>

           </div>

}

export default QuestionOne;
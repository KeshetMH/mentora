import React from 'react'


const QuestionOne = (props) =>  {

    return <div>
                <div>
                    <p>Some questions about you...</p>
                    <div>
                        <div>
                            <symbol></symbol>
                            <p>Male</p>
                        </div>

                        <div>
                            <img />
                            <p>Female</p>
                        </div>
                    </div>

                    <div>
                        <p>Age</p>
                         <input plcehilder="this where user put their hieght"/>
                         <button>increse age</button>
                         <button>decrese age</button>
                    </div>

                    <div>
                        <p>hieght</p>
                         <input plcehilder="this where user put their hieght"/>
                         <button>change unit to CM</button>
                         <button>change unit to FT</button>
                    </div>

                    <div>
                        <p>hieght</p>
                         <input plcehilder="this where user put their hieght"/>
                         <button>change unit to KG</button>
                         <button>change unit to LBS</button>
                    </div>

                    <button>NEXT</button>

                </div>

           </div>

}

export default QuestionOne;
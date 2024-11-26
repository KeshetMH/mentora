import React from "react";
import { NavLink } from "react-router-dom";

const Start = () => {

    return <div>

                <div>
                    <p>This 5 steps form collects key information to create a personalized workout plan</p>
                    <div>
                        <div>
                            <img>icon of number</img>
                            <p>Goal</p>
                        </div>

                        <div>
                            <img>icon of number</img>
                            <p>About you</p>
                        </div>

                        <div>
                            <img>icon of number</img>
                            <p>Current state</p>
                        </div>

                        <div>
                            <img>icon of number</img>
                            <p>Trget</p>
                        </div>

                        <div>
                            <img>icon of number</img>
                            <p>nutrition</p>
                        </div>
                    </div>
                </div>

                <div>
                    <p>About you</p>

                    <div>
                        <div>
                            <img></img>
                            <p>Male</p>
                        </div>

                        <div>
                            <img></img>
                            <p>Female</p>
                        </div>
                    </div>

                    <div>
                        <p>Age</p>
                         <input>this where user put their age</input>
                         <button>increse age</button>
                         <button>decrese age</button>
                    </div>

                    <div>
                        <p>hieght</p>
                         <input>this where user put their hieght</input>
                         <button>change unit to CM</button>
                         <button>change unit to FT</button>
                    </div>

                    <div>
                        <p>hieght</p>
                         <input>this where user put their weight</input>
                         <button>change unit to KG</button>
                         <button>change unit to LBS</button>
                    </div>

                    <button>NEXT</button>

                </div>

           </div>

}

export default Start;
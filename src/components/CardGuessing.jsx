import React from "react";
import Logo from '../img/logo.png';
import questions from "../Lists.js";

export default function App(){



    return(
        <div className="cardGuessing">
            <img src={questions[0].questionImage}/>
            <div className="buttonsGuessing">
                {questions[0].answerOptions.map((answerOptions) => <button>{answerOptions.answerText}</button>)}
            </div>
        </div>
    )
}

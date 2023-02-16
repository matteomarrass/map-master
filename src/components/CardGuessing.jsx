import React, {useState} from "react";
import questions from "../Lists";
import '../app.css'


export default function App(){
    const [currentQuestion, setCurrentQuestion] = useState(0); 
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const handleAnswerButtonClick = (isCorrect) => {
        if(isCorrect===true){
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        } else {
            setGameOver(true);
        }
    }

    function refreshPage(){ 
        window.location.reload(); 
    }

    return(
        <div className="game">
            {gameOver ? (<div className="scoreSection">
                            You get {score} flags out of {questions.length}! Congratulations! 🏆
                            <div><button onClick={ refreshPage } className='scoreButton'>Riparti</button></div>
                        </div>) : (
                        <div className="cardGuessing">
                            <img src={questions[currentQuestion].questionImage} alt='flag'/>
                            <p className="numberQuestion">Flag {currentQuestion + 1}/{questions.length}</p>
                            <div className="buttonsGuessing">
                                {questions[currentQuestion].answerOptions.map((answerOptions) => <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>)}
                            </div>
                        </div>
            )}
        </div>
    )
}

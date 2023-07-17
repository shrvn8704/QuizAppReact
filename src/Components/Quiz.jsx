import React, { useState } from "react";
import { QuizData } from "../Data/quizdata";
import Result from "./Result";
const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score,setScore] = useState(0);
    const [clicked , setClicked] = useState(0);
    const [showResult , setShowResult] = useState(false);
    const changeQuesion = () =>{
        updateScore();
        if(currentQuestion<QuizData.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClicked(0);
        }
        else{
            setShowResult(true);
        }
    }
    const updateScore = () =>{
        if(clicked === QuizData[currentQuestion].answer){
            setScore(score+1);
        }
    }
    const tryAgain = () =>{
        setCurrentQuestion(0);
        setScore(0);
        setClicked(0);
        setShowResult(false);
    }
    return (
        <div>
            <h1>Quiz</h1>
            <div className="container">
                {showResult ? (
                    <Result score={score} tryAgain={tryAgain} />
                ):(
                    <>
                    <div className="question">
                        <span id ="qno" >{currentQuestion+1}.</span>
                        <span id ="ques" >{QuizData[currentQuestion].question}</span>
                    </div>
                    <div className="option-container">
                        {QuizData[currentQuestion].options.map((option,index)=>{
                            return(
                                <button className={`option-btn ${clicked === index+1 ? "checked" : null}`} 
                                key={index}
                                onClick={()=>setClicked(index+1)}>
                                    {option}
                                </button>
                            )
                        })}

                    </div>
                    <input id="next-button" type="button" value="Next" onClick={changeQuesion}></input>
                    </>
                )}
            </div>
        </div>
    )
}

export default Quiz;
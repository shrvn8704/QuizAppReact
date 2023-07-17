import React from "react";
const Result = (props) =>{
    return(
        <div className="">
            <p id="score">Score is: {props.score}</p>
            <div>
                <button id="next-button" onClick={props.tryAgain}> Try Again</button>
            </div>
        </div>
    );
}
export default Result;
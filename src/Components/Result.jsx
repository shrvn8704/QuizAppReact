import React from "react";
import { Link } from "react-router-dom";
const Result = (props) =>{
    return(
        <div className="result">
            <p id="score">Score is: {props.score}</p>
            <div>
                <Link to="/">
                    <button className="next-button" onClick={props.tryAgain}> Try Again</button>
                </Link>
               
            </div>
        </div>
    );
}
export default Result;
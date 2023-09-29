import React from "react";
import { Link } from 'react-router-dom';
const Splash = () =>{
    return(
        <div className="splashscreen">
            <div className="container">
            <h1>QUIZ</h1>
            <p>
                You are about to start a quiz app <br>
                </br>
                There will be a timer for each question .
                on clicking the next button you will proceed to next question.
                You can choose an answer until the timer runs if your answer is correct,
                your score is increased.
            </p>
            <Link to="/quiz">
                    <button className="next-button">START</button>
            </Link>

            </div>
        </div>
    );
}
export default Splash;
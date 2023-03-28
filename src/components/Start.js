import React  from "react";

export default function Start(props){
    return (
        <div className="start-container">
            <div className="start-innerConatainer">
                <h1 className="start-heading">Quizzical</h1>
                <p className="start-para">Welcome to Quizzical.</p>
                <button className="start-button" onClick={props.onclick}>Start Quiz</button>
            </div>
        </div>
    )
}
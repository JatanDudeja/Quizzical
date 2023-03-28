import React from "react";
import SingleQuestion from "./SingleQuestion";
import Data from "../Data";

export default function Question(){
    const ques = Data.results.map(prevValue => (
        <SingleQuestion
            que = {prevValue.question}
            option = {[...prevValue.incorrect_answers, prevValue.correct_answer]}
            correctAnswer = {prevValue.correct_answer}
            incorrect = {[prevValue.incorrect_answers]}
        />
    ))

// console.log(Data.results);





    return(
        <div>
            {ques}
        </div>
    )
}
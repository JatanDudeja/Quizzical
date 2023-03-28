import React from "react"

export default function Options(props){
    return(
        <button className="options" onClick={buttonClicked}>{props.option}</button>
    )
}
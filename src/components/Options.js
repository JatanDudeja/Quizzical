import React from "react"

export default function Options(props){
    console.log(props);
    return(
        <button className="options">{props.option}</button>
    )
}
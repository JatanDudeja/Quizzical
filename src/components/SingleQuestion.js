import React from 'react'

import Options from './Options'

export default function(props){
    const option = props.option.map((prevValue, index) => { 
        return (
            <Options 
                option = {prevValue}
                id = {index}
            />
        )
    })
    return(
        <div className='question-container'>
            <p className='question'> {props.que}</p>
            <div className='options-container'>
                {option}
            </div>
            <hr className='question-line'></hr>
        </div>
        
    )
}
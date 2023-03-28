import React from 'react'

import Options from './Options'

export default function(props){
    console.log(props.option);
    const option = props.option.map(prevValue => (
        <Options 
            option = {prevValue}
        
        />
    ))
    return(
        <div className='questions-container'>
            <p className='questions'> {props.que}</p>
            {option}
        </div>
        
    )
}
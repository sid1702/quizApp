import React from "react"
import { nanoid } from 'nanoid'

export default function Questions(props) {
    return (
        <div>
           <h2 dangerouslySetInnerHTML={{__html:props.question}}/>
           {props.options.map(option=> 
           <button className="options" key={nanoid()} onClick={()=>props.questionChange(option)}>{option}</button>)}
        </div>
    )
}


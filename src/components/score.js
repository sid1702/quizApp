import React from "react"

export default function Score(props){
    return(
        <div className="score">
            <h1>Your score : {props.score}</h1>
            <button onClick={props.toggle}>Play again?</button>
        </div>
    )
}
import React from "react";
import Categories from "../Data/Categories.js";
import "../style.css";

export default function HomePage(props) {
    return (
        <div className="homePage">
            <h1>Quiz App</h1>
            <div>
                <label>Category?</label>
                <select
                    name="category"
                    value={props.category}
                    onChange={(e) => props.handleCategory(e.target.value)}>
                    {Categories.map(i => {
                        return <option
                            key={i.category}
                            value={i.value}>
                            {i.category}</option>
                    })}
                </select>
            </div>

            <div>
                <label>Difficulty?</label>
                <select
                    name="Difficulty"
                    value={props.Difficulty}
                    onChange={(e) => props.handleDifficulty(e.target.value)}>
                    <option value="">Any Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>

            <button onClick={props.toggleHomePage}>Start Quiz?</button>
        </div>
    )
}
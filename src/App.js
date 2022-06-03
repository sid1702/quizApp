import React from "react"
import Questions from "./components/questions"
import Score from "./components/score"
import HomePage from "./components/homePage"

export default function App() {
    const [homePage, setHomePage] = React.useState(true);
    const [score, setScore] = React.useState(0)
    const [data, setData] = React.useState([])
    const [questionNum, setQuestionNum] = React.useState(0)

    const [category, setCategory] = React.useState("");
    const [difficulty, setDifficulty] = React.useState("");

    React.useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=boolean`)
            .then(resp => resp.json())
            .then(data => setData(data.results))
    }, [homePage,category,difficulty])


    function toggleHomePage() {
        setHomePage(!homePage)
        setQuestionNum(0)
        setScore(0)
    }

    function questionChange(option) {
        if (option === data[questionNum].correct_answer) {
            setScore(preVal => preVal + 1)
        }
        setQuestionNum(preVal => preVal + 1)
    }

    function handleCategory(value){
        setCategory(value)
    }
    function handleDifficulty(value){
        setDifficulty(value)
    }
    
    const options = ["True", "False"];
    return (
        <div className="centerDiv">
            {homePage ?
                <HomePage 
                category={category} 
                handleCategory={(value)=>handleCategory(value)}
                difficulty={category} 
                handleDifficulty={(value)=>handleDifficulty(value)}
                toggleHomePage={toggleHomePage}
                />
                :
                (questionNum >= data.length) ? (
                    <Score toggle={toggleHomePage} score={score} />) :
                    <Questions
                        question={data[questionNum].question}
                        options={options}
                        questionChange={questionChange}
                    />}
        </div>
    )
}
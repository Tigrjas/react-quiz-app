import { useState } from "react";
import Results from "../components/results"

function Quiz() {
    const questionBank = [
        {
            question: "What is the largest ocean on Earth",
            options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Antartic Ocean"],
            answer: "Pacific Ocean"
        },
        {
            question: "What planet is known as the Red Planet",
            options: ["Earth", "Mercury", "Mars", "Saturn"],
            answer: "Mars"
        },
        {
            question: "How many players are on the court for one basketball team at a time",
            options: ["5", "8", "10", "20"],
            answer: "5"
        },
    ]


    // const [optionSelected, setOptionSelected] = useState("None");
    const initialAnswers = [null, null, null];
    const [userAnswers, setUserAnswers] = useState(initialAnswers);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const selectedAnswer = userAnswers[currentQuestion];
    const [isQuizFinished, setIsQuizFinished] = useState(false)

    function handleSelectOption(option) {
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option;

        setUserAnswers(newUserAnswers)
    };

    function goToNext() {
        if (currentQuestion === questionBank.length - 1) {
            setIsQuizFinished(true)
        } else {
            setCurrentQuestion(currentQuestion + 1)
        }
    }

    function goToPrev() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    if (isQuizFinished) {
        return <Results 
            userAnswers={userAnswers} 
            questionBank={questionBank} 
            restartQuiz={restartQuiz}/>
    }

    function restartQuiz() {
        setUserAnswers(initialAnswers);
        setCurrentQuestion(0);
        setIsQuizFinished(false);
    }

    return <div>

        <h2>Question {currentQuestion + 1}</h2>
        <p className="question">{questionBank[currentQuestion].question}</p>
        {questionBank[currentQuestion].options.map((option) => (
            <button className={"option" + (selectedAnswer === option ?" selected" : "")} onClick={() => handleSelectOption(option)}>
                {option}
            </button>
        ))}


        <div className="nav-buttons">
            <button onClick={goToPrev} disabled={currentQuestion === 0}> Previous </button>
            <button onClick={goToNext} disabled={!selectedAnswer}> 
                {currentQuestion === questionBank.length - 1 ? "Finish Quiz" : "Next"}
                 
            </button>
        </div>

    </div>
}

export default Quiz;
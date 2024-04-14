// Var
// NavBar
const homeNav = document.getElementById("homeNav");
const quizNav = document.getElementById("quizNav");
const resultsNav = document.getElementById("resultsNav");
// Body
const homeDiv = document.getElementById("home");
const quizDiv = document.getElementById("quiz");
const resultsDiv = document.getElementById("results");
// Question
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

// Funciones
// Body
const hideViews =()=>{
    homeDiv.classList.add("hide")
    quizDiv.classList.add("hide")
    resultsDiv.classList.add("hide")
}
const showHome =()=>{
    hideViews()
    homeDiv.classList.remove("hide")
}
const showQuiz =()=>{
    hideViews()
    quizDiv.classList.remove("hide")
}
const showResults =()=>{
    hideViews()
    resultsDiv.classList.remove("hide")
}

//axios

let questions = [
    {
        question: "¿Cuantos años tienes?",
        answers: [
            {text:"32", correct: true },
            {text:"22", correct: false },
            {text:"12", correct: false },
            {text:"42", correct: false },
        ]
    },
    {
        question: "¿como te llamas?",
        answers: [
            {text:"juanjo", correct: true },
            {text:"victor", correct: false },
            {text:"alfonso", correct: false },
            {text:"emilio", correct: false },
        ]
    }
];
//let question;
//let answer;

/*axios.get("https://the-trivia-api.com/v2/questions/")
//.then((res) => console.log(res.data[0]))
.then((res) => question = res.data[0].question)
.catch((err) => console.error(err));*/

let currentQuestionIndex;

const startGame =()=>{
    startButton.classList.add("hide")
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide")
    setNextQuestion();
}

const showQuestion =(question)=>{
questionElement.innerText = question.question;
question.answers.forEach((answer) => {
    const button = document.createElement("button")
    button.innerText = answer.text;

    if (answer.correct) {
        button.dataset.correct = true;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
});
}

const setNextQuestion =()=>{
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

const setStatusClass =(option)=>{
    if (option.dataset.correct) {
        option.classList.add("correct");
    } else {
        option.classList.add("wrong");
    }
}

const selectAnswer =()=>{
    Array.from(answerButtonsElement.children).forEach((button) =>{
        setStatusClass(button)
    })
    if (questions.length > currentQuestionIndex +1) {
        nextButton.classList.remove("hide");
    } else {
        startButton.innerText = "restart"
        startButton.classList.remove("hide");
    }
}

const resetState =()=>{
    nextButton.classList.add("hide");
    answerButtonsElement.innerHTML=""
} 

// Events
homeNav.addEventListener("click",showHome)
quizNav.addEventListener("click",showQuiz)
resultsNav.addEventListener("click",showResults)
startButton.addEventListener("click",startGame)
nextButton.addEventListener("click", ()=>{
    currentQuestionIndex++;
    setNextQuestion();
})
// Variables
const homeNav = document.getElementById("homeNav");
const quizNav = document.getElementById("quizNav");
const resultsNav = document.getElementById("resultsNav");
const homeDiv = document.getElementById("home");
const quizDiv = document.getElementById("quiz");
const resultsDiv = document.getElementById("results");
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

// Funciones
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
axios.get("https://the-trivia-api.com/v2/questions/")
.then((res) => console.log(res.data[0]))
//.then((res) => console.log(res.data[0].question))
.catch((err) => console.error(err));

let currentQuestionIndex;

const startGame =()=>{
    startButton.classList.add("hide")
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide")
}




// Events
homeNav.addEventListener("click",showHome)
quizNav.addEventListener("click",showQuiz)
resultsNav.addEventListener("click",showResults)
startButton.addEventListener("click",startGame)
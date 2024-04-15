// VariablesHtml
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
// variables
let questions = [];
let correctAnswer = ""
let currentQuestionIndex;

// Fuctions
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
//axios.get("https://opentdb.com/api.php?amount=10&category=32&difficulty=easy&type=multiple")
//.then((res) => questions =  res.data.results)
//.catch((err) => console.error(err));

//axios.get("https://thesimpsonsquoteapi.glitch.me/quotes?count=10")
//.then((res) => console.log(res.data))
//.then((res) => questions = (res.data))
//.catch((err) => console.error(err));

const loadQuestion = async ()=>{
    try {
        const result = await axios.get("https://thesimpsonsquoteapi.glitch.me/quotes?count=10")
        questions = (result.data);
        //console.log(result.data[0]);
        console.log(answer);
    } catch (error) {
        console.error(error);
    }
}
loadQuestion()

const startGame =()=>{
    startButton.classList.add("hide")
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide")
    setNextQuestion();
}

/*let incorrectAnswer = questions
console.log(incorrectAnswer);
const incorrectAnswer =()=>{
}*/

const showQuestion =(question)=>{
questionElement.innerHTML = 
`<img src="${question.image}" alt=""></img>`;

correctAnswer = question.character;
const answers = questions.map(question=>question.character);
//let optionsList = incorrectAnswer;
//optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
console.log(answers);
    answers.forEach((answer) => {
    const button = document.createElement("button")
    button.innerText = answer;

    if (answer == correctAnswer) {
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
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
let correctAnswer = "";
let incorrectAnswer = [];
let currentQuestionIndex;
let arrbtn = [];
// Fuctions
// Body
const hideViews = () => {
  homeDiv.classList.add("hide");
  quizDiv.classList.add("hide");
  resultsDiv.classList.add("hide");
};
const showHome = () => {
  hideViews();
  homeDiv.classList.remove("hide");
};
const showQuiz = () => {
  hideViews();
  quizDiv.classList.remove("hide");
};
const showResults = () => {
  hideViews();
  resultsDiv.classList.remove("hide");
};

//axios
const loadQuestion = async () => {
  try {
    const result = await axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=15"
    );
    questions = result.data;
    console.log(questions);
    setNextQuestion();
  } catch (error) {
    console.error(error);
  }
};
loadQuestion()

/*const loadAnswer = async ()=>{
    const result = await axios.get("https://thesimpsonsquoteapi.glitch.me/quotes?count=10")
    questions = (result.data);
} catch (error) {
    console.error(error);
}*/

/*const showAnswer =()=>{
    if (questions.character !== correctAnswer) {
        return incorrectAnswer.push(questions);
    }
}
console.log(incorrectAnswer);*/

const startGame = () => {
  startButton.classList.add("hide");
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  //loadQuestion();
  setNextQuestion();
};

const showQuestion = (question) => {
  currentQuestionIndex = currentQuestionIndex; //PREG A SOFI XQ NO FUCNIONA
  console.log(question);
  console.log(question[currentQuestionIndex].image);
  const answers = questions.map((question) => question.character);
  let filteredanswers = answers.filter(
    (item, index) => answers.indexOf(item) == index
  );
  filteredanswers.forEach((element) => {arrbtn.push(element);
  });
  let arrbtnFiltered = arrbtn.filter(    (item, index) => arrbtn.indexOf(item) == index
  );    
  console.log(arrbtnFiltered);

    if (arrbtnFiltered.length < 10) {
      loadQuestion()
    }
  questionElement.innerHTML = `<img src="${question[currentQuestionIndex].image}" alt=""></img>`;
  correctAnswer = question[currentQuestionIndex].character;
  arrbtnFiltered.sort()
  arrbtnFiltered.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer;
    if (answer == correctAnswer) {
      button.dataset.correct = true;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
};

const setNextQuestion = () => {
  resetState();
  showQuestion(questions);
};

const setStatusClass = (option) => {
  if (option.dataset.correct) {
    option.classList.add("correct");
  } else {
    option.classList.add("wrong");
  }
};

const selectAnswer = () => {
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button);
  });
  //if (questions.length > currentQuestionIndex +1) {
  if (10 > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    showResults();
    startButton.innerText = "restart";
    startButton.classList.remove("hide");
  }
};

const resetState = () => {
  nextButton.classList.add("hide");
  answerButtonsElement.innerHTML = "";
};

// Events
homeNav.addEventListener("click", showHome);
quizNav.addEventListener("click", showQuiz);
resultsNav.addEventListener("click", showResults);
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

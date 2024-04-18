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
const startHardButton = document.getElementById("start-btn-hard");
const nextButton = document.getElementById("next-btn");
const nextButtonHard = document.getElementById("next-btn-hard");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const scoreMarker = document.getElementById("score-marker");
//const audioTrue = document.getElementById("audio-true"); // Prueba audio
// Result
const ralphDiv = document.getElementById("ralph");
const nelsonDiv = document.getElementById("nelson");
const bartDiv = document.getElementById("bart");
const milhouseDiv = document.getElementById("milhouse");
const martinDiv = document.getElementById("martin");
const lisaDiv = document.getElementById("lisa");
const cletusDiv = document.getElementById("cletus");
const barneyDiv = document.getElementById("barney");
const homerDiv = document.getElementById("homer");
const lennyDiv = document.getElementById("lenny");
const margeDiv = document.getElementById("marge");
const frinkDiv = document.getElementById("frink");
// variables
let questions = [];
let correctAnswer = "";
let incorrectAnswer = [];
let currentQuestionIndex;
let arrbtn = [];
let score = 0;
// Fuctions
const hideViews = () => {
  homeDiv.classList.add("hide");
  quizDiv.classList.add("hide");
  resultsDiv.classList.add("hide");
  ralphDiv.classList.add("hide");
  nelsonDiv.classList.add("hide");
  bartDiv.classList.add("hide");
  milhouseDiv.classList.add("hide");
  martinDiv.classList.add("hide");
  lisaDiv.classList.add("hide");
  cletusDiv.classList.add("hide");
  barneyDiv.classList.add("hide");
  homerDiv.classList.add("hide");
  lennyDiv.classList.add("hide");
  margeDiv.classList.add("hide");
  frinkDiv.classList.add("hide");
  //audioTrue.classList.add("hide");
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
  if (score < 2) {
    ralphDiv.classList.remove("hide");
  } else if (score < 4) {
    nelsonDiv.classList.remove("hide");
  } else if (score < 6) {
    bartDiv.classList.remove("hide");
  } else if (score < 8) {
    milhouseDiv.classList.remove("hide");
  } else if (score < 10) {
    martinDiv.classList.remove("hide");
  } else {
    lisaDiv.classList.remove("hide");
  }
};

const showResultsHard = () => {
  hideViews();
  resultsDiv.classList.remove("hide");
  if (score < 2) {
    cletusDiv.classList.remove("hide");
  } else if (score < 4) {
    barneyDiv.classList.remove("hide");
  } else if (score < 6) {
    homerDiv.classList.remove("hide");
  } else if (score < 8) {
    lennyDiv.classList.remove("hide");
  } else if (score < 10) {
    margeDiv.classList.remove("hide");
  } else {
    frinkDiv.classList.remove("hide");
  }
};
//axios
const loadQuestion = async () => {
  try {
    const result = await axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=15"
    );
    questions = result.data;
    setNextQuestion();
  } catch (error) {
    console.error(error);
  }
};
loadQuestion();

const startGame = () => {
  startButton.classList.add("hide");
  startHardButton.classList.add("hide");
  score = 0; 
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  scoreMarker.classList.remove("hide");
  setNextQuestion();
};

const startGameHard = () => {
  quizDiv.style.backgroundImage = "url(../assets/pizarra.jpg)";
  startButton.classList.add("hide");
  startHardButton.classList.add("hide");
  score = 0;
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  scoreMarker.classList.remove("hide");
  setNextQuestionHard();
};

const printScore = (score) => {
  scoreMarker.innerHTML = `<h5 class="scorePrint">Score: ${score}</h5>`;
  let end = score;
}

const showQuestion = (question) => {
  const answers = questions.map((question) => question.character);
  let filteredanswers = answers.filter(
    (item, index) => answers.indexOf(item) == index
  );
  filteredanswers.forEach((element) => {
    arrbtn.push(element);
  });
  let arrbtnFiltered = arrbtn.filter(
    (item, index) => arrbtn.indexOf(item) == index
  );

  if (arrbtnFiltered.length < 10) {
    loadQuestion();
  }
  questionElement.innerHTML = `<img src="${question[currentQuestionIndex].image}" class="questionImage" alt=""></img>`;
  correctAnswer = question[currentQuestionIndex].character;
  const arrSort = arrbtnFiltered.filter((answer, i) => {
    if (answer == correctAnswer) {
      return answer;
    }
    if (i < 4 && answer !== correctAnswer) {
      return answer;
    }
  });
  arrSort.sort();
  arrSort.forEach((answer) => {
    let button = document.createElement("button");
    button.innerText = answer;
    if (answer == correctAnswer) {
      button.dataset.correct = true;
    }

    button.addEventListener("click", () => {
      if (button.dataset.correct === "true") {
        score++;
        //audioTrue.classList.remove("hide"); //Prueba audio
        printScore(score);
      }
      selectAnswer();
    });
    
    answerButtonsElement.appendChild(button);
  });
};

const showQuestionHard = (question) => {
  currentQuestionIndex = currentQuestionIndex;
  const answers = questions.map((question) => question.character);
  let filteredanswers = answers.filter(
    (item, index) => answers.indexOf(item) == index
  );
  filteredanswers.forEach((element) => {
    arrbtn.push(element);
  });
  let arrbtnFiltered = arrbtn.filter(
    (item, index) => arrbtn.indexOf(item) == index
  );

  if (arrbtnFiltered.length < 10) {
    loadQuestion();
  }

  questionElement.innerHTML = `<div class="quote"><h5>${question[currentQuestionIndex].quote}</h5></div>`;
  correctAnswer = question[currentQuestionIndex].character;
  const arrSort = arrbtnFiltered.filter((answer, i) => {
    if (answer == correctAnswer) {
      return answer;
    }
    if (i < 4 && answer !== correctAnswer) {
      return answer;
    }
  });
  arrSort.sort();
  arrSort.forEach((answer) => {
    let button = document.createElement("button");
    button.innerText = answer;
    if (answer == correctAnswer) {
      button.dataset.correct = true;
    }
    button.addEventListener("click", () => {
      if (button.dataset.correct === "true") {
        score++ ; 
        //audioTrue.classList.remove("hide"); //Prueba audio
        printScore(score);
      }
      selectAnswerHard();
    });
    
    answerButtonsElement.appendChild(button);
  });
};

const setNextQuestion = () => {
  //audioTrue.classList.add("hide");
  resetState();
  showQuestion(questions);
};

const setNextQuestionHard = () => {
  resetState();
  showQuestionHard(questions);
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
  if (10 > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    showResults();
    //startButton.innerText = "restart";
    startHardButton.classList.remove("hide");
    startButton.classList.remove("hide");
    questionContainerElement.classList.add("hide");
    scoreMarker.classList.add("hide"); 
  }
};

const selectAnswerHard = () => {
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button);
  });
  if (10 > currentQuestionIndex + 1) {
    nextButtonHard.classList.remove("hide");
  } else {
    showResultsHard();
    quizDiv.style.backgroundImage = null;
    //startHardButton.innerText = "restart";
    startButton.classList.remove("hide");
    startHardButton.classList.remove("hide");
    questionContainerElement.classList.add("hide"); 
    scoreMarker.classList.add("hide"); 
  }
};

const resetState = () => {
  nextButton.classList.add("hide");
  nextButtonHard.classList.add("hide")
  answerButtonsElement.innerHTML = "";
};

// Events
homeNav.addEventListener("click", showHome);
quizNav.addEventListener("click", showQuiz);
resultsNav.addEventListener("click", showResults);
startButton.addEventListener("click", startGame);
startHardButton.addEventListener("click", startGameHard);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});
nextButtonHard.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestionHard();
});

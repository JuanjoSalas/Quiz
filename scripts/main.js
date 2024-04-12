const homeNav = document.getElementById("homeNav");
const questionNav = document.getElementById("questionNav");
const resultsNav = document.getElementById("resultsNav");
const homeDiv = document.getElementById("home");
const questionDiv = document.getElementById("question");
const resultsDiv = document.getElementById("results");

const hideViews =()=>{
    homeDiv.classList.add("hide")
    questionDiv.classList.add("hide")
    resultsDiv.classList.add("hide")
}
const showHome =()=>{
    hideViews()
    homeDiv.classList.remove("hide")
}
const showQuestion =()=>{
    hideViews()
    questionDiv.classList.remove("hide")
}
const showResults =()=>{
    hideViews()
    resultsDiv.classList.remove("hide")
}

homeNav.addEventListener("click",showHome)
questionNav.addEventListener("click",showQuestion)
resultsNav.addEventListener("click",showResults)
var startBtn = document.querySelector("#start");
var timerEl = document.querySelector("#time");
var questionsEl = document.querySelector("#totalQuestions");
var choicesEl = document.querySelector("#choices");
var submitBtn = document.querySelector("#submit");
var initialsEl = document.querySelector("#initials");
var hide = document.querySelector("#hide");

var totalQuestions = [
    {
        question: "What is the type of Pop up boxes available in JavaScript?:",
        choices: ["Alert", "Confirm", "Prompt", "All of the above"],
        answer: "All of the above"

    },
    {
        question: "What does the <p> tag stand for?",
        choices: ["Popup", "Paragraph", "Picture", "None of the above"],
        answer: "Paragraph"
    },
    {
        question: "What tag is used to define an unordered list that is bulleted?",
        choices: ["<li>", "<u>", "<ul>", "<lu>"],
        answer: "<ul>"
    },
    {
        question: "In JavaScript, what element is used to store multiple values in a single variable?",
        choices: ["Arrays", "Strings", "Functions", "Variables"],
        answer: "Arrays"
    },
    {
        question: "What is considered to be the most popular programming language in the world?",
        choices: ["HTML","C++","Ruby","JavaScript"],
        answer: "JavaScript"
    },

];

var time = 100;

hide.style.display = 'none';

startBtn.addEventListener("click", startQuiz())

function startQuiz() {
    hide.style.display = 'block';
    timerEl = setInterval(countdown, 1000);
    
}
function countdown() {
    time--;
    timerEl.textContent = time;

    if (time <= 0) {
      endQuiz();
    };
}
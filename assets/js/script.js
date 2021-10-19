// var startBtn = document.getElementById("start-btn");
// var questionBox = document.getElementById("question-area");
// var questionEl = document.getElementById("question");
// var answerEl = document.getElementById("ans-btn");
// var currentQuestion = "";
// var shuffleQuestion = "";
// var currentQuestionIndex = 0

// //    currentQuestion[Math.floor(Math.random() * questionInfo)];
// // var score = 10;
// // var time = 60;
// // maxQuestion = question info length of arrays

// var questionInfo = [
//     {
//         question: "whats your fave number?",
//         choices: [
//              "7", 
//             "21", 
//              "69",
//              "13"
//         ],
//         answer: "21"

//     },
//     {
//         question: "whats your fave number?",
//         choices: [
//             { text: "9", correct: false },
//             { text: "57", correct: false },
//             { text: "420", correct: true },
//             { text: "2", correct: true }
//         ]

//     }

// ]

// //start function to start game by sending you to the first question and start the timer

// var startGame = function () {
//     console.log("lets begin");
//     startBtn.classList.add("hide");
//     currentQuestion = 0;
//     for (i = 0; i < questionInfo; i++) {
//         shuffleQuestion =
//             currentQuestion[Math.floor(Math.random() * questionInfo.length)];
//     }

//     // document.body.innerHTML = randomQuestion;
//     questionBox.classList.remove("hide");
//     nextQuestion()
// };

// startBtn.addEventListener("click", startGame);

// //question function to bring up the next question and answers to pick from
// //check if the answer is correct
// //answer wrong time off timer
// //move on to next question
// //make questions random

// function nextQuestion() {
//     showQuestion(shuffleQuestion[currentQuestion]);
//     questionEl.innerText = question.question
//     questionInfo[0].choices.forEach(answer => {
//         var button = document.
//     })
// }
// function showQuestion(question) {

// }



//question list picking random question

//timer function


//high score local storage

//display that in the corner of the screen


// =====================================================================================
var startBtn = document.getElementById("start-btn");
var questionBox = document.getElementById("question-area");
var questionEl = document.getElementById("question");
var answerA = document.getElementById("ans-btn-a");
var answerB = document.getElementById("ans-btn-b");
var answerC = document.getElementById("ans-btn-c");
var answerD = document.getElementById("ans-btn-d");
var score = 0;
var timeLeft = 10; // will change to 60 later but easier to test at 10
var timer = document.getElementById("timer");  
var time;
var questionBank = [
    {
        question: "what does HTML stand for?",
        choices: [
            "high time micro leters",
            "HyperText Markup Language",
            "HyperActive Micro Language",
            "Hectic Tetris Mega Legs"
        ],
        answer: "HyperText Markup Language"
    },
    {
        question: "what does asynchronous code mean?",
        choices: [
            "coding off beat",
            "when code can be executed without stopping the entire thread",
            "when code takes a long time to load",
            "code that is not organized"
        ],
        answer: "when code can be executed without stopping the entire thread"
    },   
    {
        question: "what does TDD stand for?",
        choices: [
            "total domination decode",
            "Test driven development",
            "time data development",
            "test domain data"
        ],
        answer: "Test driven development"
    },
    {
        question: "what does OOP stand for?",
        choices: [
            "objective observent programing",
            "outcome oriented project",
            "object-oriented programming",
            "old overseen programing"
        ],
        answer: "object-oriented programming"
    },
    {
        question: "What is JSON?",
        choices: [
            "JavaScript Object Notation",
            "a person",
            "Job Saver Oriented Network",
            "Do you mean Jason?"
        ],
        answer: "JavaScript Object Notation"
    },
]

var startGame = function () {
    startBtn.classList.add("hide");
    questionBox.classList.remove("hide");
    makeQuestion();
    timer.classList.remove("hide");
    time = setInterval(updateTimer, 1000);
};

startBtn.addEventListener("click", startGame);

//hw to make this loop work?
var makeQuestion = function (){
    for (let i = 0; i < questionBank.length; i++) {
    //   console.log(questionBank[i]);
    questionEl.innerHTML = questionBank[i].question;
    answerA.innerHTML = questionBank[i].choices[0];
    answerB.innerHTML = questionBank[i].choices[1];
    answerC.innerHTML = questionBank[i].choices[2];
    answerD.innerHTML = questionBank[i].choices[3];
    // document.addEventListener("click", answerCheck())
    }
    
}

// how to get this to execute when answer button is clicked
var answerCheck = function (){
    if (questionBank[i].choices[i].match(this.answer)){
    score = score + 10
    } else{
        timerLeft = timerLeft - 5;
    } 
    makeQuestion()
    // console.log("Clicked by User");
}

function endGame() {
    questionBox.classList.add('hide');
}

function updateTimer() {
    // console.log(timeLeft);
    timeLeft = timeLeft - 1;
    timer.innerHTML = timeLeft;
    //  console.log(timeLeft);
    if (timeLeft === 0) {
        clearInterval(time);
        timer.innerHTML = "Times Up"
        endGame();
    } 
};

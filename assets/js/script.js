var startBtn = document.getElementById("start-btn");
var instructions = document.getElementById('instructions');
var title = document.getElementById('title');
var questionBox = document.getElementById("question-area");
var questionEl = document.getElementById("question");
var choiceContatiner = document.getElementById('choices');
var timeLeft = 60;
var timer = document.getElementById("timer");
var time;
var submit = document.getElementById('submit');
var highScoreContainer = document.getElementById('highScoreContainer')
var highScoresList = document.getElementById('highScore')
var restartBtn = document.getElementById('restart-btn')
var questionBankIndex = 0;
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

//starting the game when clicking the start btn
var startGame = function () {
    timer.textContent = timeLeft
    startBtn.classList.add("hide");
    instructions.classList.add('hide');
    title.classList.add('hide')
    questionBox.classList.remove("hide");
    makeQuestion();
    timer.classList.remove("hide");
    time = setInterval(updateTimer, 1000);
};

//creating the questions and aswers
var makeQuestion = function () {
    var currentQuestion = questionBank[questionBankIndex];
    questionEl.innerHTML = currentQuestion.question;
    choiceContatiner.innerHTML = '';
    currentQuestion.choices.forEach(function (choice) {
        var choiceBtn = document.createElement('button');
        choiceBtn.setAttribute('class', 'choice btn');
        choiceBtn.setAttribute('value', choice);
        choiceBtn.textContent = choice;
        choiceBtn.onclick = answerCheck;
        choiceContatiner.appendChild(choiceBtn);
    })
}

// checking the asnswers and changing your time accordingly 
var answerCheck = function () {
    if (this.value !== questionBank[questionBankIndex].answer) {
        timeLeft -= 5
        if (timeLeft < 0) {
            time = 0
        }
        timer.textContent = timeLeft
    }
    questionBankIndex++
    if (questionBankIndex === questionBank.length) {
        endGame()
    } else {
        makeQuestion()
    }
    // console.log("Clicked by User");
};

//ending the timer and questions and displaying scores and and restart btn
function endGame() {
    clearInterval(time);
    questionBox.classList.add('hide');
    var endScreen = document.getElementById('endScreen');
    endScreen.classList.remove('hide');
    var score = document.getElementById('finalScore');
    score.textContent = timeLeft;
    timer.innerHTML = "Game Over"
    highScoresScreen();
    highScoreContainer.classList.remove('hide');
    restartBtn.classList.remove('hide');
};

// saving the scores based on the timer
function saveScore() {
    var initials = document.getElementById('initials').value;
    var highScores = JSON.parse(localStorage.getItem('scores')) || [];
    console.log(highScores);
    var yourScore = {
        initials: initials,
        score: timeLeft
    };
    highScores.push(yourScore);
    localStorage.setItem("scores", JSON.stringify(highScores));
}

//displaying high scores at the end
var highScoresScreen = function () {
    var highScores = JSON.parse(localStorage.getItem('scores')) || [];
    console.log(highScores);

    for (let i = 0; i < highScores.length; i++) {
        var scoreLi = document.createElement('li');
        scoreLi.setAttribute('class', 'score');
        scoreLi.innerHTML = JSON.stringify(highScores[i]);
        highScoresList.appendChild(scoreLi);
    };

};

//restart btn to restart the game
var restart = function () {
    location.reload()
};

//timer going down
function updateTimer() {
    // console.log(timeLeft);
    timeLeft--;
    timer.textContent = timeLeft;
    //  console.log(timeLeft);
    if (timeLeft <= 0) {
        endGame();
    }
};

startBtn.addEventListener("click", startGame);
submit.addEventListener('click', saveScore);
restartBtn.addEventListener("click", restart);
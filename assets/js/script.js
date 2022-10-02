// Always available variables:
//      - Header/question section 
//              - sometimes question
//              - sometimes 'Good job! Save score'
// title section
var titleEl = document.getElementById("title");
// other sections (only one visible at a time)
var screensEls = document.getElementsByClassName("screens");

//      - button section
//              - sometimes buttons answers
//              - sometimes buttons for start over/high score
//              - sometimes input for saving initials and high score
// *** buttons, inputs, and lists ***
// welcome div:
var startEl = document.getElementById("start");
var scoresEl = document.getElementById("scores");
// Ansswers div:
var currentScoreEl = document.getElementById("currentScore");
var timeLeftEl = document.getElementById("timeLeft");
var answer0El = document.getElementById("0");
var answer1El = document.getElementById("1");
var answer2El = document.getElementById("2");
var answer3El = document.getElementById("3");
var isCorrectDivEl = document.getElementById("isCorrect");
var rightOrWrongEl = document.getElementById("rightOrWrong");
// GameOver div:
var finalScoreEl =document.getElementById("finalScore");
var yesEl = document.getElementById("yes");
var noEl = document.getElementById("no");
// submitScore div:
var initialsEl = document.getElementById("initials");
var saveEl = document.getElementById("save");
// highScore div:
var leaderboardEl = document.getElementById("leaderboard");
var leaderboardScoreEls = [];
var exitEl = document.getElementById("exit");
var deleteEl = document.getElementById("delete");

//      - questions array (objects):
//              - question (string)
//              - array of possible answers (4 string)
//              - correct answer (index/number)
var questions = [{
    // question 1
    question: "What is the main language used to add styling a website?",
    answers: ["HTML", "JavaScript", "CSS", "Stack"],
    correct: 2
}, {
    // question 2
    question: "Where do you store variables within the browser that you want to access after reloading the page?",
    answers: ["localStorage", "console.log it", "within the local js file", "within the css file"],
    correct: 0
}, {
    // question 3
    question: "What language do you use to create the basic structure of a webpage?",
    answers: ["GitLab", "HTML", "CSS", "JavaScript"],
    correct: 1
}, {
    // question 4
    question: "What language can you use to make a webpage dynamic?",
    answers: ["CSS", "JavaScript", "HTML", "python"],
    correct: 1
}, {
    // question 5
    question: "What is the best resource to learn about code syntax?",
    answers: ["W3schools", "Mozilla", "StackOverflow", "All of the above"],
    correct: 3
}, {
    // question 6
    question: "What CSS display can you use to make a section of code into a flexbox container?",
    answers: ["flex", "block", "inline", "inline-block"],
    correct: 0
}, {
    // question 7
    question: "When creating a timer, what does time unit does JavaScript use as a default?",
    answers: ["seconds", "minutes", "miliseconds", "hours"],
    correct: 2
}, {
    // question 8
    question: "What piece of code can be used to prevent the default action (i.e. making a form submit)?",
    answers: ["event.stopPropagation()", "event.key", "stopPropagation()", "event.preventDefault()"],
    correct: 3
}, {
    // question 9
    question: "When you want to access a section of your webpage using a nav bar, what is most convenient way to label the desired section?",
    answers: ["id=", "class=", "data-___=", "src="],
    correct: 0
}, {
    // question 10
    question: "When you want to listen for a key down event, what do you put for first element of the eventListener function?",
    answers: ["click", "keydown", "submit", "keyup"],
    correct: 1
}];

//      - high scores array (local storage variable)
var scores = [];
//      - timeLeft --> int
var timeLeft = 0;
//      - currentScore --> int
var currentScore = 0;
//      - currentQuestion --> int/index
var currentQuestion = 0;
// Temp Variables:
//      - start button/start over button 
//      - high score button
//      - question buttons


// Todos:
//      - init screen (with start game and check high scores)
//      - Timer 
//      - After questions start, when click 
//              - if correct answer, add to score 
//              - else subract from time
//              - if timer 0 or no questions left
//              - ending screen
//      - Game ending screen with option to save score button (yes or no)
//      - Input screen with save score

// when click event listener to button section
//      - if object type is a button:
//              - if labeled start, call playGame function
//              - if labeled score, call highScores function
//              - if labeled answer_, call checkAnswers function
//              - if labeled yes, call saveScore function
//              - if labeled no, call welcome function
//              - if labeled save, call storeScore
//              - if labelded exit, call welcome function

// init function (initialize website):
//      - check saved high scores and save to high scores array
//      - calls welcome to website function
function init() {
    var scoresLocalStorage = JSON.parse(localStorage.getItem("scores"));
    if (scoresLocalStorage !== null) {
        scores = scoresLocalStorage;
    }
    welcome();
}

// welcome function:
//      - create screen with screen with:
//              - title: "Wecome to Code Quiz"
//              - button1: "start game" 
//                     - when clicked, call initializeGame function
//              - button2: "high scores" <--- not required
//                     - when clicked, call highScores function
// welcome display --> not hidden
function welcome() {
    titleEl.textContent = "Welcome to Angel's Code Quiz!";
    titleEl.setAttribute("style", "color:#1B1725");
    makeVisible("welcome");
}

// intializeGame:
//      - set currentScore = 0;
//      - set timeLeft = 90;
//      - set currentQuestion = 0;
//      - call playGame funtion

// playGame function (called every second):
//      - title: the question title at current index of questions array
//              - button1: possible answer 1
//              - button2: possible answer 2
//              - button3: possible answer 3
//              - button4: possible answer 4
//      - subtract 1 from timeLeft
//          - print onto screen "Time left: " + timeLeft
//      - if timeLeft <= 0, call Game over function

function playGame() {
    currentScore = 0;
    timeLeft = 90;
    currentQuestion = 0;
    makeVisible("answers");

    var timeInterval = setInterval(function() {
        if ((timeLeft > 0) && (currentQuestion < questions.length)) {
            currentScoreEl.textContent = "Score: " + currentScore;
            timeLeftEl.textContent = "Time Left: " + timeLeft;

            var current = questions[currentQuestion];
            titleEl.textContent = current.question;
            answer0El.textContent = current.answers[0];
            answer1El.textContent = current.answers[1];
            answer2El.textContent = current.answers[2];
            answer3El.textContent = current.answers[3];

            isCorrectDivEl.setAttribute("style", "display: none");

            timeLeft--;
        } else {

            clearInterval(timeInterval);
            gameOver();
        }
    }, 1000);
}

// checkAnswer function:
//      - if button label matches correct answer in associated question add 1 to currentScore
//      - else, subtract 15 seconds from timeLeft
function checkAnswer0() {
    isCorrectDivEl.setAttribute("style", "display-inline");
    if (questions[currentQuestion].correct === 0) {
        currentScore++;
        rightOrWrongEl.textContent = "Correct!";
    } else {
        timeLeft = timeLeft - 15;
        rightOrWrongEl.textContent = "Wrong..."
    }
    currentQuestion++;
}
function checkAnswer1() {
    isCorrectDivEl.setAttribute("style", "display:inline");
    if (questions[currentQuestion].correct === 1) {
        currentScore++;
        rightOrWrongEl.textContent = "Correct!";
    } else {
        timeLeft = timeLeft - 15;
        rightOrWrongEl.textContent = "Wrong..."
    }
    currentQuestion++;
}
function checkAnswer2() {
    isCorrectDivEl.setAttribute("style", "display-inline");
    if (questions[currentQuestion].correct === 2) {
        currentScore++;
        rightOrWrongEl.textContent = "Correct!";
    } else {
        timeLeft = timeLeft - 15;
        rightOrWrongEl.textContent = "Wrong..."
    }
    currentQuestion++;
}
function checkAnswer3() {
    isCorrectDivEl.setAttribute("style", "display-inline");
    if (questions[currentQuestion].correct === 3) {
        currentScore++;
        rightOrWrongEl.textContent = "Correct!";
    } else {
        timeLeft = timeLeft - 15;
        rightOrWrongEl.textContent = "Wrong..."
    }
    currentQuestion++;
}

// gameOver function:
//      - Display screen with:
//              - title: "Game over!"
//              - subtitle: "Would you like to save your score?"
//              - button1: "yes"
//                      - calls saveScore function
//              - button2: "no"
//                      - calls welcome function
function gameOver() {
    titleEl.textContent = "Game Over";
    finalScoreEl.textContent = "Final Score: " + currentScore;
    makeVisible("gameOver");
}

// saveScore function:
//      - Display screen with:
//              - title: "Save score"
//              - input1, label: Initials
//              - text: "score: " + currentScore
//              - button1: "save"
//      - when save button clicked, call storeScore function
function saveScore() {
    titleEl.textContent = "Save Score";
    makeVisible("submitScore");
    noInitialsEl.setAttribute("style", "display: none");
}

// storeScore function
//      - save score to scores array. 
//      - save scores array to localStorage
function storeScore(event) {
    console.log(event);
    event.preventDefault();
    var initials = initialsEl.value.trim();

    var score = {
        initials: initials,
        score: currentScore
    };

    scores.push(score);
    scores.sort((a, b) => b.score - a.score);
    
    localStorage.setItem("scores", JSON.stringify(scores));

    welcome();
}


// highScores function: 
//      - Display screen with:
//      - list of high scores:
//              - intials score
//      - button1: "Back to main"
//              - when pressed, calls welcome function
function highScores() {
    makeVisible("highScore");
    for (var i = 0; i < scores.length; i++) {
        var li = document.createElement("li");
        li.textContent = scores[i].initials + " - " + scores[i].score;
        leaderboardEl.appendChild(li);
        leaderboardScoreEls.push(li);
    }
}

function clearHighScores() {
    for (var i = leaderboardScoreEls.length - 1; i >= 0; i--) {
        var child = leaderboardScoreEls.pop();
        leaderboardEl.removeChild(child);
    }
    welcome();
}

// Deletes leaderboard
function deleteLeaderboard() {
    scores = [];
    localStorage.setItem("scores", JSON.stringify(scores));

    for (var i = leaderboardScoreEls.length - 1; i >= 0; i--) {
        var child = leaderboardScoreEls.pop();
        leaderboardEl.removeChild(child);
    }
}

// Make section invisible function
//      - makes all screens except for screen with id of input invisible
function makeVisible(screen) {
    for (var i = 0; i < screensEls.length; i++) {
        var id = screensEls[i].getAttribute("id");
        if (id === screen) {
            screensEls[i].setAttribute("style", "display:inline");
        } else {
            screensEls[i].setAttribute("style", "display:none");
        }
    }
}

// initialize screen
init();

startEl.addEventListener("click", playGame);
scoresEl.addEventListener("click", highScores);
answer0El.addEventListener("click", checkAnswer0);
answer1El.addEventListener("click", checkAnswer1);
answer2El.addEventListener("click", checkAnswer2);
answer3El.addEventListener("click", checkAnswer3);
yesEl.addEventListener("click", saveScore);
noEl.addEventListener("click", welcome);
saveEl.addEventListener("click", storeScore);
exitEl.addEventListener("click", clearHighScores);
deleteEl.addEventListener("click", deleteLeaderboard)


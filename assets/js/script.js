// title section
var titleEl = document.getElementById("title");
// other sections (only one visible at a time)
var screensEls = document.getElementsByClassName("screens");

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
var noInitials = document.getElementById("noInitials");
// highScore div:
var leaderboardEl = document.getElementById("leaderboard");
var leaderboardScoreEls = [];
var exitEl = document.getElementById("exit");
var deleteEl = document.getElementById("delete");

// questions array (objects):
//       - question (string)
//       - array of possible answers (4 string)
//       - correct answer (index/number)
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

// Array of scores
var scores = [];
// Time Left
var timeLeft = 0;
//  Current Score
var currentScore = 0;
// Current Question (index)
var currentQuestion = 0;

// Initializes website with leaderboard from local storage. Then, calls function to show welcome screen
function init() {
    var scoresLocalStorage = JSON.parse(localStorage.getItem("scores"));
    if (scoresLocalStorage !== null) {
        scores = scoresLocalStorage;
    }
    welcome();
}

// Shows welcome screen with start button and leaderboard button
function welcome() {
    titleEl.textContent = "Welcome to Angel's Web Dev Quiz!";
    titleEl.setAttribute("style", "color:#1B1725");
    makeVisible("welcome");
}

// playGame function (called every second) shows screen to display questions, current score, and time left to user
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

// If button label matches correct answer in associated question add 1 to currentScore. Else, subtracts 15 seconds from timeLeft
function checkAnswer0() {
    isCorrectDivEl.setAttribute("style", "display: inline");
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
    isCorrectDivEl.setAttribute("style", "display: inline");
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
    isCorrectDivEl.setAttribute("style", "display: inline");
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
    isCorrectDivEl.setAttribute("style", "display: inline");
    if (questions[currentQuestion].correct === 3) {
        currentScore++;
        rightOrWrongEl.textContent = "Correct!";
    } else {
        timeLeft = timeLeft - 15;
        rightOrWrongEl.textContent = "Wrong..."
    }
    currentQuestion++;
}

// Displays "Game over!" screen and asks user "Would you like to save your score?" (yes or no)
function gameOver() {
    titleEl.textContent = "Game Over";
    finalScoreEl.textContent = "Final Score: " + currentScore;
    makeVisible("gameOver");
}

// Displays "Save score" screen with input for initials
function saveScore() {
    titleEl.textContent = "Save Score";
    makeVisible("submitScore");
    noInitials.setAttribute("style", "display:none");
}

// If input > 0 and input less than 4, saves score to scores array and save scores array to localStorage
function storeScore(event) {
    console.log(event);
    event.preventDefault();
    var initials = initialsEl.value.trim();

    if (initials == "") {
        noInitials.setAttribute("style", "display:inline");
        noInitials.textContent = "No initials. Please try again.";
        return;
    }

    if (initials.length > 4) {
        noInitials.setAttribute("style", "display:inline");
        noInitials.textContent = "Initials too long. Please try again.";
        return;
    }

    var score = {
        initials: initials,
        score: currentScore
    };

    scores.push(score);
    scores.sort((a, b) => b.score - a.score);
    
    localStorage.setItem("scores", JSON.stringify(scores));

    welcome();
}


// Displays screen with list of high scores. Also has "Back to main menu" and "Delete Leaderboard" button
function highScores() {
    titleEl.textContent = "Leaderboard";
    makeVisible("highScore");
    for (var i = 0; i < scores.length; i++) {
        var li = document.createElement("li");
        li.textContent = scores[i].initials + " - " + scores[i].score;
        leaderboardEl.appendChild(li);
        leaderboardScoreEls.push(li);
    }
}

// Clears learderboard when user returns to main menu
function clearHighScores() {
    for (var i = leaderboardScoreEls.length - 1; i >= 0; i--) {
        var child = leaderboardScoreEls.pop();
        leaderboardEl.removeChild(child);
    }
    welcome();
}

// Deletes leaderboard from local storage and scores array
function deleteLeaderboard() {
    var deleteScores = confirm("Are you sure that you want to delete the leaderboard?");
    if (deleteScores) {
        scores = [];
        localStorage.setItem("scores", JSON.stringify(scores));

        for (var i = leaderboardScoreEls.length - 1; i >= 0; i--) {
            var child = leaderboardScoreEls.pop();
            leaderboardEl.removeChild(child);
        }
    }
    
}

// Makes all screens except for screen with id of input invisible
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

// Event listeners
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


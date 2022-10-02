// Always available variables:
//      - Header/question section 
//              - sometimes question
//              - sometimes 'Good job! Save score'
var titleEl = document.getElementById("title");
//      - button section
//              - sometimes buttons answers
//              - sometimes buttons for start over/high score
//              - sometimes input for saving initials and high score
var buttonsEl = document.getElementById("buttons");
//      - questions array (objects):
//              - question (string)
//              - array of possible answers (4 string)
//              - correct answer (index/number)
var quesions = [{
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
    correct: 1
}, {
    // question 10
    question: "When you want to listen for a key down event, what do you put first element of the eventListener function?",
    answers: ["click", "keydown", "submit", "keyup"],
    correct: 1
}];

var question = {
    // question 9
    question: "When you want to access a section of your webpage using a nav bar, what is most convenient way to label the desired section?",
    answers: ["id=", "class=", "data-___=", "src="],
    correct: 1
};
//      - high scores array (local storage variable)
var highScores = [];
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


// init function (initialize website):
//      - check saved high scores and save to high scores array
//      - calls welcome to website function

// welcome function:
//      - create screen with screen with:
//              - title: "Wecome to Code Quiz"
//              - button1: "start game" 
//                     - when clicked, call initializeGame function
//              - button2: "high scores" <--- not required
//                     - when clicked, call highScores function

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

// when click event listener to button section
//      - if object type is a button:
//              - if labeled start, call initalizeGame function
//              - if labeled score, call highScores function
//              - if labeled answer, call checkAnswers function
//              - if labeled yes, call saveScore function
//              - if labeled no, call welcome function
//              - if labeled save, call storeScore
//              - if labelded back, call welcome function

// checkAnswers function:
//      - if button label matches correct answer in associated question add 1 to currentScore
//      - else, subtract 15 seconds from timeLeft

// gameOver function:
//      - Display screen with:
//              - title: "Game over!"
//              - subtitle: "Would you like to save your score?"
//              - button1: "yes"
//                      - calls saveScore function
//              - button2: "no"
//                      - calls welcome function


// saveScore function:
//      - Display screen with:
//              - title: "Save score"
//              - input1, label: Initials
//              - text: "score: " + currentScore
//              - button1: "save"
//      - when save button clicked, call storeScore function

// storeScore function
//      - save score to highScore array. 
//      - save highScore array to localStorage


// highScores function: 
//      - Display screen with:
//      - list of high scores:
//              - intials score
//      - button1: "Back to main"
//              - when pressed, calls welcome function

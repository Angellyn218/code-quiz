// Always available variables:
//      - Header/question section 
//              - sometimes question
//              - sometimes 'Good job! Save score'
//      - button section
//              - sometimes buttons answers
//              - sometimes buttons for start over/high score
//              - sometimes input for saving initials and high score
//      - questions array (objects):
//              - question (string)
//              - array of possible answers (4 string)
//              - correct answer (index/number)
//      - high scores array (local storage variable)
//      - timeLeft --> int
//      - currentScore --> int
//      - currentQuestion --> int/index
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

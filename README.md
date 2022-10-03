# code-quiz

## Description

Practice and study allow students to improve their understanding of the material that they are learning. One of the best ways for a student to confirm their understanding is by testing their knowledge on the material. This was one of the purposes of this website: to help students who are learning web developement to practice their material. Students who want to test and solidify their knowledge on HTML, CSS, Javascript, or any else related to web developement.

Another benefit of creating this website was my ability to apply the new knowledge that I learned during the 4th week of my coding bootcamp. I learned to incorporate DOM elements, use local storage, setting timers, and so much more! I am thankful that I was able to practice these new skills and have a website to reference whenever I want to refresh my knowledge on web developement. Additionally, I got a lot better at pseudocoding, so I added a lot to this project which helped immensely while writing my JavaScript code.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Code](#code)
- [Credits](#credits)
- [License](#license)

## Installation

1. Click on green code button and copy the ssh link
2. Open up terminal or git bash, then navigate to where you want the repository to be placed.
3. Type out "git clone (ssh link)"

## Usage

![Gif of quiz website being used](assets/images/code-quiz.gif)

The best way to use this website is as a quiz to test your own web dev knowledge. The easiest way to use it is by opening the website using 'Visual Studio Code'. To do this, right click on the index.html file and click on "Open in Default Browser." You can also open it using [my website](https://angellyn218.github.io/code-quiz/).

When the website opens up, you should see the following screen:

![website screen with 'Welcome to Angel's Web Dev Quiz' title, a button labeled 'Start Game', and a button labeled 'High Scores'](assets/images/initial-screen.png)

The first button, which is labeled 'Start Game', will start the quiz for you. Once started, you will get prompted by a series of questions in a screen similar to the one seen below:

![website screen with a question from the quiz, a score, timer, and buttons with answers](assets/images/questions.png)

If answered correctly, 1 point is added to your score. If answered incorrectly, 15 seconds is subtracted from your score. The bottom of the screen will display 'Correct!' if you chose the right answer and 'Wrong...' otherwise.

Once all the questions have been answered or the timer runs out, the 'Game Over' screen will be displayed.

![website screen with 'Game Over' title, final score, the header 'Would you like to save your score?', and buttons with 'yes' and 'no'](assets/images/game-over.png)

The 'no' button takes you back to the welcome screen. The yes 'button' takes you to the following save score screen.

![website screen with 'Save Score' title, an input box for initials, and a submit button](assets/images/save-score.png)

Within the input box, you can type in your initials, then press submit which returns you to the welcome screen. You score is saved to the local storage and the Leaderboard.

The other button on the welcome screen, which is labeled 'High Scores', can be clicked on to get to the leaderboard.

![website screen with 'Leaderboard' title, a button labeled 'Back to main menu', and a button labeled 'Delete leaderboard'](assets/images/save-score.png)

The first button takes the user back to the 'Welcome screen'. The secont button labeled 'Delete Leaderboard' deletes the leaderboard after confirming with the user. 

## Code

During this project, I created a lot of different functions to help me in each step of going through. One piece of code that I was proud of and found very helpful was the following code:

```
var screensEls = document.getElementsByClassName("screens");

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
```

This function's purpose is to make only one div section visible at a time. It takes in an input sting which should match the id of one div sections on the website. It iterates through each screen. If the screen id matches, then it sets the display to inline. Otherwise, it sets the display to none. This function not only makes the desired screen visible, it also makes sure that all other screens are not visible.

Since all screens from the welcome to save score screen are all in the index.html file, I had to make sure that each all others that were not being used at the time could not be seen by the user. I used this function in nearly all of my other JavaScript functions. While not completely necessary, it added an extra level of assurance that only one div screen was showing at a time. 

In addition to its usefulness in my code, it taught me to apply the skills of setting attributes and accessing the DOM which was new content that we learned during week 4 of my coding bootcamp.

## Credits

getElementByClassName: https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp

sort Array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

clearInterval: https://www.w3schools.com/jsref/met_win_clearinterval.asp 

color palette generator: https://coolors.co/1b1725-6ea4bf-87b37a-f7a072-9ba7c0

hex code color: https://www.w3schools.com/css/css_colors_hex.asp

removeChild: https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild


## License

Please refer to LICENSE in this repository.


## Badges

![badmath](https://img.shields.io/github/repo-size/Angellyn218/password-generator?style=plastic)
![badmath](https://img.shields.io/github/license/Angellyn218/password-generator?style=plastic)
![badmath](https://img.shields.io/github/languages/top/Angellyn218/password-generator?style=plastic)



'use strict'


var score = 0;

// This is for my welcome message
var welcomeName = prompt('Welcome to my website! My name is Ryan what is your name?');
var WelcomeMsg = alert('Hi ' + welcomeName + '! Glad to see you here! I have a couple questions for you!')


// // These are 5 yes or no questions using if statements


function yesOrNo(question, correct) {
    var answer = prompt(question);
    if (answer === correct) {
        alert('Correct');
        score++;
    } else {
        alert('Wrong');
    }
    return answer;
}
yesOrNo('Do I like soccer? ', 'yes');

yesOrNo('Do I like video games? ', 'yes');

yesOrNo('Do I want to become a programmer? ', 'yes');

yesOrNo('Am I from Washington? ', 'yes');

yesOrNo('Have I ever left the country? ', 'yes');


// this is a number question
function sports(question) {
    var question = prompt('How many different sports did I play? ');
    var numQCorrect = 3;
    var numQGuess = Number(question);
    var numQAttempt = 0;
    for (numQAttempt = 0; numQAttempt <= 3; numQAttempt++) {
        numQGuess = Number(question);
        if (numQGuess === numQCorrect) {
            alert('Yup! I played soccer, baseball, and basketball');
            score++;
            break;
        } else if (numQGuess < 3) {

            numQ = prompt('Too low, please guess again!');

        } else if (numQGuess > 3) {

            numQ = prompt('Too high, please guess again!');

        }
    }
}

sports('how many different sports did i play?');

// this is an array question
var counter = 6;

function carArray(array, arrayQ, counter) {

    var theyWereRight = false;

    counterloop: while (counter > 0 && theyWereRight === false) {
        var answer = prompt(arrayQ);
        counter--;
        for (var i = 0; i < array.length; i++) {
            if (answer === array[i]) {
                theyWereRight = true;
                alert('Yep');
                score ++;
                break counterloop;
            }

        }
        if (theyWereRight === false) {
            alert('try again');
        }
    }
}
carArray(['maclaren 720 s', 'subaru sti', 'porsche 911 gt3', 'nissan gtr r35', 'volswagen r32', 'shelby cobra gt500', 'ford focus rs', 'volkswagen beetle mk1', 'lamborghini aventador SVJ', 'lexus lfa'], 'What is one of my favorite cars?', 6);

alert('Thank you for playing! You scored ' + score + ' out of 7! Hope you learned a little bit more about me!')
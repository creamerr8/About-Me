'use strict'


var score = 0;

// This is for my welcome message
var welcomeName = prompt('Welcome to my website! My name is Ryan what is your name?');
var WelcomeMsg = alert('Hi ' + welcomeName + '! Glad to see you here! I have a couple questions for you!')


// // These are 5 yes or no questions using if statements
// var q1 = prompt('Do I like soccer?').toLocaleLowerCase();
// if (q1 === 'yes') {
//     alert('Yup! Thats Right');
//     score++;
// } else {
//     alert('Sorry, I actually love soccer');
// }


// var q2 = prompt('Do I like video games?').toLocaleLowerCase();
// if (q2 === 'yes') {
//     alert('I love videogames!');
//     score++;
// } else {
//     alert('Sorry, i do like videogames');
// }


// var q3 = prompt('Do I want to become a programmer?').toLocaleLowerCase();
// if (q3 === 'yes') {
//     alert('Yes I do!');
//     score++;
// } else {
//     alert('Actually I i do want to be a programmer');
// }

// var q4 = prompt('Are I from Washington?').toLocaleLowerCase();
// if (q4 === 'yes') {
//     alert('I was born and have lived there all my life!');
//     score++;
// } else {
//     alert('Wrong, i was born and still live in Washington');
// }

// var q5 = prompt('Have I ever left the country?').toLocaleLowerCase();
// if (q5 === 'yes') {
//     alert('Yes, I have only been to Canada');
//     score++;
// } else {
//     alert('Nope, I have been to Canada, but I\'d love to go to more places');
// }

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

yesOrNo('Are I from Washington? ', 'yes');

yesOrNo('Have I ever left the country? ', 'yes');



// This is a number question using a for loop 
// var numQ = prompt('How many different sports did I play?');
// var numQCorrect = 3;
// var numQGuess = Number(numQ);
// var numQAttempt;

// for (numQAttempt = 1; numQAttempt <= 3; numQAttempt++) {
//     numQGuess = Number(numQ);
//     if (numQGuess === numQCorrect) {
//         alert('Yup! I played soccer, baseball, and basketball');
//         score++;
//         break;
//     } else if (numQGuess < 3) {
//         numQ = prompt('Too low, please guess again!');
//     } else if (numQGuess > 3) {
//         numQ = prompt('Too high, please guess again!');
//     }
// }
//alert('I played 3 sports');
var question = 'How many different sports did I play? ';
var numQGuess = Number(question);

function sports(question) {
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

sports(question);

// I tried to use a nested loop for my array question but it always returned the wring alert so i got help from bryant but i wanted to leave this code in

//   var array = ['maclaren 720 s', 'subaru sti', 'porsche 911 gt3', 'nissan gtr r35', 'volswagen r32', 'shelby cobra gt500', 'ford focus rs', 'volkswagen beetle mk1', 'lamborghini aventador SVJ', 'lexus lfa']
//   var arrayQAttempt;

//   attemptLoop: for (arrayQAttempt = 0; arrayQAttempt <= 6; arrayQAttempt++) {
//     var arrayQ = prompt('What is one of my favorite cars?');

//     answerLoop: for (var index = 0; index < array.length; index ++) {
//       arrayQ = arrayQ.toLowerCase()
//       if (arrayQ === arrayQ[index]) {
//         console.log(arrayQ);
//         alert('Yup that is one of my favorites!');
//         score++;
//         break attemptLoop;
//       } 

//   }
//   if (arrayQAttempt < 6) {
//     alert('wrong')
//   }
// }

// this is an array question using a do while loop

// var attempts = 0;

// do {
//     var array = ['maclaren 720 s', 'subaru sti', 'porsche 911 gt3', 'nissan gtr r35', 'volswagen r32', 'shelby cobra gt500', 'ford focus rs', 'volkswagen beetle mk1', 'lamborghini aventador SVJ', 'lexus lfa'];
//     var arrayQ = prompt(' what is one of my favorite cars?').toLowerCase();
//     if (array[0] === arrayQ || array[1] === arrayQ || array[2] === arrayQ || array[3] === arrayQ || array[4] === arrayQ || array[5] === arrayQ || array[6] === arrayQ || array[7] === arrayQ || array[8] === arrayQ || array[9] === arrayQ || array[10] === arrayQ) {
//         alert('Yup that is one of my favorites!')
//         break;

//     } else if (!arrayQ) {
//         alert('Please input on of my favorite cars')
//     } else {
//         alert('Nope, not one of my favorite cars')
//     }
//     attempts++
// } while (attempts < 6) {

// }
// alert('The cars that i like are ' + array);
// console.log(score);
// alert('Thnks for playing ' + welcomeName + '! Your score was ' + score + '!');
// var array = ['maclaren 720 s', 'subaru sti', 'porsche 911 gt3', 'nissan gtr r35', 'volswagen r32', 'shelby cobra gt500', 'ford focus rs', 'volkswagen beetle mk1', 'lamborghini aventador SVJ', 'lexus lfa'];

var counter = 6;

function carArray(array, arrayQ, counter) {

    var theyWereRight = false;

    counterloop: while (counter > 0 && theyWereRight === false) {
        var answer = prompt(arrayQ);
        counter--;
        for (var i = 0; i < array.length; i++) {
            console.log(answer, array[i]);
            if (answer === array[i]) {
                theyWereRight = true;
                alert('Yep');
                break counterloop;
            }

        }
        if (theyWereRight === false) {
            alert('try again');
        }
    }
}
carArray(['maclaren 720 s', 'subaru sti', 'porsche 911 gt3', 'nissan gtr r35', 'volswagen r32', 'shelby cobra gt500', 'ford focus rs', 'volkswagen beetle mk1', 'lamborghini aventador SVJ', 'lexus lfa'], 'What is one of my favorite cars?', 6);
function runGame() {
    let guessString = "";
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;

    const randomNumber = Math.random() * 100; //creates random non integer b/q 0-99.99...
    const randomInteger = Math.floor(randomNumber);
    const target = randomInteger + 1; //gives integer b/w 1-100
   
    do {
        guessString = prompt("I am thinking of a number in the range 1 to 100.\n\nWhat is the number?")//\n means new line

        if (guessString === null) {
            return;
        }
        
        guessNumber = +guessString; //+ prefix turns string to a number
        numTries++;
        correct = checkGuess(guessNumber, target);//return false if no match; true if match
    } while (!correct)//will loop as long as its not true
        alert("You got it! The number was " + target + ".\n\nIt took you " + numTries + " tries to guess correctly.");
};

function checkGuess(guessNumber, target) {
    let correct = false;

    if (isNaN(guessNumber)) {
        alert("You have not entered a number.\n\nPlease enter a number in the 1-100 range.");

    } else if ((guessNumber < 1) || (guessNumber > 100)) {
        alert("Please enter an integer in the 1-100 range.");

    } else if (guessNumber > target) {
        alert("Your Number is too large!")

    } else if (guessNumber < target) {
        alert("Your number is too small!");

    } else {
        correct = true; //only block that will reassign correct variable to true
    }

    return correct;//this value goes back to the runGame function where checkGuess was called
};
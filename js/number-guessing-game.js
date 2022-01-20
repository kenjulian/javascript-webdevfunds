function runGame() {
    let guessString = "";
    let guessNumber = 0;
    let correct = false;

    const randomNumber = Math.random() * 100; //creates random non integer b/q 0-99.99...
    const randomInteger = Math.floor(randomNumber);
    const target = randomInteger + 1; //gives integer b/w 1-100
   
    do {
        guessString = prompt("I am thinking of a number in the range 1 to 100.\n\nWhat is the number?")//\n means new line
        guessNumber = +guessString; //+ prefix turns string to a number
        correct = checkguess(guessNumber, target);//return false if no match; true if match
    } while (!correct);
}
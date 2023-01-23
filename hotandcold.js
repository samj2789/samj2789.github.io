//displays the output
function display() {
    feedback.innerHTML = output;
}

//generates mystery number
function generateNumber() {
    mysteryNumber = Math.floor(Math.random() * 100) + 1;
    return mysteryNumber;
}

//starts the page
function initialize(){
    feedback = document.getElementById("output");
    generateNumber();
    numberOfGuesses = 5;
    guess = 50;
    displayGuess = guess;
    log = "";
    output = "Guesses Remaining: " + numberOfGuesses + " || Current Guess: " + displayGuess + " || Log: " + log;
    numGuessed = false;
    display();
}

//adds to or subtracts from the current guess
function operation(num){ 
    if(!numGuessed) {
        if(numberOfGuesses == 0) { 
            output = "No more guesses remaining";
        }
        else{
            displayGuess += num;
            output = "Guesses Remaining: " + numberOfGuesses + " || Current Guess: " + displayGuess + " || Log: " + log;
        }
    }
    display();
}

//Clears guess
function clear() {
    if(!numGuessed) {
        if(numberOfGuesses == 0) {
            output = "No more guesses remaining";
        }
        else {
            displayGuess = guess;
            output = "Guesses Remaining: " + numberOfGuesses + " || Current Guess: " + displayGuess + " || Log: " + log;
        }
    }
    display();
}

//commits the guess
function committ() {
    if(!numGuessed) {
        if(numberOfGuesses == 0) {
            output = "No more guesses remaining";
        }
        else {   
            guess = displayGuess;
            numberOfGuesses--;
            message = "";
            distance = Math.abs(mysteryNumber - guess);
            if (distance = 0) {
                numGuessed = true;
                output = "You guessed the correct number";
            }
            else if (distance <= 5) {
                output = "Very hot";
                message = "Very hot";
            }
            else if (distance <= 8) {
                output = "Hot";
                message = "Hot";
            }
            else if (distance <=15) {
                output = "Very Warm";
                message = "Very Warm";
            }
            else if (distance <= 20) {
                output = "Warm";
                message = "Warm";
            }
            else if (distance <= 30) {
                output = "Cool";
                message = "Cool";
            }
            else if (distance <= 40) {
                output = "Very Cool";
                message = "Very Cool";
            }
            else if (distance <= 55) {
                            
                output = "Cold";
                message = "Cold";
            }
            else {
                output = "Very Cold";
                message = "Very Cold";
            }
        }
        log += guess + " -" + message + ", ";
    }
}
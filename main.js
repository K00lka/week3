'use strict';
function randomNumber() {
    const targetNumber = Math.floor(Math.random() * 100) + 1;
    return targetNumber
} 

function introduction(){
    alert("Welcome to the Number Guessing Game!");
    alert("I have selected a random integer number between 1 and 100.");
    alert("Your task is to guess the number within 10 attempts.");
    alert("You can earn points based on the number of attempts you take.");
    alert("Good luck!");
}

function userGuess() {
    let guess = prompt("Enter an integer number between 1 and 100:");
    let guessNumber = parseFloat(guess);
    if (guess === null) {
        // User pressed Cancel
        alert("Game cancelled. Goodbye!");
        throw new Error("Game cancelled by user.");
    }
    if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100 || !Number.isInteger(guessNumber) ) {
        alert("Please enter a valid integer number between 1 and 100.");
        return userGuess();
    }
    if (guessNumber === 69){
        alert("Grow up!");
    }
    return guessNumber;
}

function checkGuess (guess, targetNymber){
    if (guess < targetNymber) {
        alert("Too low! Try again.");
        return false;
    } else if (guess > targetNymber) {
        alert("Too high! Try again.");
        return false;
    } else {
        alert("Congratulations! You've guessed the number!");
        return true;
    }
}

function resetGame() {
    const reset = confirm("Do you want to play again?");
    if (reset) {
        game();
    } else {
        alert("Thank you for playing!");
    }
}



function game() {
    let targetNumber =randomNumber();
    let guess = userGuess();
    let result = checkGuess(guess, targetNumber);
    const maxAttempts = 10;
    let attempts = 1;
    let points = 110;
    while (!result && attempts < maxAttempts) {
        attempts++;
        points -= 10;
        const guess = userGuess();
        result = checkGuess(guess, targetNumber);
    }
   while (attempts >= maxAttempts) {
        alert("Sorry, you've used all your attempts. The number was " + targetNumber + ".");
        return;
    }
    alert("You guessed the number in " + attempts + " attempts! Your score is " + points + " points.");
    resetGame();
    
}


introduction();
game()
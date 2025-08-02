'use strict';
function randomNumber() {
    const targetNumber = Math.floor(Math.random() * 100) + 1;
    return targetNumber
} 

function userGuess() {
    let guess = parseFloat(prompt("Enter an integer number between 1 and 100:"));
    if (isNaN(guess) || guess < 1 || guess > 100 || !Number.isInteger(guess) ) {
        alert("Please enter a valid integer number between 1 and 100.");
        return userGuess();
    }
    return guess;
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
}



game()
console.log("loaded");

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessesleft = 10;
var wins = 0;
var losses = 4;
var guessedLetters = [];
var computerGuess;

function startGame(){
    computerGuess = letters[Math.floor(Math.random() = letters.length)];
    console.log(computerGuess);
    guessesLeft = 10;
    guessedLetters = [];

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    document.getElementById("guessed-letters").innerHTML = guessedLetters;

}

document.onkeyup = function(event) {
    
}
startGame();



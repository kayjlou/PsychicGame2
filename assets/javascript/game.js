//Letters that computer can choose from
let letters = ["a", "b", "c", "d", "k", "j"];

//Array that holds letters that are guessed
let lettersGuessed = [];

let computerGuess = null;

//Initialize guessesLeft
let guessesLeft = 5;

//Initialize wings & losses
let wins = 0;
let losses = 0;

//function updates the remaining guesses
const updateGuessesLeft = () => {
  document.querySelector("#guessesLeft").innerHTML = guessesLeft;
};

// function to generate random letter
const getRandLetter = () => {
  computerGuess = letters[Math.floor(Math.random() * letters.length)];
};

//Update arry of hat user has guessed
const updateLettersGuessed = () => {
  document.querySelector("#guesses").innerHTML = lettersGuessed.join(", ");
};

//Function to reset everything
const reset = () => {
  guessesLeft = 5;
  lettersGuessed = [];
  getRandLetter();
  updateGuessesLeft();
  updateLettersGuessed();
};
//Run when page is loaded
getRandLetter();
updateGuessesLeft();

//When key is pressed computer generates random letter
document.onkeydown = function(event) {
  console.log(computerGuess);

  //Decrease guess by one
  guessesLeft--;

  //Set userGuess as what key is pressed
  var userGuess = event.key;

  console.log("user guess:" + userGuess);

  //Push to array what user has already guessed
  lettersGuessed.push(userGuess);
  console.log(lettersGuessed);

  //Run update functions
  updateGuessesLeft();
  updateLettersGuessed();

  // document.querySelector("#guesses").append(lettersGuessed + " ");

  //check userGuess === computerGuess
  if (userGuess === computerGuess && typeof userGuess === "string") {
    //Increase wins and update HTML
    wins++;
    document.querySelector("#wins").innerHTML = wins;

    //Once they Win reset the game
    reset();
  }

  //If they run out of guesses
  if (guessesLeft === 0) {
    //Update losses and reflect in html
    losses++;
    document.querySelector("#losses").innerHTML = losses;

    //Then reset
    reset();
  }
};

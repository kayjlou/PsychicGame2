//Letters that computer can choose from
let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "x",
  "y",
  "z"
];

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

//Update array if user has guessed
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

  //Set userGuess as what key is pressed
  let userGuess = event.key;

  console.log("user guess:" + userGuess);

  //Added check if they already guessed letter
  let check = lettersGuessed.includes(userGuess);

  //Push to array what user has already guessed if it is a valid letter and not already guessed
  if (letters.includes(userGuess) && check === false) {
    lettersGuessed.push(userGuess);
    console.log(lettersGuessed);
    guessesLeft--;
  }
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

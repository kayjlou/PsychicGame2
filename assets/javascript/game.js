//Letters that computer can choose from
var letters = ["a", "b", "c", "d", "k", "j"];

//Function for computer to get a random letter
const getRandom = () => {
  let computerGuess = letters[Math.floor(Math.random() * letters.length)];
  console.log("computer guess:" + computerGuess);
  //creates a list element for computer guess
};

//Initial of random letter

//Initial all resets and intial valures
const init = _ => {
  guesses: 5;
  document.querySelector("#guesses").textContent = guesses;
  //Other reset functions
};

//When key is pressed computer generates random letter
document.onkeyup = function(event) {
  var lettersGuessed = [];
  var userGuess = event.key;
  console.log("user guess:" + userGuess);
  lettersGuessed.push(userGuess);
  console.log(lettersGuessed);

  // document.querySelector("#guesses").append(lettersGuessed + " ");
};

//Function to check userGuess === computerGUess
checkGuesses = () => {
  if (userGuess === computerGuess) {
    updateWins();
  } else {
    updateLosses();
  }
};

//Function to update losses
updateLosses = () => {
  losses++;
};

//Funtion to update wins
updateWins = () => {
  wins++;
};

//Function to Restart game
resetGame = () => {
  lettersGuessed = [];
  guesses = 5;
  wins = 0;
  losses = 0;
  getRandom();
};

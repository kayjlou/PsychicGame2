//Letters
var letters = ["a", "b", "c", "d", "k", "j"];

//Array containing letters guessed by user
var lettersGuessed = [];

const getRandomNum = () => {
  let computerGuess = letters[Math.floor(Math.random() * letters.length)];
  console.log("computer guess:" + computerGuess);
  let randLi = document.createElement("li");
  randLi.textContent = computerGuess;
};

//When key is pressed computer generates random letter
document.onkeyup = function(event) {
  var userGuess = event.key;
  console.log("user guess:" + userGuess);
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
  wins = 0;
  losses = 0;
};

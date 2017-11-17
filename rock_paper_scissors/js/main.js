var humanScore = 0;
var computerScore = 0;

var humanPlay = "";
var computerPlay = "";

var bestOfThree = 0;

function play(humanPlay, computerPlay) {
  bestOfThree += 1;
  console.log("ROUND #" + bestOfThree + "===========================================");
  console.log("You played " + humanPlay + "." + " The bot played " + computerPlay);
  if (humanPlay === computerPlay) {
    console.log("you tied. :/");
  } else if (humanPlay === "paper" && computerPlay === "rock" || humanPlay === "rock" && computerPlay === "scissors" || humanPlay === "scissors" && computerPlay === "paper") {
    console.log("You win! :)");
    humanScore += 1;
  } else {
    console.log("You lose! :(");
    computerScore += 1;
  }
  // Round Summary of scores
  console.log("You have " + humanScore + " points");
  console.log("The bot " + computerScore + " points");
}

function pickRandomPlay() {
  var humanNum = Math.floor((Math.random() * 3) + 1);
  var computerNum = Math.floor((Math.random() * 3) + 1);

  if (humanNum === 1) {
    humanPlay = "rock";
  } else if (humanNum === 2) {
    humanPlay = "paper";
  } else {
    humanPlay = "scissors";
  }

  if (computerNum === 1) {
    computerPlay = "rock";
  } else if (computerNum === 2) {
    computerPlay = "paper";
  } else {
    computerPlay = "scissors";
  }
}

// Main Program Execution
// Round #1
pickRandomPlay();
play(humanPlay, computerPlay);
// Round #2
pickRandomPlay();
play(humanPlay, computerPlay);

// It's all over!
if (humanScore === 2 || computerScore === 2) {
  console.log("It's all over!!!!!!  But let's play a third round anyway!");
}

// Final Play - Round #3
pickRandomPlay();
play(humanPlay, computerPlay);

if (humanScore === 3) {
  console.log("OMG - what luck!!!!  Humans take it all!!!!");
}

if (computerScore === 3) {
  console.log("OMG - Computers dominate!!!!  Oh the humanity!!!!!");
}

if (humanScore > computerScore) {
  console.log("You win best out of three! :)");
} else if (computerScore > humanScore) {
  console.log("Computer wins best out of three!  :(");
} else {
  console.log("It's a draw!  Amazing!!");
}

console.log("Final score: Human:" + humanScore + " Computer:" + computerScore + "!");

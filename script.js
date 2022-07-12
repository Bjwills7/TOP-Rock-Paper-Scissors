// button selectors
let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");

// where scores are displayed
let computerWins = document.querySelector('.computerScore');
let playerWins = document.querySelector('.playerScore');
let roundNumber = document.querySelector('.roundNumber');

// where scores are stored
let pWin = 0;
let cWin = 0;
let rNum = 0;

// where results of round and game are displayed
let textOutput = document.querySelector('.textOutput');

// calls playround when a button is pressed
rockButton.addEventListener('click', function() {rock()});
paperButton.addEventListener('click', function() {paper()});
scissorsButton.addEventListener('click', function() {scissors()});



// Returns random string from rpsArray
function computerPlay() {
    let rpsArray = ['rock', 'paper', 'scissors'];
    let computerSelection = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    return computerSelection;
}

// determines who wins a round and updates scores
function playRound(playerSelection, func) {
    let computerSelection = func();
    if (playerSelection === computerSelection) {
        textOutput.textContent = `Its a tie! Please make next selection.`;
        textOutput.append();
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')) {
        pWin++
        playerWins.textContent = pWin;
        textOutput.textContent = `Round Won! ${playerSelection} beats ${computerSelection}! Please make next selection`;
        textOutput.append();
    } else {    
        cWin++
        computerWins.textContent = cWin;
        textOutput.textContent = `Round Lost! ${computerSelection} beats ${playerSelection}! Please make next selection.`;
        textOutput.append();
    }
    rNum++;
    roundNumber.textContent = rNum;
    playerWins.append();
    computerWins.append();
    roundNumber.append();
    if (pWin === 5) {
        reset();
        textOutput.textContent = 'Game Over! You Win!';
        textOutput.append();
    } else if (cWin === 5) {
        reset();
        textOutput.textContent = 'Game Over! You Lose!';
        textOutput.append();
    }
}

// resets scores
function reset() {
    pWin = 0;
    cWin = 0;
    rNum = 0;
    playerWins.textContent = pWin;
    computerWins.textContent = cWin;
    roundNumber.textContent = rNum;
    playerWins.append();
    computerWins.append();
    roundNumber.append();
}

// button functions
function rock() {
    playRound('rock', computerPlay);
}
function paper() {
    playRound('paper', computerPlay);
}
function scissors() {
    playRound('scissors', computerPlay);
}


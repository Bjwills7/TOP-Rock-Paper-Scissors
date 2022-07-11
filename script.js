// Returns random string from rpsArray
function computerPlay() {
    let rpsArray = ['rock', 'paper', 'scissors'];
    let computerSelection = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    return computerSelection;
}

// Returns winner of a round
function playRound(playerSelection, func) {
    let computerSelection = func();
    let win = 0;
    if (playerSelection === computerSelection) {
        console.log("It's a tie!")
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        console.log(`You win, ${playerSelection} beats ${computerSelection}`);
        win = 1;
    } else {    
        console.log(`You lose, ${computerSelection} beats ${playerSelection}!`);
        win = 2;
    }
    return win;
}

// Gets player input and plays 5 rounds. Ties do not count as a round
function game() {
    let computerWins = 0;
    let playerWins = 0;
    while (playerWins + computerWins < 5) {
        let playerSelection = prompt('Enter rock, paper, or scissors.').toLowerCase();
        let round = playRound(playerSelection, computerPlay);
        if (round === 1) {
            playerWins += 1;
        } else if (round === 2) {
            computerWins += 1;
        }
    }
    if (playerWins > computerWins) {
        console.log('You win the game!')
    } else {
        console.log('You lose the game!')
    }
}
// since hand options are fixed, we'll use a global array for them
const HAND = ['rock', 'paper', 'scissors'];

// computer needs to choose a hand 
// we can do this with a function
function getComputerChoice() {
    // use random to generate a random number based on the lenght of our array and floor to round it
    let computerChoice = HAND[Math.floor(Math.random() * HAND.length)];
    return computerChoice;
}
// compare the two hands 
function playRound(computerChoice, playerChoice) {
    if (isTie(computerChoice, playerChoice)) {
        result.textContent = "It's a tie this round"
    } else {
        let winner = compareHands(computerChoice, playerChoice);
        if (winner) {
            result.textContent = "Computer wins this round"
            computerScore += 1
        }else {
            result.textContent = "Player wins this round"
            playerScore =+ 1
        } 
   }
}

// helper function to decide winning hand
function compareHands(hand1, hand2) {
    if ((hand1 === 'rock' && hand2 === 'scissors') ||
        (hand1 === 'scissors' && hand2 === 'paper') ||
        (hand1 === 'paper' && hand2 === 'rock')) {
        return 0;
    } else {
        return 1;
    }
}

// helper function for tie
function isTie(hand1, hand2) {
    if (hand1 === hand2) {
        return true;
    }
    return false;
}

const buttonRock = document.getElementById('rock')
const buttonPaper = document.getElementById('paper')
const buttonScissors = document.getElementById('scissors')
const result = document.getElementById('result')
let playerScore = 0;
let computerScore = 0;

buttonRock.addEventListener('click', () => {
    playRound(getComputerChoice(), 'rock')
})
buttonPaper.addEventListener('click', () => {
    playRound(getComputerChoice(), 'paper')
})
buttonScissors.addEventListener('click', () => {
    playRound(getComputerChoice(), 'scissors')
})


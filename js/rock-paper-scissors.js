// since hand options are fixed, we'll use a global array for them
const HAND = ['rock', 'paper', 'scissors'];

// computer needs to choose a hand 
// we can do this with a function
function getComputerChoice() {
    // use random to generate a random number based on the lenght of our array and floor to round it
    let computerChoice = HAND[Math.floor(Math.random() * HAND.length)];
    return computerChoice;
}

// ask player for their hand
// a function to ask the user for their choice
function playerSelection() {
    // ask user for hand
    let playerChoice = prompt('What hand will you throw? Rock, paper or scissors?', '');

    // make sure the user inputs a valid hand, else call the function again until they do
    if (playerChoice === null) {
        console.log('You cancelled');
    } else if (! HAND.includes(playerChoice.toLowerCase())) {
        console.log('Please enter a valid hand; Choices are rock, paper, scissors')
        playerChoice = playerSelection();
    } 
    return playerChoice;
}   

// compare the two hands 
function playRound(computerChoice, playerChoice) {
    if (isTie(computerChoice, playerChoice)) {
        console.log('It\'s a tie');
        return 'tie';
    } else {
        let winner = compareHands(computerChoice, playerChoice);
        if (winner) {
            console.log('Computer wins with: ' + computerChoice + ' vs ' + playerChoice);
            return 'computer';
        }else {
            console.log('Player wins with: ' + playerChoice + ' vs ' + computerChoice);
            return 'player';
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

// set a game function to play a number of games and print scores
function game() {
    let scoreComputer = 0;
    let scorePlayer = 0;
    let winner;
    for (let i = 0; i < 5; i++) {
        winner = playRound(getComputerChoice(), playerSelection())
        if (winner === 'computer') {
            scoreComputer += 1;
        } else if (winner === 'player') {
            scorePlayer += 1;
        } 
    }
    if (isTie(scoreComputer, scorePlayer)){
        console.log('It\s a tie!');
    }else if (scoreComputer > scorePlayer) {
        console.log('Computer wins by:' + scoreComputer + ' vs ' + scorePlayer);
    } else {
        console.log('Player wins by:' + scorePlayer + ' vs ' + scoreComputer);
    }
}


// give out a result 
console.log(game());
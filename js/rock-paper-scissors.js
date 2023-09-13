// since hand options are fixed, we'll use a global array for them
const HAND = ['rock', 'paper', 'scissors'];

// computer needs to choose a hand 
// we can do this with a function
function getComputerChoice() {
    // use random to generate a random number based on the lenght of our array and floor to round it
    computerChoice = HAND[Math.floor(Math.random() * HAND.length)];
    return computerChoice;
}

// ask player for their hand
// a function to ask the user for their choice
function playerSelection() {

}

// compare the two hands 
function playRound(getComputerChoice, playerSelection) {

}

// give out a result 
console.log(playRound);
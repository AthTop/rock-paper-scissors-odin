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
    if (! HAND.includes(playerChoice.toLowerCase)) {
        console.log('Please enter a valid hand; Choices are rock, paper, scissors')
        playerChoice = playerSelection();
    }
    return playerChoice;
}   

// compare the two hands 
function playRound(getComputerChoice, playerSelection) {

}

// give out a result 
console.log(playRound);
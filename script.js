
//function to get a random computer choice
function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * 3); 
    const choice = choices[randomChoice];

    return choice;
}


function playRound(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    if(playerSelection === computerSelection){

        return "It's a tie!";

    }else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ){
        return `You win! ${playerSelection} beats ${computerSelection}`;

    }else{
        return 'You lose! ${computerSelection} beats ${playerSelection}';
    }

}

function game(){

    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++)
    {
        const playerSelection = prompt("Enter your choice (Rock,Paper,Scissors)");
        const computerSelection = getComputerChoice();

        const roundResult = playRound(playerSelection, computerSelection);

        if(roundResult.includes("win")){

            playerScore++;

        }else if(roundResult.includes("lose")){

            computerScore++;

        }
    }

    if(playerScore > computerScore)
    {
        console.log("You win the game!");

    }else if(playerScore < computerScore)
    {
        console.log("You lose the game!");
    }else{
        console.log("It's a tie game!")
    }
}
   
game();

let humanSelection = null;
let round = 1;
let humanScore=0
let ComputerScore=0
function getComputerChoice(){
    const computerChoice = ["Rock", "Paper", "Scissor"];
    const randomIndex = Math.floor(Math.random() * computerChoice.length);
    computer=computerChoice[randomIndex]
    return( computer)
}

function playRound(humanSelection, computerSelection) {
    console.log("Human:", humanSelection, "Computer:", computerSelection);

    if (humanSelection === computerSelection) {
        console.log("Stop! It’s a tie!");
    } else if (
        (humanSelection === "Rock" && computerSelection === "Scissor") ||
        (humanSelection === "Paper" && computerSelection === "Rock") ||
        (humanSelection === "Scissor" && computerSelection === "Paper")
    ) {
        humanScore++;
        console.log("Human wins this round!");
    } else {
        ComputerScore++;
        console.log("Computer wins this round!");
    }

    console.log(`Score: Human ${humanScore} - Computer ${ComputerScore}`);
}

function getHumanChoice() {
    const choices = document.querySelectorAll('.choice');
    
    choices.forEach(function(choice) {
        choice.addEventListener('click', function() {
            humanSelection = choice.textContent;
            const computerSelection = getComputerChoice(); 
            playRound(humanSelection, computerSelection); 
            
            round++;
            if (round > 5) {
                determineWinner();
            }
        });
    });

}

function determineWinner() {
    if (humanScore > ComputerScore) {
        console.log("The final winner is Human with score:", humanScore);
    } else if (humanScore < ComputerScore) {
        console.log("The final winner is Computer with score:", computerScore);
    } else {
        console.log("The game is a tie!");
    }
}


getHumanChoice();
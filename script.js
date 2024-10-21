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
            updateScores() 
            round++;
            if (round > 5) {
                determineWinner();
                PlayAgain();
            }
        });
    });

}

function updateScores() {
    document.getElementById('human-score').textContent = humanScore;
    document.getElementById('computer-score').textContent = ComputerScore;
}

function determineWinner() {
    if (humanScore > ComputerScore) {
        document.getElementById('result-text').textContent=('The winner is Human')
    } else if (humanScore < ComputerScore) {
        document.getElementById('result-text').textContent=('The winner is Computer')
    } else {
        document.getElementById('result-text').textContent=('The game is a tie!')
    }
}




function PlayAgain(){
    let again=document.getElementById('play-again')
    again.style.display='block'
    again.addEventListener('click',function(){
        resetGame()
        
    })
 }

 function resetGame(){
    round = 1;
    humanScore=0
    ComputerScore=0
    updateScores()

    let again = document.getElementById('play-again');
    again.style.display = 'none';

 }
getHumanChoice();
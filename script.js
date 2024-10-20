function getComputerChoice(){
    const computerChoice = ["Rock", "Paper", "Scissor"];
    const randomIndex = Math.floor(Math.random() * computerChoice.length);
    console.log(computerChoice[randomIndex])
    computer=computerChoice[randomIndex]
    return( computer)
}


function getHumanChoice(){
    PromptPlayer=prompt("please enter your choice" )
    console.log(PromptPlayer)
    return(PromptPlayer)
}


let humanScore=0
let ComputerScore=0

function PlayRound(humanSelection,ComputerSelection){
    console.log("Human:", humanSelection, "Computer:", ComputerSelection);

    if (humanSelection === ComputerSelection) {
        console.log("Stop! It’s a tie!");
    } else if (
        (humanSelection === "Rock" && ComputerSelection === "Scissor") ||
        (humanSelection === "Paper" && ComputerSelection === "Rock") ||
        (humanSelection === "Scissor" && ComputerSelection === "Paper")
    ) {
        humanScore++;
        console.log("Human wins this round!");
    } else {
        ComputerScore++;
        console.log("Computer wins this round!");
    }

}

function PlayGame(){
    for(i=1;i<6;i++){
        console.log("round",i)
        humanSelection=getHumanChoice()
        ComputerSelection=getComputerChoice()
        PlayRound(humanSelection,ComputerSelection)
    }
    if(humanScore>ComputerScore){
        console.log("the final winner is human",humanScore)
    }else{
        console.log("the final winner is Computer",ComputerScore)
    }
   
}
PlayGame()
function getComputerChoice(){
    const computerChoice = ["Rock", "Paper", "Scissor"];
    const randomIndex = Math.floor(Math.random() * computerChoice.length);
    console.log(computerChoice[randomIndex])
    computer=computerChoice[randomIndex]
    return( computer)
}

getComputerChoice()

function getHumanChoice(){
    PromptPlayer=prompt("please enter your choice" )
    console.log(PromptPlayer)
    return(PromptPlayer)
}

getHumanChoice()
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
    if(humanSelection===ComputerSelection){
        console.log("'Stop! It\'s a tie!'")
    }else if(humanSelection=="Rock" && ComputerSelection=="Paper"){
        ComputerScore+=1
    }else if(humanSelection=="Paper" && ComputerSelection=="Scissor"){
        ComputerScore+=1
    }
    else if(humanSelection=="Scissor" && ComputerSelection=="Rock"){
        ComputerScore+=1
    }
    else if(humanSelection=="Scissor" && ComputerSelection=="Paper"){
        humanScore+=1
    }else if(humanSelection=="Paper" && ComputerSelection=="Rock"){
        humanScore+=1
    }else if(humanSelection=="Rock" && ComputerSelection=="Scissor"){
        humanScore+=1
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
function getComputerChoice(){
    const value = Math.floor(Math.random() * 3);
    const options = {
        0: "rock",
        1: "paper",
        2: "scissor"
    }
    return options[value]
}

function playSelection(userChoice, computerChoice){
    if(userChoice === "rock"){
        if(computerChoice === "rock"){
            return message(userChoice, computerChoice, "Tie")
        }
        if(computerChoice === "paper"){
            return message(userChoice, computerChoice, "Lose")
        }
        return message(userChoice, computerChoice, "Win")
    }
    if(userChoice === "paper"){
        if(computerChoice === "rock"){
            return message(userChoice, computerChoice, "Win")
        }
        if(computerChoice === "paper"){
            return message(userChoice, computerChoice, "Tie")
        }
        return message(userChoice, computerChoice, "Lose")
    }
    if(userChoice === "scissor"){
        if(computerChoice === "rock"){
            return message(userChoice, computerChoice, "Lose")
        }
        if(computerChoice === "paper"){
            return message(userChoice, computerChoice, "Win")
        }
        return message(userChoice, computerChoice, "Tie")
    }
}

function message(user, computer, status){
    switch(status){
        case "Tie":
            return `It's a tie! ${user} ties with ${computer}`
        case "Lose":
            return `You Lose! ${computer} beats ${user}`
        default:
            return `You win! ${user} beats ${computer}`
    }
}

(function game(){
    for(let i = 0; i < 5; i++){
        const userChoice= prompt("Enter your choice").toLowerCase()
        const computerChoice = getComputerChoice()
        console.log(playSelection(userChoice, computerChoice))
    }
})() 


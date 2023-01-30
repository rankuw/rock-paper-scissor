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
            comp++;
            return `You Lose! ${computer} beats ${user}`
        default:
            player++;
            return `You win! ${user} beats ${computer}`
    }
}

(function game(){
    for(let i = 0; i < 5; i++){
        const userChoice= prompt("Enter your choice").toLowerCase()
        const computerChoice = getComputerChoice()
        console.log(playSelection(userChoice, computerChoice))
    }
})

const buttons = Array.from(document.querySelectorAll(".btn"))
const result = document.getElementById("result")
const userScore = document.getElementById("user")
const compScore = document.getElementById("comp")
let count = 0, player = 0, comp = 0
buttons.forEach(function (btn){
    btn.addEventListener("click", function(e){
        if(count == 0){
            result.innerHTML = ""
        }
        count++;
        const comChoice = getComputerChoice()
        const text = document.createElement("h1")
        text.classList.add("scoreBoard")
        text.textContent = playSelection(this.id, comChoice)
        result.appendChild(text)
        userScore.textContent = player;
        compScore.textContent = comp;
        if(count == 5){
            console.log("Game over")
            result.innerHTML = ""
            const text = document.createElement("h1")
            text.classList.add("scoreBoard")
            userScore.textContent = player;
            compScore.textContent = comp;
            if(player > comp){
                text.textContent = "YOU WIN!"
                console.log("YOU WIN!");
            }else{
                text.textContent = "YOU LOSE!"
                console.log("You lose");
            }
            result.appendChild(text)
            count = 0;
            player = 0
            comp = 0
        }else{
            console.log("More rounds are left...")
        }
        
    })
})




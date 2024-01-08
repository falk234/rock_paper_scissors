let rounds=5;
let currentRound=1;
let playerPoints=0;
let computerPoints=0;
let endPoints=5; // Once one player reaches x points, game will end

const buttons=document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', btnEvent => {
        playGame(btnEvent.target.id);
    }) 
});

// const button_rock=document.querySelector('#rock');
// button_rock.addEventListener('click', () => {playGame('rock')});


function getComputerChoice(){
// COMPUTE random number 1-3
    let number = Math.floor(Math.random() * 3) +1;
// SET computerChoice to "rock", "paper", "scissor"
    switch(number){
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissor";
    }
}

function determineGameDecision(computerChoice,playerChoice){
    let playerWin=(computerChoice === "rock" && playerChoice === "paper") || (computerChoice === "paper" && playerChoice === "scissor") || (computerChoice === "scissor" && playerChoice === "rock");
    if (computerChoice===playerChoice) return "tie";
    else if (playerWin) return "win";
    else if(!playerWin) return "lost";
}

function playGame(playerChoice){       
    addToResultDiv("round "+currentRound);
    let computerChoice=getComputerChoice();
    addToResultDiv("Computer has chosen: "+computerChoice);        
    addToResultDiv("Player has chosen: "+playerChoice);
    let decision=determineGameDecision(computerChoice,playerChoice);
    if (decision=="win"){
        addToResultDiv("You won! "+ playerChoice+" beats "+computerChoice+"!");
        playerPoints++;
        currentRound++;
    }else if(decision=="lost"){
        addToResultDiv("You lost! "+ computerChoice+" beats "+playerChoice+"!");
        computerPoints++;
        currentRound++;
    }else if(decision=="tie"){
        addToResultDiv("Tie! Both chose "+playerChoice+"! Try again!:)");
    }

    if (playerPoints < endPoints && computerPoints < endPoints){
        addToResultDiv("Score (Player:Computer) = "+playerPoints+":"+computerPoints);
    }else{
        addToResultDiv("Game Over");
        if(playerPoints>computerPoints){
            addToResultDiv("Congratulations! You won the game with score "+playerPoints+":"+computerPoints);
        }else if(playerPoints<computerPoints){
            addToResultDiv("You lost the game with score "+playerPoints+":"+computerPoints);
        }else if (playerPoints==computerPoints){
            addToResultDiv("Tie! Score: "+playerPoints+":"+computerPoints);
        }
        currentRound=1;
        playerPoints=0;
        computerPoints=0;
    } 
}




const result_div=document.querySelector('#result_div');
const addToResultDiv = (toAdd) => {
    const child_div=document.createElement('div');
    child_div.textContent=toAdd;
    result_div.appendChild(child_div);
}

// Display the running score, and announce a winner of the game once one player reaches 5 points.


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
// TEST
// console.log(getComputerChoice());

// FUNCTION determineGameDecision (computerChoice,playerChoice)
function determineGameDecision(computerChoice,playerChoice){
    let playerWin=(computerChoice === "rock" && playerChoice === "paper") || (computerChoice === "paper" && playerChoice === "scissor") || (computerChoice === "scissor" && playerChoice === "rock");
    if (computerChoice===playerChoice) return "tie";
    else if (playerWin) return "win";
    else if(!playerWin) return "lost";
}


//TEST
// let computerChoice=getComputerChoice();
// let playerChoice=getPlayerChoice();
// console.log(determineGameDecision(computerChoice,playerChoice));


// SET rounds
// FUNCTION playGame (rounds)
function playGame(playerChoice){
// SET currentRound to 1
    let currentRound=1;
// SET playerPoints to 0
    let playerPoints=0;
// SET computerPoints to 0
    let computerPoints=0;
// SET REPEAT to 0
    let repeat=false;
    do{
        console.log("round "+currentRound);
        let computerChoice=getComputerChoice();
        console.log("Computer has chosen: "+computerChoice);
        console.log("Player has chosen: "+playerChoice);
        let decision=determineGameDecision(computerChoice,playerChoice);
        if (decision=="win"){
            console.log("You won! "+ playerChoice+" beats "+computerChoice+"!");
            playerPoints++;
            currentRound++;
            repeat=false;
        }else if(decision=="lost"){
            console.log("You lost! "+ computerChoice+" beats "+playerChoice+"!");
            computerPoints++;
            currentRound++;
            repeat=false;
        }else if(decision=="tie"){
            console.log("Tie! Both chose "+playerChoice+"! Try again!:)");
            repeat=true;
        }
        console.log("Score (Player:Computer) = "+playerPoints+":"+computerPoints);
        }while(repeat==true);
    console.log("Game Over");
    if(playerPoints>computerPoints){
        console.log("Congratulations! You won the game with score "+playerPoints+":"+computerPoints);
    }else if(playerPoints<computerPoints){
        console.log("You lost the game with score "+playerPoints+":"+computerPoints);
    }else if (playerPoints==computerPoints){
        console.log("Tie! Score: "+playerPoints+":"+computerPoints);
    }
}

// const buttons=document.querySelectorAll('button');

// buttons.forEach(button => {
//     button.addEventListener('click', (playGame(button.id)));
    
// });

const button_rock=document.querySelector('#rock');
const button_paper=document.querySelector('#paper');
const button_scissor=document.querySelector('#scissor');

button_rock.addEventListener('click', () => {playGame('rock')});
button_paper.addEventListener('click', () => {playGame('paper')});
button_scissor.addEventListener('click', () => {playGame('scissor')});


// unklar, warum Spieler immer verliert, obwohl er eigentlich gewinnen müsste..
// nochmal ohne buttons testen.


// 1) Test ohne Buttons, Eingabe über console;
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

function getPlayerChoice(){
    let playerChoice;
    let repeat;
// REPEAT
    do{
// DISPLAY prompt "Rock, Paper or Scissor?"
// GET input from prompt
        let input = prompt("Rock, Paper or Scissor?");
// IF input is null THEN
// PRINT "BYE BYE"
// SET playerChoice to "quit"
// SET repeat to "false"
        if (input === null) {
            console.log("Bye Bye!")
            playerChoice ="quit";
            repeat=false;
// ELSEIF input is not lowercase "rock, paper, scissor" OR not type 'string' THEN
// DISPLAY "Wrong input. Please enter rock, paper or scissor!"
// SET repeat to "true"
        // }else if ((typeof input !== "string")|| ((typeof input === "string") && !((input.toLowerCase() === "rock") || (input.toLowerCase() === "paper") || (input.toLowerCase() === "scissor")))){
        }else if ((typeof input !== "string") || !((input.toLowerCase() === "rock") || (input.toLowerCase() === "paper") || (input.toLowerCase() === "scissor"))){
            alert('Wrong input. Please enter "rock", "paper" or "scissor!"');
            repeat=true;
// ELSE repeat=false
// SET playerChoice=input.toLowerCase()
        }else{
            repeat=false;
            playerChoice=input.toLowerCase();
        }
// UNTIL repeat is false        
    }while(repeat)
// RETURN playerChoice;
    return playerChoice;
}

//TEST
// console.log(getPlayerChoice());






// FUNCTION determineGameDecision (computerChoice,playerChoice)
function determineGameDecision(computerChoice,playerChoice){
// INIT decision
    let decision;
// SET lost_condition to "(computerChoice is rock AND playerChoice is scissor) OR
//                        (computerChoice is paper AND playerChoice is rock) OR
//                        (computerChoice is scissor AND playerChoice is paper)"
    let lostCondition='(computerChoice === "rock" && playerChoice === "scissor") || (computerChoice === "paper" && playerChoice === "rock") || (computerChoice === "scissor" && playerChoice === "paper")';
//     IF computerChoice is playerChoice THEN
//         SET decision to "tie"        
    if(computerChoice===playerChoice){
        decision="tie";
// ELSEIF  lost_condition THEN
// SET decision to "lost"
    }else if (lostCondition){
        decision="lost";
// ELSEIF !lost_condition THEN
// SET decision to "win"
    }else if(!(lostCondition)){
        decision="win";
    }
// RETURN decision 
    return decision;
}

//TEST
// let computerChoice=getComputerChoice();
// let playerChoice=getPlayerChoice();
// console.log(determineGameDecision(computerChoice,playerChoice));


// SET rounds
let rounds=5;
// FUNCTION playGame (rounds)
function playGame(rounds){
// SET currentRound to 1
    let currentRound=1;
// SET playerPoints to 0
    let playerPoints=0;
// SET computerPoints to 0
    let computerPoints=0;
// SET REPEAT to 0
    let repeat=false;
    do{
        console.log("round "+currentRound+" of "+rounds);
        let computerChoice=getComputerChoice();
        let playerChoice=getPlayerChoice();
        if(playerChoice=="quit"){break;}
        console.log("Computer has chosen: "+computerChoice);
        console.log("Player has chosen: "+playerChoice);
        let decision=determineGameDecision(playerChoice,computerChoice);
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
        }else if(decision="tie"){
            console.log("Tie! Both chose "+playerChoice+"! Try again!:)");
            repeat=true;
        }
        console.log("Score (Player:Computer) = "+playerPoints+":"+computerPoints);
        }while(repeat==true || (rounds!=currentRound))
    console.log("Game Over");
    if(playerPoints>computerPoints){
        console.log("Congratulations! You won the game with score "+playerPoints+":"+computerPoints);
    }else if(playerPoints<computerPoints){
        console.log("You lost the game with score "+playerPoints+":"+computerPoints);
    }else if (playerPoints==computerPoints){
        console.log("Tie! Score: "+playerPoints+":"+computerPoints);
    }
}

playGame(rounds);


    //     If playerPoints > computerPoints THEN
//         PRINT "Congratulations! You won the game with score 'playerPoints':'computerPoints'"
//         ELSE IF playerPoints < computerPoints THEN
//                 PRINT "Nope! You lost the game with score 'playerPoints':'computerPoints'"
//         ENDIF
//         ELSE IF playerPoints is computerPoints THEN
//                 PRINT "Tie! Score: 'playerPoints':'computerPoints'"
//         ENDIF
//     ELSE PRINT "Game Over"
//     REPEAT
//         PRINT "round 'currentRound' of 'rounds'"
//         CALL getComputerChoice RETURNING computerChoice
//         CALL getPlayerChoice RETURNING playerChoice
//         IF playerChoice is "byebye" THEN BREAK
//         PRINT "Computer has chosen 'computerChoice'"
//         PRINT "Player has chosen 'playerChoice'"
//         CALL determineGameDecision (playerChoice, computerChoice) RETURNING decision
//         IF decision is win THEN
//             PRINT "You won! 'playerChoice'  beats 'computerChoice'"
//             INCREMENT playerPoints
//             INCREMENT currentRound
//             SET repeat to false
//             ELSE IF decision is lost THEN
//                 PRINT "You lost! 'computerChoice'  beats 'playerChoice'"
//                 INCREMENT computerPoints
//                 INCREMENT currentRound
//                 SET repeat to false
//             ENDIF
//             ELSE IF decision is tie THEN
//                     PRINT "Tie! Both chose 'playerChoice' Try again!:)"
//                     SET repeat to true
//             ENDIF
//         ENDIF
//         PRINT "Score (Player:Computer) = 'playerPoints':'computerPoints'
//     UNTIL currentRound is rounds AND repeat is false
//     PRINT "Game Over"
//     If playerPoints > computerPoints THEN
//         PRINT "Congratulations! You won the game with score 'playerPoints':'computerPoints'"
//         ELSE IF playerPoints < computerPoints THEN
//                 PRINT "Nope! You lost the game with score 'playerPoints':'computerPoints'"
//         ENDIF
//         ELSE IF playerPoints is computerPoints THEN
//                 PRINT "Tie! Score: 'playerPoints':'computerPoints'"
//         ENDIF
//     ENDIF
// ENDFUNCTION

// CALL playGame(rounds)
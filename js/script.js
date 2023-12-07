// FUNCTION getComputerChoice
//     COMPUTE random number 1-3
//     SET computerChoice to "rock", "paper", "scissor"
//     RETURN computerChoice
// ENDFUNCTION

function getComputerChoice(){
    // COMPUTE random number 1-3
    let number = Math.floor(Math.random() * 3) +1;
    //     SET computerChoice to "rock", "paper", "scissor"
    switch(number){
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissor";
    }
}

console.log(getComputerChoice());

// FUNCTION getPlayerChoice
//     DISPLAY prompt "Rock, Paper or Scissor?"
//     GET input from prompt
//         IF input is null THEN
//         PRINT "BYE BYE"
//         SET playerChoice to "byebye"
//             ELSEIF  input is not lowercase "rock, paper, scissor" THEN
//                 REPEAT 
//                     DISPLAY prompt "Wrong input. Please enter rock, paper or scissor"
//                     GET input from prompt
//                 UNTIL input is lowercase "rock,paper,scissor"
//                 SET playerChoice to input
//             ENDIF
//             ELSEIF  input is lowercase "rock,paper, scissor" THEN
//                 SET playerChoice to input
//             ENDIF
//         ENDIF
//     RETURN playerChoice
// ENDFUNCTION


// FUNCTION determineGameDecision (computerChoice,playerChoice)
//     INIT decision
//     SET lost_condition to "(computerChoice is rock AND playerChoice is scissor) OR
//                             (computerChoice is paper AND playerChoice is rock) OR
//                             (computerChoice is scissor AND playerChoice is paper)"
//     IF computerChoice is playerChoice THEN
//         SET decision to "tie"
//         ELSEIF  lost_condition THEN
//                 SET decision to "lost"
//         ENDIF
//         ELSEIF !lost_condition THEN
//                 SET decision to "win"
//         ENDIF
//     ENDIF          
//     RETURN decision
// ENDFUNCTION

// SET rounds
// FUNCTION playGame (rounds)
//     SET currentRound to 1
//     SET playerPoints to 0
//     SET computerPoints to 0
//     SET REPEAT to 0
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
//     ELSE PRINT "Game Over"
//     ENDIF
// ENDFUNCTION

// CALL playGame(rounds)
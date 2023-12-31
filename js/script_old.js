// let test=prompt("Was passiert hier?");
// console.log(test);

// Calculate Computer Choice using randomly generated numbers 1, 2, 3 for rock, paper, scissors

//Calculate random number 1,2 or 3.
function getRandomInt(){
    return Math.floor(Math.random() * 3) +1;
}

// Get Computer Choice
function getComputerChoiceInt(){
    // Return 1,2 or 3
    return getRandomInt();
}


// Translate random number to rock, paper or scissor
function computerChoiceIntToString(computerChoiceInt){
    if (computerChoiceInt===1){
        return "rock";
    }else if (computerChoiceInt===2){
        return "paper";
    }else if (computerChoiceInt===3){
        return "scissor";
    }else{
        alert("Error: A wrong number has been transmitted!")
    }
}

// New Display Player Prompt

// function newGetPlayerInput(){
//     let input=prompt("Paper, Stone or Scissor?");
//     return input;
// }

// let playerInput=newGetPlayerInput();

// New Check Player Input

// function newCheckPlayerInput(playerInput){
//     if (playerInput==null){
//         return -1;
//     }else if (["rock","paper","scissor"].includes(playerInput.toLowerCase())){
//         return ;
//     }else if (!["rock","paper","scissor"].includes(playerInput.toLowerCase())){
//         return 0;
//     }
// }

// New playGameEnvironment
   
// function newPlayGameEnvironment(){
//     let computerChoice=computerChoiceIntToString(getComputerChoiceInt());
//     let playerChoice=newCheckPlayerInput(newGetPlayerInput());
//     let gameplay=newCheckPlayerInput(playerInput);
// }




// WhatIsYourChoice Prompt

function displayPlayerPrompt(){
    let input = prompt("What is your choice?", "Rock? | Paper? | Scissors?");
    if (input===null){
        return false;
    }else{
        return input.toLocaleLowerCase();
    }
}

// GET player selection 

function getPlayerSelectionString(){
    // return ((prompt("What is your choice?", "Rock | Paper | Scissors")).toLocaleLowerCase());
    
    let playerSelectionString = displayPlayerPrompt();

    if (playerSelectionString==false){return false}
    
    while (!checkPlayerSelectionString(playerSelectionString)){
        playerSelectionString = displayPlayerPrompt();
    }
    // console.log("Der Spieler hat sich für \"" + playerSelectionString + "\" entschieden");
    return playerSelectionString;
}

//Check if player selection is valid
function checkPlayerSelectionString(playerSelectionString){
    if ((playerSelectionString==="rock") || (playerSelectionString==="paper") || (playerSelectionString==="scissor")){
        return true;
    }else {
        console.log("The player has chosen a not valid input: \"" + playerSelectionString + "\"");
        alert('Error: "' + playerSelectionString + '" is not a valid input.\n\nOnly "rock", "paper" oder "scissor" are allowed');
        return false;
    }

}



// Translate playerSelectionString to Int => currently no use-case for this


// function playerSelectionStringToInt(playerSelectionString){
    // if (playerSelectionString==="rock"){
        // return 1;
    // }else if (playerSelectionString==="paper"){
        // return 2;
    // }else if (playerSelectionString==="scissor"){
        // return 3;
    // }else{
        // alert('Fehler: "' + playerSelectionString + '" ist keine gültige Eingabe.\n\nNur "Schere", "Stein" oder "Papier" sind erlaubt');
        // return 4;
    // }
// }

// Play game to get winner

    // player + computer => 
    // rock + paper => loose
    // rock + scissor => win
    // rock + rock => ties

    // paper + rock => win
    // paper + scissor => loose
    // paper + paper => ties

    // scissor + rock => loose
    // scissor + paper => win
    // scissor + scissor => ties


function playGame(computerChoiceString,playerSelectionString){
    if ((playerSelectionString==="rock") && (computerChoiceString==="paper") || (playerSelectionString==="paper") && (computerChoiceString==="scissor") || (playerSelectionString==="scissor") && (computerChoiceString==="rock")){
        return ('You lose! ' + computerChoiceString + ' beats ' + playerSelectionString);
        // return "false";
    }else if((playerSelectionString==="rock") && (computerChoiceString==="scissor") || (playerSelectionString==="paper") && (computerChoiceString==="rock") || (playerSelectionString==="scissor") && (computerChoiceString==="paper")){
        return ('You win! ' + playerSelectionString + ' beats ' + computerChoiceString);
        // return "true";
    }else if(playerSelectionString===computerChoiceString){
        return "Ties. Try again!";
        // return "ties";
    }else{
        return "Error. Something went wrong at playGame()";
    }
}

// DEFINE function that plays "playGame" multiple times"

let repeat =5;
playMultipleGames(repeat);

function playMultipleGames(repeat){
    console.log("Rounds:"+repeat);
    let computerPoints=0;
    let playerPoints=0;
    while (repeat > 0){
        console.log("Rounds left:" + repeat);
        let computerChoiceInt=getComputerChoiceInt();
        let computerChoiceString=computerChoiceIntToString(computerChoiceInt);
        console.log("The computer has chosen: \"" + computerChoiceString + "\"");

        let playerSelectionString=getPlayerSelectionString();
        // let playerSelectionInt=playerSelectionStringToInt();
        if (playerSelectionString==false){break}
        console.log("The player has chosen: \"" + playerSelectionString + "\"");
        
        console.log(playGame(computerChoiceString,playerSelectionString));

        repeat--;
    }

}

// Count points every round and announce winner




// Abbruch Eingabe (/)
// Schleife für prompt falsche eingabe (/)
// Punkte zählen und Winner ausgeben

// Jede Runde sollen die Punkte gezählt und am Ende der Sieger benannt werden 
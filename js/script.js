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
        alert("Fehler: Es wurde eine falsche Zahl generiert!")
    }
}


// GET player selection 

function getPlayerSelectionString(){
    // return ((prompt("What is your choice?", "Rock | Paper | Scissors")).toLocaleLowerCase());
    
    let playerSelectionString = prompt("What is your choice?", "Rock? | Paper? | Scissors?");
    playerSelectionString= playerSelectionString.toLowerCase();
    
    while (!checkPlayerSelectionString(playerSelectionString)){
        playerSelectionString = prompt("What is your choice?", "Rock? | Paper? | Scissors?");
        playerSelectionString= playerSelectionString.toLowerCase();
    }
    // console.log("Der Spieler hat sich für \"" + playerSelectionString + "\" entschieden");
    return playerSelectionString;
}

//Check if player selection is valid
function checkPlayerSelectionString(playerSelectionString){
    if ((playerSelectionString==="rock") || (playerSelectionString==="paper") || (playerSelectionString==="scissor")){
        return true;
    }else {
        console.log("Der Spieler hat sich leider für \"" + playerSelectionString + "\" entschieden");
        alert('Fehler: "' + playerSelectionString + '" ist keine gültige Eingabe.\n\nNur "rock", "paper" oder "scissor" sind erlaubt');
        return false;
    }

}



// Translate playerSelectionString to Int


function playerSelectionStringToInt(playerSelectionString){
    if (playerSelectionString==="rock"){
        return 1;
    }else if (playerSelectionString==="paper"){
        return 2;
    }else if (playerSelectionString==="scissor"){
        return 3;
    }else{
        alert('Fehler: "' + playerSelectionString + '" ist keine gültige Eingabe.\n\nNur "Schere", "Stein" oder "Papier" sind erlaubt');
        return 4;
    }
}

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
    }else if((playerSelectionString==="rock") && (computerChoiceString==="scissor") || (playerSelectionString==="paper") && (computerChoiceString==="rock") || (playerSelectionString==="scissor") && (computerChoiceString==="paper")){
        return ('You win! ' + playerSelectionString + ' beats ' + computerChoiceString);
    }else if(playerSelectionString===computerChoiceString){
        return "Ties. Try again!";
    }else{
        return "Diese Möglicheit ist noch nicht implementiert.";
    }
}

// DEFINE function that plays "playGame" multiple times"

let repeat =5;
playMultipleGames(repeat);

function playMultipleGames(repeat){
    console.log("Repeat:"+repeat);
    while (repeat > 0){
        let computerChoiceInt=getComputerChoiceInt();
        let computerChoiceString=computerChoiceIntToString(computerChoiceInt);
        console.log("Der Computer hat sich für \"" + computerChoiceString + "\" entschieden");

        let playerSelectionString=getPlayerSelectionString();
        // let playerSelectionInt=playerSelectionStringToInt();
        console.log("Der Spieler hat sich für \"" + playerSelectionString + "\" (gültig) entschieden");

        console.log(playGame(computerChoiceString,playerSelectionString));

        repeat--;
    }

}

// Abbruch Eingabe
// Schleife für prompt falsche eingabe
// Punkte zählen und Winner ausgeben
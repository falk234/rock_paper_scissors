// Calculate Computer Choice using randomly generated numbers 1, 2, 3 for rock, paper, scissors

//Calculate random number 1,2 or 3.

function getRandomInt(max){
    return Math.floor(Math.random() * max) +1;
}

let computerChoice= getRandomInt(3);
let computerChoiceString;

// Translate random number to rock, paper or scissor

function computerChoiceIntToString(computerChoice){
    if (computerChoice===1){
        return "rock";
    }else if (computerChoice===2){
        return "paper";
    }else if (computerChoice===3){
        return "scissor";
    }else{
        alert("Fehler: Es wurde eine falsche Zahl generiert!")
    }
}

computerChoiceString=computerChoiceIntToString(computerChoice);



// Show decision of computer

console.log("Der Computer hat sich für \"" + computerChoiceString + "\" entschieden");

// GET player selection 

let playerSelectionString = prompt("What is your choice?", "Rock | Paper | Scissors");
playerSelectionString= playerSelectionString.toLowerCase();

console.log("Der Spieler hat sich für \"" + playerSelectionString + "\" entschieden");


// Translate playerSelection string to Int

let playerSelection;

function playerSelectionStringToInt(playerSelectionString){
    if (playerSelectionString==="rock"){
        return 1;
    }else if (playerSelectionString==="paper"){
        return 2;
    }else if (playerSelectionString==="scissor"){
        return 3;
    }else{
        alert('Fehler: "' + playerSelectionString + '" ist keine gültige Eingabe.\n\nNur "Schere", "Stein" oder "Papier" sind erlaubt');
        return undefined;
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

playerSelection=playerSelectionStringToInt(playerSelectionString);

function play_game(computerChoiceString,playerSelectionString){
    if ((playerSelectionString==="rock") && (computerChoiceString==="paper") || (playerSelectionString==="paper") && (computerChoiceString==="scissor") || (playerSelectionString==="scissor") && (computerChoiceString==="rock")){
        return ('You lose! ' + computerChoiceString + ' beats ' + playerSelectionString);
    }else if((playerSelectionString==="rock") && (computerChoiceString==="scissor") || (playerSelectionString==="paper") && (computerChoiceString==="rock") || (playerSelectionString==="scissor") && (computerChoiceString==="paper")){
        return ('You win! ' + playerSelectionString + ' beats ' + computerChoiceString);
    }else if(playerSelection===computerChoice){
        return "You both chose the same, try again!"
    }else{
        return "Diese Möglicheit ist noch nicht implementiert.";
    }
}


console.log(play_game(computerChoiceString,playerSelectionString));
// Calculate Computer Choice using randomly generated numbers 1, 2, 3 for rock, paper, scissors

//Calculate random number 1,2 or 3.

function getRandomInt(max){
    return Math.floor(Math.random() * max) +1;
}

let computerChoice= getRandomInt(3);
let computerChoiceString;

// Translate random number to rock, paper or scissor

if (computerChoice===1){
    computerChoiceString="rock";
}else if (computerChoice===2){
    computerChoiceString="paper";
}else if (computerChoice===3){
    computerChoiceString="scissor";
}else{
    alert("Fehler: Es wurde eine falsche Zahl generiert!")
}

// Show decision of computer

console.log("Der Computer hat sich für \"" + computerChoiceString + "\" entschieden");

// GET player selection 

let playerSelectionString = prompt("What is your choice?", "Rock | Paper | Scissors");
playerSelectionString= playerSelectionString.toLowerCase();

console.log("playerselection: " + playerSelectionString);

let playerSelection;

if (playerSelectionString==="rock"){
    playerSelection=1;
}else if (playerSelectionString==="paper"){
    playerSelection=2;
}else if (playerSelectionString==="scissor"){
    playerSelection=3;
}else{
    alert('Fehler: "' + playerSelectionString + '" ist keine gültige Eingabe.\n\nNur "Schere", "Stein" oder "Papier" sind erlaubt');
}

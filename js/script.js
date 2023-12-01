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

function() {
var player = ['user', 'computer'];
var choices = ['rock','paper','scissors'];
 
var user_wins = " YOU WINS " ;
var comp_wins = " COMPUTER WINS ";
var DRAW = " draw ";
var CHOICES_LENGTH  = choices.length;
 
var gametype;                  // 3 or 5
var user_score = 0;
var comp_score = 0;
var clicks = 0;



// score elements
 var userScore = getById('score');
var compScore = getById('computerScore');

userScore.textContent = score;
compScore.textContent = computer_score;

var game = getById('id');
var userChoices = game.getElementsByTagName('button');

var comp = getById('computer');
var computerChoices = comp.getElementByTagName('div');

// get the results element and hide it initially 

var results = getElementById('results');
hide(results);

var gameover = getElementById('gameover');
hide(gameover);

var intro = getById('intro');
var bestof3 = getById('bestof3');
var bestof5 = getById('bestof5');

//start the best of 3game
var bestof3 = getElementById('bestof3');
bestof3.enable =  true;
onclick(function);	

bestof5.onclick = function()
{
enablegame();
gameType = 5;
}

function.enableGame()
{
enable(userChoices);
hide(intro);

}

for(var i = 0; i < userChoices.length; i++) {
    userChoices[i].onclick = selection;
    userChoices[i].disabled = true;
}

function computerSelection() {
    var randomIndex = Math.floor(Math.random() * CHOICES_LENGTH);
    var compChoice = choices[randomIndex];
    return compChoice;
}












const logic = {
    rock: { w: 'scissor', l: 'paper'},
    paper: {w:'rock', l:'scissor'},
    scissor: {w:'paper', l:'rock'},
}

class Player {
    constructor(name){
        this.name = name;
    }
    setChoice(choice){
        this.choice = choice;
    }
    challengeOther(PlayerTwo){
        return logic[this.choice].w === PlayerTwo.choice;
    }
}

const p1 = new Player('pranavi');
const p2 = new Player('prazun');

p1.setChoice('rock');
p2.setChoice('scissor');

p1.challengeOther(p2); //true	 (Win)

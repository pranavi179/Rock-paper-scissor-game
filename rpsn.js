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
 
function selection() {
    // get the user and computer choice 
    var chosen = this.id;
    var comp = computerSelection();

    // get the users chosen item
    var chosenItem = getById(chosen);

    // prepare the chosenCompItem so we can assign it to a dynamic id
    var chosenCompItem;

    if(comp === 'rock') {
        chosenCompItem = getById('computerRock');
    } 
    else if(comp === 'paper') {
        chosenCompItem = getById('computerPaper');
    }
    else if(comp === 'scissors') {
        chosenCompItem = getById('computerScissors');
    }

    // show results and disable all choices so no more can 
    // be made while waiting for the pop up to fade out 
    show(results);
    reappear(results);
    disable(userChoices);
    disable(compChoices);


    // make the selected item stand out from the rest
    chosenItem.classList.add('selected');
    chosenCompItem.classList.add('selected');

    // decide who wins  


    if(chosen === comp) {
        results.textContent = DRAW;
        // ugly repetive code. what can I do???
        timeout();
        results.innerHTML += MEH;
    } 
    else if(chosen === 'rock' && comp === 'scissors') {
        results.textContent = USER_WINS;
        score += 1;
        userScore.textContent = score;
        timeout();
        results.innerHTML += SMILE;
    }
    else if(chosen === 'paper' && comp === 'rock') {
        results.textContent = USER_WINS;
        score += 1;
        userScore.textContent = score;
        timeout();
        results.innerHTML += SMILE;
    }
    else if(chosen === 'scissors' && comp === 'paper') {
        results.textContent = USER_WINS;
        score += 1;
        userScore.textContent = score;
        timeout();
        results.innerHTML += SMILE;
    }
    else {
        results.textContent = COMP_WINS;
        computer_score +=1;
        compScore.textContent = computer_score;
        timeout();
        results.innerHTML += FROWN;
    }


    console.log(clicks);
}


// utilities
function getById(id) {
    return document.getElementById(id);
}   

function hide(element) {
    element.style.display = 'none';
}

function show(element) {
    element.style.display = 'block';
}

function disappear(element) {
    element.className = 'disappear';
}

function reappear(element) {
    element.className = 'reappear';
}

function disable(elements) {
    for(var i = 0; i < elements.length; i++) {
        elements[i].disabled = true;
        elements[i].classList.add('unselected');
    }
}

function enable(elements) {
    for(var i = 0; i < elements.length; i++) {
        elements[i].disabled = false;
        elements[i].classList.add('default');
        elements[i].classList.remove('selected', 'unselected');
    }
}

function timeout() {
    setTimeout(function(){
        disappear(results);
            enable(userChoices);
            enable(compChoices);
    }, 2000)
}
})();












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

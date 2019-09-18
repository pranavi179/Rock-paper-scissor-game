// (function() {
//     window.onload = init;

// function init() {
    

// var choices = [
//     'rock',
//     'paper',
//     'scissors'
// ];

// var CHOICES_LENGTH = choices.length;

// // create the text for winning or drawing
// var USER_WINS = "You win!";
// var COMP_WINS = "Computer wins";
// var DRAW = "Draw"

// var MEH = '<i class="fa fa-meh-o" aria-hidden="true"></i>';
// var SMILE = '<i class="fa fa-smile-o" aria-hidden="true"></i>';
// var FROWN = '<i class="fa fa-frown-o" aria-hidden="true"></i>';	

 
// var gametype;                  // 3 or 5
// var user_score = 0;
// var comp_score = 0;
// var clicks = 0;



// // score elements
// var userScore = getById('score');
// var compScore = getById('computerScore');

// userScore.textContent = score;
// compScore.textContent = computerScore;

// var user = getById('user');
// var userChoices = user.getElementsByTagName('button');

// var comp = getById('computer');
// var compChoices = comp.getElementByTagName('div');

// // get the results element and hide it initially 

// var results = getElementById('results');
// hide(results);

// var gameOver = getElementById('gameOver');
// hide(gameOver);

// var intro = getById('intro');
// var bestof3 = getById('bestof3');
// var bestof5 = getById('bestof5');

// //start the best of 3game
// //var bestof3 = getElementById('bestof3');
// bestof3.onclick = function()
// {
// enablegame();
// gametype = 3;
// }	

// bestof5.onclick = function()
// {
// enablegame();
// gameType = 5;
// }     

// function enableGame()
// {
// enable(userChoices);
// hide(intro);

// }

// for(var i = 0; i < userChoices.length; i++) {
//     userChoices[i].onclick = selection;
//     userChoices[i].disabled = true;
// }

// function computerSelection() {
//     var randomIndex = Math.floor(Math.random() * CHOICES_LENGTH);
//     var compChoices = choices[randomIndex];
//     return compChoices;
// }
 
// function selection() {
//     // get the user and computer choice 
//     var chosen = this.id;
//     var comp = computerSelection();

//     // get the users chosen item
//     var chosenItem = getById(chosen);

//     // prepare the chosenCompItem so we can assign it to a dynamic id
//     var chosenCompItem;

//     if(comp === 'rock') {
//         chosenCompItem = getById('computerRock');
//     } 
//     else if(comp === 'paper') {
//         chosenCompItem = getById('computerPaper');
//     }
//     else if(comp === 'scissors') {
//         chosenCompItem = getById('computerScissors');
//     }

//     // show results and disable all choices so no more can 
//     // be made while waiting for the pop up to fade out 
//     show(results);
//     reappear(results);
//     disable(userChoices);
//     disable(compChoices);


//     // make the selected item stand out from the rest
//     chosenItem.classList.add('selected');
//     chosenCompItem.classList.add('selected');

//     // decide who wins  


//     if(chosen === comp) {
//         results.textContent = DRAW;
//         results.innerHTML += MEH;
//         timeout();
//     } 
//     else if((chosen === 'rock' && comp === 'scissors') || (chosen === 'paper' && comp === 'rock') || (chosen === 'scissors' && comp === 'paper')) {
        
//         results.textContent = USER_WINS;
//         results.innerHTML += SMILE;
        
//         score += 1;
//         userScoreElement.textContent = score;
//         timeout();
        
//     }
//     else {
        
//         results.textContent = COMP_WINS;
//         results.innerHTML += FROWN;
        
//         computerScore +=1;
//         computerScoreElement.textContent = computerScore;
//         timeout();
        
//     }
    
// }


// // utilities
// function getById(id) {
//     return document.getElementById(id);
// }   

// function hide(element) {
//     element.style.display = 'none';
// }

// function show(element) {
//     element.style.display = 'block';
// }

// function disappear(element) {
//     element.className = 'disappear';
// }

// function reappear(element) {
//     element.className = 'reappear';
// }

// function disable(elements) {
//     for(var i = 0; i < elements.length; i++) {
//         elements[i].disabled = true;
//         elements[i].classList.add('unselected');
//     }
// }

// function enable(elements) {
//     for(var i = 0; i < elements.length; i++) {
//         elements[i].disabled = false;
//         elements[i].classList.add('default');
//         elements[i].classList.remove('selected', 'unselected');
//     }
// }

// function timeout() {
//     setTimeout(function(){
//         disappear(results);
//             enable(userChoices);
//             enable(compChoices);
//     }, 2000)
// }
// }
// })();











// /// psuedo code -pranavi
// // ** var logic = {
//  /*  rock: { w: 'scissor', l: 'paper'},
//     paper: {w:'rock', l:'scissor'},
//     scissor: {w:'paper', l:'rock'},
// }

// class Player {
//     constructor(name){
//         this.name = name;
//     }
//     setChoice(choice){
//         this.choice = choice;
//     }
//     challengeOther(PlayerTwo){
//         return logic[this.choice].w === PlayerTwo.choice;
//     }
// }

// const p1 = new Player('pranavi');
// const p2 = new Player('prazun');

// p1.setChoice('rock');
// p2.setChoice('scissor');

// p1.challengeOther(p2); //true	 (Win)
// */






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// new code 
(function(){
	
	/*
	 * Rock, paper, scissors  
	 * 
	 * The classic game recreated in Javascript for playing in the browser.
	 * 
	 */
	 
	window.onload = init;
	
	
	function init() {
		
		// get the game area and get access to all the buttons
		var user = getById('user');
		var userChoices = user.getElementsByTagName('button');
			
		var comp = getById('computer');
		var compChoices = comp.getElementsByTagName('div');
			
		// get the results element and hide it initially
		var results = getById('results');
		hide(results);
	
		// the gameover screen and final results
		var gameOver = getById('gameOver');
		hide(gameOver);
		var gameResults = getById('gameResults');
		var gameResultsText = getById('gameResultsText');
		
			// get the intro element and the buttons for choosing a game type
		var intro = getById('intro');
		var bestOf3 = getById('bestOf3');
		var bestOf5 = getById('bestOf5');
		
		// score elements and score variables
		var userScoreElement = getById('score');
		var computerScoreElement = getById('computerScore');
		var score;
		var computerScore;
		
		// prepare a variable to hold the game type
		// best of 3 or best of 5
		var gameType;
		
		// start the best of 3 game
		bestOf3.onclick = function() {
			enableGame();
			gameType = 3;
		}
		
		bestOf5.onclick = function() {
			enableGame();
			gameType = 5;
		}
		
		getScore();
		
		// create the choices
		var choices = [
			'rock',
			'paper',
			'scissors'
		];
		
		var CHOICES_LENGTH = choices.length;
		
		// create the text for winning or drawing
		var USER_WINS = "You win!";
		var COMP_WINS = "Computer wins";
		var DRAW = "Draw"
		
		var MEH = '<i class="fa fa-meh-o" aria-hidden="true"></i>';
		var SMILE = '<i class="fa fa-smile-o" aria-hidden="true"></i>';
		var FROWN = '<i class="fa fa-frown-o" aria-hidden="true"></i>';	
		
		// add an onclick event to each button and disable them initially
		for(var i = 0; i < userChoices.length; i++) {
			userChoices[i].onclick = selection;
			userChoices[i].disabled = true;
		}	
		
		function enableGame() {
			enable(userChoices);
			hide(intro);
			hide(gameOver);
			getScore();
		}
		
		function getScore() {
			score = 0;
			userScoreElement.textContent = score;
			computerScore = 0;
			computerScoreElement.textContent = computerScore;
			
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
				results.innerHTML += MEH;
				timeout();
			} 
			else if((chosen === 'rock' && comp === 'scissors') || (chosen === 'paper' && comp === 'rock') || (chosen === 'scissors' && comp === 'paper')) {
				
				results.textContent = USER_WINS;
				results.innerHTML += SMILE;
				
				score += 1;
				userScoreElement.textContent = score;
				timeout();
				
			}
			else {
				
				results.textContent = COMP_WINS;
				results.innerHTML += FROWN;
				
				computerScore +=1;
				computerScoreElement.textContent = computerScore;
				timeout();
				
			}
			
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
		
		function endGame() {
			show(gameOver);
			if(score > computerScore) {
				gameResultsText.textContent = "You won " + score + " - " + computerScore + "!";
			}
			else {
				gameResultsText.textContent = "You lost " + computerScore + " - " + score;
			}
			gameResults.appendChild(bestOf3);
			gameResults.appendChild(bestOf5);
		}
		
		function timeout() {
			setTimeout(function(){
			    disappear(results);
					enable(userChoices);
					enable(compChoices);
					if(score + computerScore == gameType) {
						endGame();
					}
			}, 2000)
		}				
	}	
	
})();
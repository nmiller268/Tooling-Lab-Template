import { RockPaperScissors } from './rock_paper_scissors.js';    
  
// Elements from your DOM  
const welcomeScreen = document.getElementById(`welcome-screen`);  
const gameScreen = document.getElementById(`game-screen`);  
const startGameButton = document.getElementById(`start-game-button`);  
const userName = document.getElementById(`username`);  
const userSelection = document.getElementById(`user-selection`);  
const goButton = document.getElementById(`go-button`);  
const scoreParagraph = document.getElementById(`score`);  
const gameHistoryParagraph = document.getElementById(`game-history`);  
const resetGameButton = document.getElementById(`reset-game-button`);  
  
// instantiate the game object from the RockPaperScissors class.  
let game;  
let username;  
  
// Initially hide the game screen and reset button  
gameScreen.classList.add(`d-none`);  
resetGameButton.classList.add(`d-none`);  
  
// updateScoreTallyUI: Updates the score displayed on the UI.  
function updateScoreTallyUI(){  
  scoreParagraph.innerHTML = `${game.username}: ${game.score.user} v CPU: ${game.score.cpu}`;  
}  
  
// updateGameHistoryUI: Updates the game history line with each play.  
function updateGameHistoryUI(){  
  gameHistoryParagraph.innerHTML = ``;   
  gameHistoryParagraph.innerHTML = game.gameHistoryLog;   
}  
  
// start-game-button EventListener: Starts a new game,  
// hides the welcome screen, and shows the game interface.  
startGameButton.addEventListener(`click`, function (e) {  
  e.preventDefault();   
  username = userName.value;  
  game = new RockPaperScissors(username);  
  
  welcomeScreen.classList.add(`d-none`);  
  gameScreen.classList.remove(`d-none`);  
  resetGameButton.classList.remove(`d-none`);  
  updateScoreTallyUI();  
  updateGameHistoryUI();  
});  
  
// go-button EventListener: Plays a round using the current selection,  
// then updates the scoreboard and game history.  
goButton.addEventListener(`click`, function (e) {  
  e.preventDefault();   
  // Retrieve the user's selected option value  
  const selectedOption = userSelection.options[userSelection.selectedIndex].value;  
  game.play(selectedOption);   
  updateScoreTallyUI();   
  updateGameHistoryUI();  
});  
  
// reset-game-button EventListener: Resets the game,  
// clears out the username, and returns to the welcome screen.  
resetGameButton.addEventListener(`click`, function(e) {   
  e.preventDefault();  
  userName.value = ``;  
  username = ``;  
  game = new RockPaperScissors(username);  
  
  welcomeScreen.classList.remove(`d-none`);  
  gameScreen.classList.add(`d-none`);  
  resetGameButton.classList.add(`d-none`);  
});  
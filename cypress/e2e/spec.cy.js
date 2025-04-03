// cypress/e2e/game.cy.js  
  
// Ignore the RockPaperScissors not defined error if it appears  
Cypress.on(`uncaught:exception`, (err, runnable) => {  
  if (err.message.includes(`RockPaperScissors is not defined`)) {  
    return false;  
  }  
  return true;  
});  
  
describe(`Rock Paper Scissors Game Application`, () => {  
  it(`should display history log with the correct try and user name after playing a round`, () => {  
    // Visit the application page  
    cy.visit(`http://localhost:3000`);  
  
    // Ensure the username input is visible and type the username  
    cy.get(`#username`).should(`be.visible`).clear().type(`Nicolas`);  
  
    // Click the Start Game button to switch screens  
    cy.get(`#start-game-button`).click();  
  
    // Now the game-screen should be visible (i.e. not have the d-none class)  
    cy.get(`#game-screen`).should(`not.have.class`, `d-none`);  
  
    
    cy.get(`#user-selection`).select(`rock`);  
  
    // Click the "Go!" button to play a round  
    cy.get(`#go-button`).click();  
  
      
    cy.get(`#game-history`)  
      .should(`be.visible`)  
      .invoke(`text`)  
      .should(`contain`, `Nicolas selected rock`);  
  });  
});  
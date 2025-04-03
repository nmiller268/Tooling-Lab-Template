// tests/3.rock_paper_scissors-logic.test.js  
  
// Import the class using CommonJS require  
const { RockPaperScissors } = require(`../resources/scripts/rock_paper_scissors.js`);  
  
describe(`RockPaperScissors class`, function () {  
  // Before each test, optionally spy on Math.random  
  beforeEach(() => {  
    jest.spyOn(Math, `random`)  
      .mockReturnValue(0.1); 
  });  
  
  afterEach(() => {  
    jest.restoreAllMocks();  
  });  
  
  it(`should return "tie" when user and CPU selections are identical`, () => {  
    const game = new RockPaperScissors(`Nicole`);  
    game.play(`rock`);  
    // Since Math.random is mocked to 0.1, CPU will also choose 'rock' leading to a tie.  
    expect(game.gameHistoryLog[0]).toContain(`Nicole selected rock`);  
    // Check that the game result string ends with "ties" due to a tie  
    expect(game.gameHistoryLog[0]).toContain(`ties`);  
  });  
  
  it(`should increment user score when user wins`, () => {  
    jest.spyOn(Math, `random`)  
      .mockReturnValue(0.1); // same as before, ensuring 'rock'  
    const game = new RockPaperScissors(`Nicole`);  
    game.play(`paper`);  
    expect(game.score.user).toBe(1);  
    expect(game.gameHistoryLog[0]).toContain(`win`);  
  });  
  
  it(`should increment cpu score when user loses`, () => {  
    // Force CPU selection to 'paper' so that when user selects 'rock', user loses.  
    jest.spyOn(Math, `random`)  
      .mockReturnValue(0.5); // 0.5 * 3 = 1.5, floor gives 1, so acceptedValues[1] === 'paper'  
    const game = new RockPaperScissors(`Nicole`);  
    game.play(`rock`);  
    expect(game.score.cpu).toBe(1);  
    expect(game.gameHistoryLog[0]).toContain(`lose`);  
  });  
});  
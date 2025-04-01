const { RockPaperScissors } = require(`../resources/scripts/rock_paper_scissors.js`);  
  
describe(`RockPaperScissors class`, function () {  
  describe(`determineWinner()`, function () {  
    test(`win cases`, function () {  
      const game = new RockPaperScissors();  
      expect(game.determineWinner(`rock`, `scissors`)).toBe(`win`);  
      expect(game.determineWinner(`paper`, `rock`)).toBe(`win`);  
      expect(game.determineWinner(`scissors`, `paper`)).toBe(`win`);  
    });  
  
    test(`tie cases`, function () {  
      const game = new RockPaperScissors();  
      expect(game.determineWinner(`rock`, `rock`)).toBe(`tie`);  
      expect(game.determineWinner(`paper`, `paper`)).toBe(`tie`);  
      expect(game.determineWinner(`scissors`, `scissors`)).toBe(`tie`);  
    });  
  
    test(`lose cases`, function () {  
      const game = new RockPaperScissors();  
      expect(game.determineWinner(`rock`, `paper`)).toBe(`lose`);  
      expect(game.determineWinner(`paper`, `scissors`)).toBe(`lose`);  
      expect(game.determineWinner(`scissors`, `rock`)).toBe(`lose`);  
    });  
  });  
    
  describe(`play()`, function() {  
    test(`should increment user score on win`, function() {  
      const game = new RockPaperScissors(`testUser`);  
      // Mock the CPU response to ensure a win  
      jest.spyOn(game, `generateCPUResponse`).mockReturnValue(`scissors`);  
        
      game.play(`rock`);  
      expect(game.score.user).toBe(1);  
      expect(game.score.cpu).toBe(0);  
    });  
      
    test(`should increment CPU score on lose`, function() {  
      const game = new RockPaperScissors(`testUser`);  
      // Mock the CPU response to ensure a loss  
      jest.spyOn(game, `generateCPUResponse`).mockReturnValue(`paper`);  
        
      game.play(`rock`);  
      expect(game.score.user).toBe(0);  
      expect(game.score.cpu).toBe(1);  
    });  
      
    test(`should not increment scores on tie`, function() {  
      const game = new RockPaperScissors(`testUser`);  
      // Mock the CPU response to ensure a tie  
      jest.spyOn(game, `generateCPUResponse`).mockReturnValue(`rock`);  
        
      game.play(`rock`);  
      expect(game.score.user).toBe(0);  
      expect(game.score.cpu).toBe(0);  
    });  
      
    test(`should add to game history log`, function() {  
      const game = new RockPaperScissors(`testUser`);  
      jest.spyOn(game, `generateCPUResponse`).mockReturnValue(`scissors`);  
        
      game.play(`rock`);  
      expect(game.gameHistoryLog.length).toBe(1);  
      expect(game.gameHistoryLog[0]).toContain(`testUser selected rock`);  
      expect(game.gameHistoryLog[0]).toContain(`CPU selected scissors`);  
      expect(game.gameHistoryLog[0]).toContain(`testUser wins`);  
    });  
  });  
    
  describe(`generateCPUResponse()`, function() {  
    test(`should return rock, paper, or scissors`, function() {  
      const game = new RockPaperScissors();  
      const validResponses = [ `rock`, `paper`, `scissors` ];  
        
      // Run multiple times to ensure randomness works correctly  
      for (let i = 0; i < 10; i++) {  
        const response = game.generateCPUResponse();  
        expect(validResponses).toContain(response);  
      }  
    });  
  });  
});  
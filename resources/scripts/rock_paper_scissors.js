// resources/scripts/rock_paper_scissors.js  
class RockPaperScissors {  
  constructor(username) {  
    this.username = username;  
    this.score = {  
      user: 0,  
      cpu: 0   
    };  
    this.gameHistoryLog = [];  
  }  
  
  /**  
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)  
   */  
  generateCPUResponse(){  
    let acceptedValues = [ `rock`, `paper`, `scissors` ];  
    const randomIndexNumber = Math.floor(Math.random() * 3);   
  
    return acceptedValues[randomIndexNumber];  
  }  
    
  /**  
   * returns one of the following values: `win`, `lose`, `tie`  
   */  
  determineWinner(userSelection, cpuSelection){  
    if (userSelection === cpuSelection) {   
      return `tie`;   
    }  
    else if(  
      (userSelection === `paper` && cpuSelection === `rock`) ||   
      (userSelection === `scissors` && cpuSelection === `paper`) ||   
      (userSelection === `rock` && cpuSelection === `scissors`)  
    ) {   
      return `win`;   
    }  
    else {   
      return `lose`;   
    }  
  }  
  
  /**  
   * Plays a round given a user selection.  
   */  
  play(userSelection){  
    const cpuSelection = this.generateCPUResponse();   
    const results = this.determineWinner(userSelection, cpuSelection);   
      
    if(results === `win`) {   
      this.score.user++;   
    }  
    if(results === `lose`) {   
      this.score.cpu++;   
    }  
  
    this.gameHistoryLog.push(  
      ` ` + this.username + ` selected ` + userSelection + `. CPU selected ` + cpuSelection + `: ` + this.username + ` ` + results + `s`  
    );  
  }  
}  
  
module.exports = { RockPaperScissors };  
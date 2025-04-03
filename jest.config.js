// jest.setup.js 
import '@testing-library/jest-dom';   
module.exports = {  
  setupFilesAfterEnv: [ `./jest.setup.js` ],  
  // other config options...  
};  
import path from 'path';  
import { fileURLToPath } from 'url';  
  
// Get __dirname equivalent in ES modules  
const __filename = fileURLToPath(import.meta.url);  
const __dirname = path.dirname(__filename);  
  
export default {  
  mode: `development`, // ensures proper mode  
  entry: `./resources/scripts/index.js`,  
  output: {  
    filename: `main.js`,  
    path: path.resolve(__dirname, `dist`)  
  },  
  resolve: {  
    // Automatically resolve these extensions.  
    extensions: [ `.js` ]  
  }  
};  
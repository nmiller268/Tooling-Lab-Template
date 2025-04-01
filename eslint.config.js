export default [    
  {    
    languageOptions: {    
      ecmaVersion: 2021,    
      sourceType: `module`,    
      globals: {    
        // These replace the "env" settings    
        browser: true,    
        node: true,    
        jest: true,  // Add this line to enable Jest globals  
      }    
    },    
    rules: {    
      "array-bracket-spacing": [ `error`, `always` ],    
      "no-const-assign": `error`,    
      "no-var": `error`,    
      "indent": [ `error`, 2 ],    
      "quotes": [ `error`, `backtick` ],    
      "eqeqeq": `error`    
    }    
  }    
];  
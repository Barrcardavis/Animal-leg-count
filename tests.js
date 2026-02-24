const countFourLeggedAnimals = require('./index.js'); 

// --- Normal Test Cases --- 
console.log("Test 1:", countFourLeggedAnimals(['lion', 'monkey', 'deer'])); 
// Expected: 2 

console.log("Test 2:", countFourLeggedAnimals(['horse', 'spider', 'ant'])); 
// Expected: 1 

console.log("Test 3:", countFourLeggedAnimals(['dog', 'cat', 'elephant'])); 
// Expected: 3 


// --- Edge Test Cases --- 
console.log("Test 4:", countFourLeggedAnimals([])); 
// Expected: 0 

console.log("Test 5:", countFourLeggedAnimals(['spider', 'snake', 'worm'])); 
// Expected: 0 

console.log("Test 6:", countFourLeggedAnimals(['unknown', 'alien', 'robot'])); 
// Expected: 0

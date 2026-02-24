function countFourLeggedAnimals(animals) {
  const fourLegged = ['lion', 'deer', 'elephant', 'horse', 'dog', 'cat']; 
  let count = 0; 
  
  for (const animal of animals) {
    if (fourLegged.includes(animal)) { 
      count++; 
    } 
  }
  
  return count;
} 

module.exports = countFourLeggedAnimals;

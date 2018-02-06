// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
   //split str to an array of words
   const arr = str.split(" ");
   let results = [];
   //For each word inside the array, capitalize the first letter
   for(let word of arr) {
      results.push(word[0].toUpperCase() + word.slice(1));
   }
   return results.join(' ');
}

module.exports = capitalize;

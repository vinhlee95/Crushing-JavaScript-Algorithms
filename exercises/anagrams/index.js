// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
   const charMapA = mapStr(stringA); //{a:1, b:2 , c:3}
   const charMapB = mapStr(stringB);
   //compare number of keys 
   if(Object.keys(charMapA).length !== Object.keys(charMapB).length) {
      return false;
   }
   //compare the value of keys
   for(let char in charMapA) {
      if(charMapA[char] !== charMapB[char]) {
         return false;
      }
   }
   return true;
}

// create 2 objects map of str
function mapStr(str) {
   let charMap = {};
   for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
      charMap[char] = charMap[char] + 1 || 1
   }
   return charMap;
}

module.exports = anagrams;

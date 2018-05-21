// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
   function reverseString(str) {
      let initialString = ""
      for (let character of str) {
         initialString = character + initialString
      }
      return initialString
   }
   let isPlaindrome = reverseString(str)
   if (isPlaindrome === str) {
      return true
   } else {
      return false
   }
}

// function palindrome(str) {
//    // make a reversed string
//    const reversedString = '';
//    str.split('').forEach(char => {
//       reversedString = char + reversedString;
//       console.log(reversedString)
//    });
//    return reversedString === str;
// }

// function palindrome(str) {
//    const reversedString = str.split('').reverse().join('');
//    return reversedString === str;
// }

module.exports = palindrome;

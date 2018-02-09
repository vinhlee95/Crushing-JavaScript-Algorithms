// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
function steps(n, row=0, stair= '') {
   // base case
   if(n===row) {
      return
   }
   if(n===stair.length) {
      console.log(stair)
      return steps(n, row+1)
   }
   if(stair.length <= row) {
      stair += '#'
   } else {
      stair += ' '
   }
   steps(n, row, stair)
}

module.exports = steps;

// SOLUTION 1

// function steps(n) {
//    for (let row = 0; row < n; row++) {
//       // for each row create 1 stair
//       let stair = '';
//       for (let column = 0; column < n; column++) {
//          if (column <= row) {
//             stair += '#';
//          } else {
//             stair += ' ';
//          }
//       }
//       // log the stair after 1 row of '#' was created
//       // get 1 log for each row
//       console.log(stair);
//    }
// }

// SOLUTION 2

// function steps(n) {
//    for (let i = 1; i <= n; i++) {
//       console.log('#'.repeat(i).padEnd(n))
//    }
// }
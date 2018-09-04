// Solution #1
// function printingSteps(n) {
//   let pound = '';

//   for (let i = 0; i < n; i++) {
//     pound += '#';
//     let space = '';

//     for (let x = 0; x < (n - i - 1); x++) {
//       space += ' ';
//     }

//     console.log(pound + space);
//   }
// }

// Solution #2
// function printingSteps(n) {
//   for (let i = 0; i < n; i++) {
//     let str = '';

//     for (let col = 0; col < n; col++) {
//       if (col <= i) {
//         str += '#';
//       } else {
//         str += ' ';
//       }
//     }

//     console.log(str);
//   }
// }

// Solution #3 - recursive
function printingSteps(n, row = 0, stair = '') {
  if (n === row) return;

  if (n === stair.length) {
    console.log(stair);
    return printingSteps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }

  printingSteps(n, row, stair);
}

module.exports = printingSteps;

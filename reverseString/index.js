// Solution #1 (using for)
// function reverse(str) {
//   let arr = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     arr.push(str[i]);
//   }
//   return arr.join('');
// }

// Solution #2 (using for and reverse)
// function reverse(str) {
//   let arr = [];
//   for (let i = 0 ; i <= str.length; i++) {
//     arr.push(str[i]);
//   }
//   return arr.reverse().join('');
// }

// Solution #3 (using reverse)
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// Solution #4 (using for ... of)
// function reverse(str) {
//   let reversed = '';
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// Solution #5 (using ES6 reduce)
function reverse(str) {
  return str.split('').reduce((acc, char) => char + acc, '');
}

module.exports = reverse;

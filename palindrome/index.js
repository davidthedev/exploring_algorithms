// Solution #1
// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');

//   return reversed === str;
// }

// Solution #2
// function palindrome(str) {
//   const reversed = str.split('').reduce((rev, char) => char + rev, '');

//   return reversed === str;
// }

// Solution #3
function palindrome(str) {
  return str.split('').every((char, index, arr) => {
    // compare every character with the character on the other end of string
    return char === str[str.length - index - 1];
  });
}

module.exports = palindrome;

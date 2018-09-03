// Solution #1
// function capitalize(str) {
//   return str.split(' ').map((val) => val.charAt(0).toUpperCase() + val.slice(1, val.length)).join(' ');
// }

// Solution #2
// function capitalize(str) {
//   const words = [];

//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }

//   return words.join(' ');
// }

// Solution #3
function capitalize(str) {
  let capStr = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      capStr += str[i].toUpperCase();
    } else {
      capStr += str[i];
    }
  }

  return capStr;
}

module.exports = capitalize;

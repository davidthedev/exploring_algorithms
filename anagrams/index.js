// Solution #1 - long manual, checking for unicode chars
// function anagrams(stringA, stringB) {
//   stringA = stringA.toLowerCase();
//   stringB = stringB.toLowerCase();

//   const arrA = [];
//   const arrB = [];

//   for (let i = 0; i < stringA.length; i++) {
//     if (
//       (stringA.charCodeAt(i) >= 65 && stringA.charCodeAt(i) <= 90) ||
//       (stringA.charCodeAt(i) >= 97 && stringA.charCodeAt(i) <= 122)
//     ) {
//       arrA.push(stringA.charAt(i));
//     }
//   }

//   for (let i = 0; i < stringB.length; i++) {
//     if (
//       (stringB.charCodeAt(i) >= 65 && stringB.charCodeAt(i) <= 90) ||
//       (stringB.charCodeAt(i) >= 97 && stringB.charCodeAt(i) <= 122)
//     ) {
//       arrB.push(stringB.charAt(i));
//     }
//   }

//   const sortedA = arrA.sort().join('');
//   const sortedB = arrB.sort().join('');

//   return sortedA === sortedB;
// }

// Solution #2
function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) return false;


  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) return false;
  }

  return true;
}

// helper function
function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

module.exports = anagrams;

function maxChar(str) {
  let charMap = {};

  str.split('').forEach((char) => {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char] += 1
    }
  });

  let maxChar = '';
  let maxCharCount = 0;

  for (let char in charMap) {
    if (charMap[char] > maxCharCount) {
      maxChar = char;
      maxCharCount = charMap[char];
    }
  }

  return maxChar;
}

module.exports = maxChar;

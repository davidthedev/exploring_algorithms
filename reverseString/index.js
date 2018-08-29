function reverse(str) {
  let arr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    arr.push(str[i]);
  }
  return arr.join('');
}

module.exports = reverse;

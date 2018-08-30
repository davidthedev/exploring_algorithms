function reverseInt(int) {
  const str = int.toString().split('').reverse().join('');

  return Math.sign(int) * parseInt(str);
}

module.exports = reverseInt;

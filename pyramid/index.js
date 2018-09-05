// Solution #1 - iterative solution
function pyramid(numOfLevels) {
  // find the mid point of each row
  const midpointIndex = Math.floor((2 * numOfLevels - 1) / 2);

  // iterate over each row
  for (row = 0; row < numOfLevels; row++) {
    let rowStr = '';

    // iterate over each column
    for (let column = 0; column < 2 * numOfLevels - 1; column++) {
      // if we are in midpoint append pound sign else empty space
      if (midpointIndex - row <= column && midpointIndex + row >= column) {
        rowStr += '#';
      } else {
        rowStr += ' ';
      }
    }

    console.log(rowStr);
  }
}

module.exports = pyramid;

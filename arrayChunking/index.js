function chunk(array, size) {
  const newArr = [];

  for (let val of array) {
    // get last element in the array (passed by reference)
    const last = newArr[newArr.length - 1];

    // if there isn't a last element
    // or length of last array equals to the size of chunk that we passed in
    // push into the new array, otherwise keep on pushing into the last array
    if (!last || last.length === size) {
      newArr.push([val]);
    } else {
      last.push(val);
    }
  }

  return newArr;
}

module.exports = chunk;

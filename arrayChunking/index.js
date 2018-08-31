function chunk(array, size) {
  let newArr = [];

  for (let val of array) {
    const last = newArr[newArr.length - 1];

    if (!last || last.length === size) {
      newArr.push([val]);
    } else {
      last.push(val);
    }
  }

    return newArr;
}

module.exports = chunk;

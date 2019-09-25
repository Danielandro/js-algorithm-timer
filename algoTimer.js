const NumberOfIncrements = 10;
const ArrayIncrements = 50_000;

function timer(arrSize, algorithm) {
  // let testArr = setupArray(arrSize);

  for (let i = 10; i <= arrSize; i += 10) {
    let testArr = setupArray(i);
  }
}

function setupArray(arrSize) {
  let arr = [];
  for (let i = 0; i < arrSize; i++) {
    arr.push(i);
  }

  return arr;
}

module.exports = {
  timer
};

// setup the array
// time it with the chosen algorithm
// grab the results
// plot the graph
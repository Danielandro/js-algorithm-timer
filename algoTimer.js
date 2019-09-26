// const NumberOfIncrements = 10;
// const ArrayIncrements = 50000;

function timer(arrSize, algorithm) {
  for (let i = 10; i <= arrSize; i += 10) {
    let testArr = setupArray(i);
    // time at start  
    console.time(`Array Size: ${testArr.length}`);
    // call method to test
    testArr.algorithm;
    // time when finished 
    console.timeEnd(`Array Size: ${testArr.length}`);
  }
}

function setupArray(arrSize) {
  let arr = [];
  for (let i = 1; i <= arrSize; i++) {
    arr.push(i);
  }

  return arr;
}

module.exports = {
  timer
};

var reverse = Array.prototype.reverse;

timer(1000000, reverse);
// setup the array
// time it with the chosen algorithm
// grab the results
// plot the graph
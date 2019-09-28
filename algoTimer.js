// const NumberOfIncrements = 10;
// const ArrayIncrements = 50000;
const {
  performance,
  PerformanceObserver
} = require('perf_hooks');

function timer(arrSize, algorithm) {
  for (let i = 5000; i <= arrSize; i += 5000) {
    let testArr = setupArray(i);


    function run() {
      testArr.algorithm;
    }

    const wrapped = performance.timerify(run);

    const obs = new PerformanceObserver((list) => {
      console.log(`SIZE: ${i}`, list.getEntries()[0].duration, ' ms');
      obs.disconnect();
    });
    obs.observe({ entryTypes: ['function'] });

    // A performance timeline entry will be created
    wrapped();
  }
}

function setupArray(arrSize) {
  let arr = [];
  for (let i = 1; i <= arrSize; i++) {
    arr.push(i);
  }

  return arr;
}

function shuffle(arr) {
  // Fisher-Yates Shuffle Modern Algorithm 
  let currentIndex = arr.length;
  let randomIndex, temp;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    temp = arr[randomIndex];
    arr[randomIndex] = arr[currentIndex];
    arr[currentIndex] = temp;
  }
  return arr;
}

module.exports = {
  timer
};

var reverse = Array.prototype.reverse;

timer(10000000, reverse);
// setup the array
// time it with the chosen algorithm
// grab the results
// plot the graph





// const NumberOfIncrements = 10;
// const ArrayIncrements = 50000;

function timer(arrSize, algorithm) {
  for (let i = 5000; i <= arrSize; i += 5000) {
    let testArr = setupArray(i);


    let start = performance.now();
    testArr.algorithm;
    let end = performance.now();

    let time = end - start;
    console.log(time);

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


var reverse = Array.prototype.reverse;

timer(10000000, reverse);
// setup the array
// time it with the chosen algorithm
// grab the results
// plot the graph

{/* <script>
  var ctx = document.getElementById('myChart');
      var myChart = new Chart(ctx, {
    type: 'bar',
        data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
datasets: [
            {
    label: '# of Votes',
data: [12, 19, 3, 5, 2, 3],
backgroundColor: [
'rgba(255, 99, 132, 0.2)',
'rgba(54, 162, 235, 0.2)',
'rgba(255, 206, 86, 0.2)',
'rgba(75, 192, 192, 0.2)',
'rgba(153, 102, 255, 0.2)',
'rgba(255, 159, 64, 0.2)'
],
borderColor: [
'rgba(255, 99, 132, 1)',
'rgba(54, 162, 235, 1)',
'rgba(255, 206, 86, 1)',
'rgba(75, 192, 192, 1)',
'rgba(153, 102, 255, 1)',
'rgba(255, 159, 64, 1)'
],
borderWidth: 1
}
]
},
        options: {
    scales: {
    yAxes: [
              {
    ticks: {
    beginAtZero: true
}
}
]
}
}
});
    </script>

 */}

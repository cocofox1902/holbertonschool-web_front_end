function countPrimeNumbers() {
  var count = 0;
  for (var i = 2; i <= 100; i++) {
    var isPrime = true;
    for (var j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      count++;
    }
  }
  return count;
}
let start = performance.now();
(setTimeout = () => {
  for (let i = 1; i <= 100; i++) {
    countPrimeNumbers();
  }
}),
  0;
let end = performance.now();
let time = end - start;
console.log(
  "Execution time of printing countPrimeNumbers was " + time + " milliseconds."
);

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
for (let counter = 0; counter < 101; counter++) {
  countPrimeNumbers();
}
let end = performance.now();
let time = end - start;
console.log(
  "Execution time of calculating prime numbers 100 times was " + time + " milliseconds."
);

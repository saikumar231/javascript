function summing(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
      sum = sum+i;
    }
    return sum;
  }
  
  const start = performance.now();
  const result = summing(1000);
  const end = performance.now();
  
  console.log(`The sum of numbers from 0 to 1000 is: ${result}`);
  console.log(start);
  console.log(end);
  console.log(end-start);
  console.log(`The calculation took ${end - start} milliseconds.`);
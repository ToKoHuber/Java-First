let n = 5;
let i;
let sum;

for (i = 0; i <= 10; i = i + 1) {
  sum = n * i;
  console.log(n, "+", i, "=", sum);
}

let i;
let n = 10;
let sum = 0;

for (i = 1; i <= n; i = i + 1) {
  if (i % 2 == 0) {
    sum = sum + i;
  }
}
console.log(sum);

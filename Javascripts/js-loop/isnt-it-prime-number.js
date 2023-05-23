const n = 100;

let i = 2,
  isPrimeNumber = true;

while (i <= n / 2) {
  if (n % i === 0) isPrimeNumber = false;
  i++;
}

if (isPrimeNumber === true) {
  console.log("True");
} else {
  console.log("False");
}

const n = 123;

const a = Math.round(n / 100);
const b = Math.round((n % 100) / 10);
const c = n % 10;

const sum = a + b + c;

console.log(sum);

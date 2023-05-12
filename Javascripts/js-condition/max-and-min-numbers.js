const a = 28;
const b = 30;
const c = 32;

let max = a;
let min = a;

if (b >= max) max = b;
if (c >= max) max = c;
if (b <= min) min = b;
if (c <= min) min = c;

console.log(`Max number is ${max}`);
console.log(`Min number is ${min}`);

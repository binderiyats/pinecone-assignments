const a = Number(prompt("Please, enter first random number: "));
const b = Number(prompt("Please, enter last random number: "));

const max = a > b ? a : b;
const min = a < b ? b : a;

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);

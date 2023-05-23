// prompt - оор гараас тоо авч тэр тооныхоо факториалыг олох.

const n = Number(prompt("Enter a number: "));
let multiply = 1;
let i = 1;

while (i <= n) {
  multiply *= i;
  i++;
}

console.log(multiply);

// 1. Давхар давталт
const input = 5;
let output = "";

for (let i = 1; i <= input; i++) {
  for (let j = 1; j <= i; j++) output += j + " ";

  output += "\n";
}

console.log(output);

// 2. Давхар давталт
const input2 = 5;
let output2 = "";

for (let i = 1; i <= input2; i++) {
  for (let j = input2; j >= i; j--) output2 += j + " ";

  output2 += "\n";
}

console.log(output2);

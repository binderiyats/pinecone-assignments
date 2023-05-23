// example 1: input = "Hello World", output = "hELLO wORLD"
// example 2: input = "This Is STRING!", output = "tHIS iS string!"

const input = "Hello World";
let output = "";
let i = 0;

while (i < input.length) {
  if (input[i].toUpperCase() === input[i]) {
    output += input[i].toLowerCase();
  } else {
    output += input[i].toUpperCase();
  }
  i++;
}

console.log(output);

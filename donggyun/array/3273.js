const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let count = 0;

const numbers = new Map();

for (let i = 0; i < input[0][0]; i++) {
  const target = input[2][0] - input[1][i];
  if (numbers.has(target)) {
    count++;
    numbers.delete(target);
  } else {
    numbers.set(input[1][i], true);
  }
}

console.log(count);

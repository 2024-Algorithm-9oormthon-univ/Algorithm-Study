const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let cost = input[0][1];
let index = input.length - 1;
let num = 0;

while (cost !== 0) {
  if (cost >= input[index]) {
    const count = Math.floor(cost / input[index]);
    num += count;
    cost -= count * input[index];
  }
  index--;
}

console.log(num);

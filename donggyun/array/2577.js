const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const arr = new Array(10).fill(0);
[...(input[0] * input[1] * input[2]).toString()].map((v) => (arr[v] += 1));
arr.map((v) => console.log(v));

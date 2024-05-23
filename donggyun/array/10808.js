const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const arr = new Array(26).fill(0);
[...input].map((v) => (arr[v.charCodeAt() - 97] += 1));

console.log(...arr);

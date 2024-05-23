const input = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const arr = new Array(10).fill(0);
[...input.toString()].map((v) => arr[v]++);

const ceil = Math.ceil((arr[6] + arr[9]) / 2);
arr[6] = ceil;
arr[9] = ceil;
console.log(Math.max(...arr));

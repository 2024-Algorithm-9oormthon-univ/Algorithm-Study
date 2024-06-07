function solution(brown, yellow) {
    const count = brown + yellow;
    let height = 0;
    for (let i = 1; i <= Math.sqrt(count); i++) {
        if (count % i === 0 && height < i) {
          if ((count / i - 2) * (i - 2) === yellow) {
                height = i;
            }
        }
    }
    return [count/height, height];
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24))

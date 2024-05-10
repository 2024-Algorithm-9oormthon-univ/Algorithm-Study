function solution(N, number) {
  if (N === number) return 1;

  const cases = Array.from(new Array(9), () => new Set());

  cases.forEach((element, index) => {
    if (index !== 0) {
      element.add(Number(String(N).repeat(index)));
    }
  });

  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j < i; j++) {
      for (let first of cases[j]) {
        for (let second of cases[i - j]) {
          cases[i].add(first + second);
          cases[i].add(first - second);
          cases[i].add(first * second);
          cases[i].add(first / second);
        }
      }
    }
    if (cases[i].has(number)) return i;
  }
  return -1;
}

function solution(clothes) {
  let answer = 1;
  const obj = {};

  clothes.forEach((v) => {
    obj[v[1]] = (obj[v[1]] || 0) + 1;
  });

  for (key in obj) {
    answer *= obj[key] + 1;
  }

  return answer - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);

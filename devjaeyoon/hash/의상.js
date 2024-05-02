function solution(clothes) {
  const closet = {};

  for (const cloth of clothes) {
    if (Object.keys(closet).includes(cloth[1])) {
      closet[cloth[1]].push(cloth[0]);
    } else {
      closet[cloth[1]] = [];
      closet[cloth[1]].push(cloth[0]);
    }
  }

  let answer = 1;

  for (const category of Object.keys(closet)) {
    answer *= closet[category].length + 1;
  }

  return answer - 1;
}

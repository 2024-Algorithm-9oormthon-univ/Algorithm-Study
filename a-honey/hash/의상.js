function solution(clothes) {
  let clothes_map = new Map();
  
  clothes.forEach(([name, kind]) => {
    if (clothes_map.has(kind)) {
      clothes_map.set(kind, clothes_map.get(kind) +1);
    } else {
      clothes_map.set(kind, 1);
    }
  })
  
  let answer = 1;
  
  clothes_map.forEach(count => {
    answer *= (count + 1);
  });
  
  return answer - 1;
}
console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]))
console.log(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]))

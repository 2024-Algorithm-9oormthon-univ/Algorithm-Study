function solution(phone_book) {
  return !phone_book
    .sort()
    .some((value, index, array) => array[index + 1]?.startsWith(value));
}

console.log(solution(["123", "456", "789"]));

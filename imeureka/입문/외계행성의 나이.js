function solution(age) {
  const arr = age.toString().split("");
  const alphabet = "abcdefhhih";
  return arr.map((v) => alphabet[v]).join("");
}
// cur와 한글자만 다른 원소들을 배열로 만들어 반환 (나머지는 0으로 반환)
const isOneDiff = (curWord, words, visited) => {
  return words.map((word, i) => {
    if (
      !visited[i] &&
      [...curWord].filter((v, i) => v !== word[i]).length === 1
    )
      return word;
    else return 0;
  });
};

function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  let min = Infinity;
  let depth = 0;

  const visited = Array(words.length).fill(false);

  const dfs = (str, index, depth) => {
    const findArr = isOneDiff(str, words, visited);
    if (str === target) {
      min = Math.min(min, depth);
    } else {
      for (let i = 0; i < words.length; i++) {
        if (!visited[i] && findArr[i]) {
          visited[i] = true;
          depth++;
          dfs(findArr[i], i, depth);
          depth--;
        }
      }
    }
    visited[index] = false;
  };

  dfs(begin, 0, depth);

  return min;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));

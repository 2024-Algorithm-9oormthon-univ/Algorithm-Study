function solution(numbers) {
  const resultNumbers = [];

  for (let number of numbers) {
    resultNumbers.push(String(number));
  }

  resultNumbers.sort((a, b) => b + a - (a + b));

  if (resultNumbers[0] === '0') return '0';

  return resultNumbers.join('');
}

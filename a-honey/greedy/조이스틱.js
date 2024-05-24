function solution(name) {
  const ALPHABET_ARRAY = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let countUpDown = 0;
  let countLeftRight = name.length - 1;
  
  for (let i = 0; i < name.length; i++) {
    let currentStringIndex = ALPHABET_ARRAY.findIndex((string) => string === name[i]);
    let nextStringIndex = i + 1;
    
    if (currentStringIndex === -1){
      console.error('정상적인 문자가 아님');
    }
    
    if (currentStringIndex >= ALPHABET_ARRAY.length / 2) {
      currentStringIndex = ALPHABET_ARRAY.length - currentStringIndex;
    }
    
    countUpDown += currentStringIndex;
    
    while(nextStringIndex < name.length && name[nextStringIndex] === 'A') {
      nextStringIndex++;
    }
    
    countLeftRight = Math.min(countLeftRight,  i * 2 + name.length - nextStringIndex, (name.length - nextStringIndex) * 2 + i);
  }
  
  
    return countUpDown + countLeftRight;
}

console.log(solution("JEROEN"));

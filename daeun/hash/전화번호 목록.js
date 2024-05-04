function solution(phoneBook) {
  phoneBook.sort();

  // 정렬된 전화번호부에서 연속된 두 번호만을 비교
  for (let i = 0; i < phoneBook.length - 1; i++) {
    // startsWith 사용해서 현재 번호가 다음 번호의 접두사인지 확인
    if (phoneBook[i + 1].startsWith(phoneBook[i])) {
      return false;
    }
  }
  return true;
}

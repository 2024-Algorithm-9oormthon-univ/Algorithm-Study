# 🍯그리디 알고리즘
그리디 알고리즘은 선택의 순간마다 최적의 상황만을 쫓아 최종 해답에 도달하는 방식입니다.
- 현재 상황에서 가장 좋아 보이는 것만을 선택하는 알고리즘
- 기준에 따라 좋은 것을 선택하는 알고리즘
- 해법이 정당한지 검증이 필요

따라서 두 가지의 조건을 만족하는 “특정한 상황”이 아니면 탐욕 알고리즘은 최적의 해를 보장하지 못합니다. 그래서 두 가지의 조건을 성립해야 합니다.

>탐욕적 선택 속성(Greedy Choice Property) : 앞의 선택이 이후의 선택에 영향을 주지 않는다.
최적 부분 구조(Optimal Substructure) : 문제에 대한 최종 해결 방법은 부분 문제에 대한 최적 해결 방법으로 구성된다.

# 📂실전 문제
## [PGS]-조이스틱
내가 알고싶은 글자를 입력받는다! 
몇글자인지는 모르지만 string.size == 알고싶은 글자.size
그리고 그 글자의 만약 kat 라면 
a → k 까지 이동 + a + a → t까지의 수
필요함 : a-k / k - a  어떤게 더 큰지 
만약 j까진,
a→b→c→d→e→f→g→h→i→j : 9
a : 0
만약 n까진,
a→b→c→d→e→f→g→h→i→j →k → l→ m→ n : 13
첫번 째 a 에서 마지막으로 인덱스로 이동 :  1

연속된 A의 길이에 따라 최소 이동 방향이 달라지기 때문에 
알파벳을 변경한 횟수 + 커서 이동 횟수

1. 알파벳을 변경한 횟수 : charChange
2. 커서 이동 횟수 : minChange
3. 알파벳 정방향 수 : k-a 
4. 알파벳 역방향 수 : a-k  둘 중 작은걸 선택 → 최솟값을 위해

# Dynamic Programming
# 복잡한 문제를 간단한 여러 개의 하위 문제로 나누어 풀고, 전체 문제를 해결하는 알고리즘

def solution(N, number):
    # 가능한 숫자의 집합을 담을 리스트
    possible_set = [set() for _ in range(9)]
    
    # 각 숫자별로 만들 수 있는 수를 각 possible_set에 추가
    for i in range(1, 9):
        possible_set[i].add(int(str(N) * i))
    
    # N을 사용한 횟수가 1부터 8까지 반복
    for i in range(1, 9):
        for j in range(1, i):
            for num1 in possible_set[j]:
                for num2 in possible_set[i - j]:
                    possible_set[i].add(num1 + num2)
                    possible_set[i].add(num1 - num2)
                    possible_set[i].add(num1 * num2)
                    if num2 != 0:
                        possible_set[i].add(num1 // num2)
        
        # 목표 숫자 반환
        if number in possible_set[i]:
            return i
    
    # 목표 숫자가 없으면 -1 반환
    return -1

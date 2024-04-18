# 큰 숫자부터 찾기
# number의 각 숫자를 작은 수부터 제거
# k를 넘어가면 제거 불가능

def solution(number, k):
    stack = []
    
    for num in number:
        # stack에 숫자가 있으면 비교
        # 기회가 남아있으면 비교
        # 현재 숫자가 stack의 숫자보다 크면 stack의 숫자 교체
        while stack and k > 0 and stack[-1] < num:
            stack.pop()
            k -= 1
        
        # 현재 숫자를 스택에 추가
        # 없으면 일단 추가하고 뒤의 숫자와 비교 진행
        stack.append(num)
    
    # 크기 순서대로 추가되면 뒤에서부터 남은 제거 수만큼 슬라이스
    if k > 0:
        stack = stack[:-k]
    
    return ''.join(stack)

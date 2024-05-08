# commands를 반복
# 구조할당하여 자르고 정렬 후 답 추가

def solution(array, commands):
    answer = []
    for command in commands:
        i, j, k = command
        # i - 1 부터 j까지 자른 후 정렬
        sliced_array = sorted(array[i-1:j])
        # commands[index]의 k번째 숫자 추가
        answer.append(sliced_array[k-1])
    return answer

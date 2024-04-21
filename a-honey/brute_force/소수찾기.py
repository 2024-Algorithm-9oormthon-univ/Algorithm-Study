# 가능한 조합을 전부 만들어서 소수인지 판단

from itertools import permutations

# 소수를 판단하는 함수
def is_prime(num):
    if num < 2:
        return False
    for i in range(2, int(num**.5) + 1): # num의 제곱근 올림까지만 판단
        if num % i == 0:
            return False
    return True

def solution(numbers):
    answer_num_array = set()
    
    for i in range(1, len(numbers) + 1):
        perms = permutations(numbers, i)
        for perm in perms:
            num = int(''.join(perm))
            if is_prime(num):
                answer_num_array.add(num)
        
        
    return len(answer_num_array)

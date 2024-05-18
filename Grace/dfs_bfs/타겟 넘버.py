def solution(numbers, target):
    leaves = [0] 
    answer = 0 # 카운트
    
    for num in numbers:
        temp = []
        
        for leaf in leaves:
            temp.append(leaf + num) 
            temp.append(leaf - num)
        
        leaves = temp
        
    # 타겟과 같은지를 확인
    for leaf in leaves:
        if leaf == target:
            answer += 1
    
    return answer
def solution(name): 
    answer = 0
    # 상, 하
    tb = 0
    # 좌, 우는 사실상 name의 길이 - 1
    lr = len(name) - 1
    
    # A를 고려하기 위함.
    next = 0
    
    # (0, 'J') (1, 'E') (2, 'R') ... 
    for i, char in enumerate(name):
        # 상, 하 중 더 차이가 적은 곳
        tb += min(ord(char) - ord('A'), ord('Z') - ord(char) + 1) 
        
        # A 탐색
        next = i + 1
        
        while next < len(name) and name[next] == 'A':
            next += 1
        
        # 기존, A를 왼쪽으로 검사, A를 오른쪽으로 검사 중 최소를 찾음.
        lr = min([lr, i * 2 + len(name) - next, i + 2 * (len(name) - next)])
        
    # 좌우 와 상하 를 더함
    answer = lr + tb
    return answer
def solution(n, times):
    # 6명이고 7분, 10분 걸림 각각
    left = 0
    right = max(times) * n
    answer = 0
    
    while left <= right:
        mid = (left + right) // 2 
        users = 0 # 심사한 사람 수 
        
        for time in times:
            users += mid // time
						# users가 n보다 큰 경우 탐색이 끝나야 한다.
            if users >= n:
                break
        # users가 n명보다 초과해서 심사하였다면, 시간이 너무 많다는 것이다.
        if users >= n:
            answer = mid
            right = mid -1
        # users가 n보다 미만으로 심사하였다면, 시간이 너무 부족한 것이다.
        else:
            left = mid + 1

    return answer
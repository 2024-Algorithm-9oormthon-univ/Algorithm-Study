# binary_search
# 가장 작은 시간과 가장 오랜 시간을 찾고 중간값으로 최적의 답 찾기

def solution(n, times):
    left = 1  # 가능한 최소 시간
    right = max(times) * n  # 가장 오래걸리는 심사관이 모든 사람을 심사하는 경우
    
    answer = 0
    
    while left <= right:
        mid = (left + right) // 2  # 중간값
        
        # 중간값동안 각 심사관이 맡은 사람들의 총합
        total_people = sum(mid // t for t in times)
        
        # 가능한 수가 더 크므로, 최대 시간을 더 줄여 최적의 시간 찾기
        if total_people >= n:
            answer = mid # 중간값을 answer에 기록
            right = mid - 1 # 최대 시간을 줄임
        # 가능한 수가 더 작으므로, 최소 시간을 늘림
        else:
            left = mid + 1 # 최소 시간을 늘림
    
    return answer

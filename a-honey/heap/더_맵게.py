# heapq: 힙 큐(Heap Queue) 알고리즘을 제공하는 모듈
# 힙은 이진 트리의 일종으로, 최솟값 또는 최댓값을 빠르게 찾을 수 있도록 설계된 자료 구조

import heapq

def solution(scoville, K):
    heapq.heapify(scoville)  # scoville 배열을 힙으로 변환
    count = 0
    
    
    # 가장 작은 요소가 K 미만인 동안 반복, 이상이 되면 종료
    while scoville[0] < K:
        if len(scoville) < 2:
            return -1  # 섞을 요소가 없는 경우 -1 반환
        
        # 가장 작은 요소를 꺼내서 반환
        first = heapq.heappop(scoville)
        # 두번째로 작은 요소를 꺼내서 반환
        second = heapq.heappop(scoville)
        
        # 새로운 스코빌 지수 계산
        new_scoville = first + (second * 2)
        
        # 계산된 스코빌 지수를 힙에 삽입
        heapq.heappush(scoville, new_scoville)
        
        count += 1
    
    return count

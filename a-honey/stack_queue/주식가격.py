# 현재 가격이 뒤의 가격보다 낮을 때까지 count 후 추가

def solution(prices):
    answer = []
    for i in range(len(prices)):
        count = 0
        # 현재 가격과 1초 뒤의 가격을 비교
        for j in range(i+1, len(prices)):
            time += 1
            # 현재 가격이 더 높을때 중단 후 해당 시간 추가
            if prices[i] > prices[j]:
                break
        answer.append(time)
    return answer

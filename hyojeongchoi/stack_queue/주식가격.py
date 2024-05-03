from collections import deque

def solution(prices):
    answer = []
    q_prices = deque(prices)
    while q_prices:
        price = q_prices.popleft()
        time = 0
        for q in q_prices:
            time += 1
            if price > q:
                break
        answer.append(time)
    return answer
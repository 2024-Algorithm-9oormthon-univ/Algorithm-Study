# 스택에 네트워크를 넣어놓고, 방문여부를 표시

def dfs(computers, visited, start):
    stack = [start]  # 시작 노드 인덱스를 스택에 추가

    while stack:
        node = stack.pop()  # 스택에서 노드 인덱스를 꺼냄
        if not visited[node]:  # 방문하지 않은 노드인 경우에만 처리
            visited[node] = True  # 방문 표시
            for i in range(len(computers)):  # 현재 노드와 연결된 노드들을 탐색
                if computers[node][i] == 1 and not visited[i]:  # 연결되어 있고, 방문하지 않은 노드인 경우
                    stack.append(i)  # 스택에 추가하여 나중에 탐색

def solution(n, computers):
    answer = 0 # 네트워크 개수 초기화
    visited = [False] * n  # 각 네트워크의 방문 여부를 저장

    for i in range(n):
        if not visited[i]:  # 방문하지 않은 경우(True)만 DFS 수행
            dfs(computers, visited, i)  # DFS 호출
            answer += 1  # DFS가 종료되면 네트워크 개수 증가

    return answer

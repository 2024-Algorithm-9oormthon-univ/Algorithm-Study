function solution(triangle) {
    const height = triangle.length;

    // 바닥부터 시작하여 위로 올라가면서 각 단계의 최대 합을 계산
    for (let floor = height - 2; floor >= 0; floor--) {
        for (let i = 0; i <= floor; i++) {
            // 현재 위치에서 내려갈 수 있는 두 경로 중 더 큰 값을 선택하여 현재 값과 더함
            triangle[floor][i] += Math.max(triangle[floor + 1][i], triangle[floor + 1][i + 1]);
        }
    }

    // 계산이 완료된 후, 삼각형의 꼭대기에는 최대 합이 저장됨
    return triangle[0][0];
}


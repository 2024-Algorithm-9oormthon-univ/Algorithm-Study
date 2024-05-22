function solution(n, times) {
    times.sort((a, b) => a - b); // 심사 시간을 오름차순으로 정렬
    let min = 1; // 가능한 최소 시간
    let max = n * times[times.length - 1]; // 가능한 최대 시간
    let answer = max; // 최소 시간을 저장할 변수, 초기값을 최대 시간으로 설정

    while (min <= max) {
        const mid = Math.floor((min + max) / 2); // 중간값 계산
        let count = 0; // 현재 중간값으로 심사 받을 수 있는 사람 수
        for (let time of times) {
            count += Math.floor(mid / time); // 각 심사대별로 심사받을 수 있는 사람 수 누적
            if (count >= n) break; // 모든 사람을 심사할 수 있으면 반복 종료
        }

        if (count >= n) { // 모든 사람을 심사할 수 있는 경우
            answer = mid; // 최소 시간 업데이트
            max = mid - 1; // 더 작은 시간 탐색을 위해 max 조정
        } else { // 모든 사람을 심사할 수 없는 경우
            min = mid + 1; // 더 많은 시간이 필요하므로 min 조정
        }
    }

    return answer; // 계산된 최소 시간 반환
}

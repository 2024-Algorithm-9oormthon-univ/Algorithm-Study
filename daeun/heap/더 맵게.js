class MinHeap {
    constructor() {
        this.heap = []; 
    }

    insert(value) {
        this.heap.push(value); 
        this.bubbleUp(); // 힙 속성을 유지하기 위해 새 값을 올바른 위치로 이동
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        const element = this.heap[index]; 

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex]; 

            if (element >= parent) break; // 부모가 더 작거나 같으면 위치를 변경할 필요 없음

            this.heap[index] = parent; // 부모를 현재 위치로 이동
            index = parentIndex; // 인덱스를 부모의 위치로 업데이트
        }
        this.heap[index] = element; // 최종 위치에 새 값을 삽입
    }

    extractMin() {
        const min = this.heap[0]; // 최소값 (루트 노드)
        const end = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = end; 
            this.sinkDown(0); // 힙 속성을 유지하기 위해 루트부터 내려감
        }

        return min; 
    }

    sinkDown(index) {
        const length = this.heap.length;
        const element = this.heap[index];

        while (true) {
            let leftChildIndex = 2 * index + 1; 
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild < element) {
                    swap = leftChildIndex; // 왼쪽 자식이 더 작으면 스왑할 인덱스로 설정
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild < element) || // 오른쪽 자식이 현재 요소보다 작으면 스왑할 인덱스로 설정
                    (swap !== null && rightChild < leftChild) // 오른쪽 자식이 왼쪽 자식보다 작으면 스왑할 인덱스를 오른쪽 자식으로 설정
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break; // 더 이상 스왑할 필요가 없으면 루프 종료

            this.heap[index] = this.heap[swap]; // 현재 위치에 스왑할 자식을 놓음
            index = swap; // 인덱스를 스왑된 위치로 업데이트
        }
        this.heap[index] = element; // 최종 위치에 현재 요소를 놓음
    }

    size() {
        return this.heap.length; // 힙의 크기 반환
    }
}

function solution(scoville, K) {
    const heap = new MinHeap(); // 최소 힙 생성
    scoville.forEach(num => heap.insert(num)); // 모든 스코빌 지수를 힙에 삽입

    let mixCount = 0; 

    while (heap.size() > 1 && heap.heap[0] < K) {
        const first = heap.extractMin(); // 가장 작은 스코빌 지수를 꺼냄
        const second = heap.extractMin(); // 두 번째로 작은 스코빌 지수를 꺼냄

        const newScoville = first + second * 2; 
        heap.insert(newScoville);
        mixCount++; 
    }

    if (heap.heap[0] < K) {
        return -1; // 모든 음식의 스코빌 지수를 K 이상으로 만들 수 없는 경우 -1 반환
    }

    return mixCount;
}
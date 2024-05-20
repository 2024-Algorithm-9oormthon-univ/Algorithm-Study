// heap을 사용하지 않은 풀이
function solution(operations) {
  const arr = [];

  for (const operation of operations) {
    const [cmd, data] = operation.split(' ');

    if (cmd === 'I') {
      arr.push(Number(data));
      continue;
    }

    if (cmd === 'D') {
      if (arr.length !== 0) {
        if (data === '-1') {
          arr.splice(arr.indexOf(Math.min(...arr)), 1);
        }
        if (data === '1') {
          arr.splice(arr.indexOf(Math.max(...arr)), 1);
        }
      }
    }
  }

  if (arr.length === 0) return [0, 0];
  if (arr.length === 1) return [arr[0], arr[0]];

  return [Math.max(...arr), Math.min(...arr)];
}

// heap을 사용한 풀이
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 요소 추가
  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  // 새로 추가된 요소를 올바른 위치로 이동
  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      if (this.heap[parentIdx] <= this.heap[index]) break;
      // 부모 노드와 자식 노드 교환
      this.swap(parentIdx, index);
      index = parentIdx;
    }
  }

  // 최소값 제거 및 반환
  extractMin() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown();
    }
    return min;
  }

  // 힙 재구성
  sinkDown() {
    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.heap[leftChildIdx];
        if (leftChild < element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.heap[rightChildIdx];
        if ((swap === null && rightChild < element) || (swap !== null && rightChild < leftChild)) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.swap(idx, swap);
      idx = swap;
    }
  }

  // 최대값 제거 및 반환
  extractMax() {
    if (this.heap.length === 0) return null;
    let maxIndex = 0;
    // 최대값 탐색
    this.heap.forEach((value, index) => {
      if (value > this.heap[maxIndex]) maxIndex = index;
    });
    const max = this.heap[maxIndex];
    // 최대값과 마지막 요소 교환 후 pop으로 제거
    this.swap(maxIndex, this.heap.length - 1);
    this.heap.pop();
    // 힙 재구성
    this.bubbleUp();
    this.sinkDown();
    return max;
  }
}

function solution(operations) {
  const minHeap = new MinHeap();

  for (const operation of operations) {
    const [cmd, data] = operation.split(' ');

    if (cmd === 'I') {
      minHeap.insert(Number(data));
      continue;
    }

    if (cmd === 'D') {
      if (minHeap.length !== 0) {
        if (data === '-1') {
          minHeap.extractMin();
        }
        if (data === '1') {
          minHeap.extractMax();
        }
      }
    }
  }

  if (minHeap.heap.length === 0) return [0, 0];
  if (minHeap.heap.length === 1) return [minHeap.heap[0], minHeap.heap[0]];

  return [minHeap.extractMax(), minHeap.heap[0]];
}

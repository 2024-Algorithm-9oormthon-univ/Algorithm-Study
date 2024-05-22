class priorityQueue {
  constructor(arr) {
    this.arr = arr;
  }
  inqueue(value) {
    this.arr.push(value);
  }

  dequeue() {
    let i = 0;
    let min = this.arr[i];
    for (let idx in this.arr) {
      if (min > this.arr[idx]) {
        min = this.arr[idx];
        i = idx;
      }
    }
    return parseInt(this.arr.splice(i, 1));
  }
}

function solution(scoville, K) {
  const LENGTH = scoville.length;
  const queue = new priorityQueue(scoville);

  while (queue.arr.length > 1) {
    const num1 = queue.dequeue();
    if (num1 >= K) return LENGTH - queue.arr.length - 1;

    const num2 = queue.dequeue();
    if (num2 >= K) return LENGTH - queue.arr.length - 1;

    queue.inqueue(num1 + num2 * 2);
  }

  if (queue.arr.length === 1 && queue.arr[0] > K) return 0;

  return -1;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7));

class MaxHeap {
  constructor() {
    this.heap = [];
  }
  build(array) {
    this.heap = array;
    for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
      this.heapifyDown(i);
    }
  }
  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }
  remove() {
    if (this.heap.length === 0) {
      return null;
    }
    const item = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown(0);
    return item;
  }
  heapifyUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);

    while (index > 0 && this.heap[parentIndex] < this.heap[index]) {
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }
  heapifyDown(index) {
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;
    let largerChildIndex = index;
    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] > this.heap[largerChildIndex]
    ) {
      largerChildIndex = leftChildIndex;
    }
    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] > this.heap[largerChildIndex]
    ) {
      largerChildIndex = rightChildIndex;
    }
    if (largerChildIndex !== index) {
      [this.heap[largerChildIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[largerChildIndex],
      ];
      this.heapifyDown(largerChildIndex);
    }
  }
}

const maxHeap = new MaxHeap();
maxHeap.build([4, 10, 3, 5, 1, 2]);
console.log(maxHeap.heap,'----build'); // [10, 5, 3, 4, 1, 2]
maxHeap.insert(8);
console.log(maxHeap.heap); // [10, 8, 3, 5, 1, 2, 4]
console.log(value,'---------second largest')
const removed = maxHeap.remove();
console.log(removed); // 10
console.log(maxHeap.heap); // [8, 5, 3, 4, 1, 2]

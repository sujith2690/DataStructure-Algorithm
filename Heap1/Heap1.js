class MaxHeap {
  constructor() {
    this.heap = [];
  }
  build(array) {
    this.heap = array;
    for (let i = Math.floor(this.heap.length  / 2); i >= 0; i--) {
      console.log(i,'----***')
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
    let Lc = 2 * index + 1;
    console.log(Lc,'----Lc')
    let Rc = 2 * index + 2;
    console.log(Rc,'-------Rc')
    let Largest = index;
    console.log(Largest,'--------Largest')

    if (
      Lc < this.heap.length &&
      this.heap[Lc] > this.heap[Largest]
    ) {
      Largest = Lc;
      console.log(Largest,'-------1st con')
    }
    if (
      Rc < this.heap.length &&
      this.heap[Rc] > this.heap[Largest]
    ) {
      Largest = Rc;

      console.log(Largest,'-------2  st con')
    }
    if (Largest !== index) {
      [this.heap[Largest], this.heap[index]] = [
        this.heap[index],
        this.heap[Largest],
      ];
      console.log(Largest,'-------next loop')
      this.heapifyDown(Largest);
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


class MaxHeap {
    constructor() {
      this.heap = [];
    }
    // Build the heap from an array
    build(array) {
      this.heap = array;
      for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
        this.heapifyDown(i);
      }
    }
    // Insert a value into the heap
    insert(value) {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
    }
    // Remove and return the root element of the heap
    remove() {
      if (this.heap.length === 0) {
        return null;
      }
      const root = this.heap[0];
      const last = this.heap.pop();
      if (this.heap.length > 0) {
        this.heap[0] = last;
        this.heapifyDown(0);
      }
      return root;
    }
    // Maintain the max-heap property by bubbling up the newly inserted element
    heapifyUp(index) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (parentIndex >= 0 && this.heap[index] > this.heap[parentIndex]) {
        // Swap the element with its parent and repeat the process recursively
        [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
        this.heapifyUp(parentIndex);
      }
    }
    // Maintain the max-heap property by sinking down the element at the given index
    heapifyDown(index) {
      const LC = 2 * index + 1;
      const RC = 2 * index + 2;
      let Large = index;
      if (LC < this.heap.length && this.heap[LC] > this.heap[Large]) {
        Large = LC;
      }
      if (RC < this.heap.length && this.heap[RC] > this.heap[Large]) {
        Large = RC;
      }
      if (Large !== index) {
        // Swap the element with its largest child and repeat the process recursively
        [this.heap[index], this.heap[Large]] = [this.heap[Large], this.heap[index]];
        this.heapifyDown(Large);
      }
    }
  }
  
  // Example usage
  const heap = new MaxHeap();
  const arr = [9, 4, 7, 2, 3,8]
  heap.build(arr);
  console.log(heap.heap); // [9, 4, 7, 2, 3]
//   heap.insert(10);
//   console.log(heap.heap); // [10, 9, 7, 2, 3, 4]
//   heap.remove();
//   console.log(heap.heap); // [9, 4, 7, 2, 3]
  
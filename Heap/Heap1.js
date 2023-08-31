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
  
    // Inserts a value into the heap by adding it to the end of the heap and then heapifying up from the added element.
    insert(value) {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
    }
  
    // Removes the root element from the heap and returns it.
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
  
    // Heapifies up from the given index by swapping the element with its parent until the heap property is restored.
    heapifyUp(index) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (parentIndex >= 0 && this.heap[index] > this.heap[parentIndex]) {
        // If the current element is greater than its parent, swap them and continue heapifying up from the parent.
        const temp = this.heap[parentIndex];
        this.heap[parentIndex] = this.heap[index];
        this.heap[index] = temp;
        this.heapifyUp(parentIndex);
      }
    }
  
    // Heapifies down from the given index by swapping the element with its larger child until the heap property is restored.
    heapifyDown(index) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let largestIndex = index;
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largestIndex]) {
        // If the left child is larger than the current element, mark it as the largest index.
        largestIndex = leftChildIndex;
      }
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largestIndex]) {
        // If the right child is larger than the current element (or the left child), mark it as the largest index.
        largestIndex = rightChildIndex;
      }
      if (largestIndex !== index) {
        // If the current element is not the largest, swap it with the largest child and continue heapifying down from the child.
        const temp = this.heap[largestIndex];
        this.heap[largestIndex] = this.heap[index];
        this.heap[index] = temp;
        this.heapifyDown(largestIndex);
      }
    }
  }
  
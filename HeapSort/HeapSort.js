function heapSort(array) {
  // Build the heap
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
      heapify(array, array.length, i);
  }
  // Sort the array
  for (let i = array.length - 1; i > 0; i--) {
      // Move the current root to the end
      [array[0], array[i]] = [array[i], array[0]];

      // Call heapify on the reduced heap
      heapify(array, i, 0);
  }
  return array;
}
function heapify(array, n, i) {
  let largest = i; // Initialize largest as root
  let l = 2 * i + 1; // left = 2*i + 1
  let r = 2 * i + 2; // right = 2*i + 2
  // If the left child is larger than the root
  if (l < n && array[l] > array[largest]) {
    largest = l;
  }
  // If the right child is larger than the largest so far
  if (r < n && array[r] > array[largest]) {
    largest = r;
  }
  // If the largest is not the root
  if (largest !== i) {
    // Swap the root with the largest
    [array[i], array[largest]] = [array[largest], array[i]];
    // Recursively heapify the affected sub-tree
    heapify(array, n, largest);
  }
}

let array = [5, 2, 9, 1, 3, 7, 4, 8, 6];
let sortedArray = heapSort(array);
console.log(sortedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
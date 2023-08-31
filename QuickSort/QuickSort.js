function quicksort(array) {
    if (array.length <= 1) {
      return array;
    }
    const pivotIndex = Math.floor(array.length / 2);
    const pivot = array[pivotIndex];
    const left = [];
    const right = [];
    for (let i = 0; i < array.length; i++) {
      if (i === pivotIndex) {
        continue;
      }
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
    const sortedLeft = quicksort(left);
    const sortedRight = quicksort(right);
    
    return [...sortedLeft, pivot, ...sortedRight];
  }
const array = [5, 2, 8, 3, 1, 6, 9, 7, 4];
const sortedArray = quicksort(array);

console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
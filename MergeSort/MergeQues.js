function findKthLargest(arr, k) {
    // Implement the merge sort algorithm
    function mergeSort(arr) {
      if (arr.length <= 1) {
        return arr;
      }
      const middle = Math.floor(arr.length / 2);
      const left = arr.slice(0, middle);
      const right = arr.slice(middle);
      return merge(mergeSort(left), mergeSort(right));
    }
    // Merge two sorted arrays into one sorted array
    function merge(left, right) {
      const result = [];
      let i = 0;
      let j = 0;
      while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
          result.push(left[i++]);
        } else {
          result.push(right[j++]);
        }
      }
      return result.concat(left.slice(i)).concat(right.slice(j));
    }
  
    // Sort the array using merge sort and return the kth largest element
    const sortedArr = mergeSort(arr);
    return sortedArr[arr.length - k];
  }
  
  // Example usage
  const arr = [3, 5, 2, 8, 4, 7];
  const k = 3;
  console.log(findKthLargest(arr, k)); // 5
  
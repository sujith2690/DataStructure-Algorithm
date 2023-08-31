// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   console.log(arr)
//   const midIndex = Math.floor(arr.length / 2);
//   const leftArr = arr.slice(0, midIndex);
//   const rightArr = arr.slice(midIndex);
//   const sortedLeftArr = mergeSort(leftArr);
//   const sortedRightArr = mergeSort(rightArr);
//   return merge(sortedLeftArr, sortedRightArr);
// }
// function merge(leftArr, rightArr) {
//   let i = 0; // Index for leftArr
//   let j = 0; // Index for rightArr
//   const mergedArr = [];
//   while (i < leftArr.length && j < rightArr.length) {
//     if (leftArr[i] <= rightArr[j]) {
//       mergedArr.push(leftArr[i]);
//       i++;
//     } else {
//       mergedArr.push(rightArr[j]);
//       j++;
//     }
//   }
//   mergedArr.push(...leftArr.slice(i), ...rightArr.slice(j));
//   return mergedArr;
// }
// // Exam?ple usage:
// const arr = [38, 27, 43, 3, 9, 82, 10];
// console.log(mergeSort(arr)); // Output: [3, 9, 10, 27, 38, 43, 82]

// function MergeSort(arr){
//   if(arr.length <= 1) return arr
//   const midIndex  = Math.floor(arr.length / 2)
//   const leftArr = arr.slice(0,midIndex)
//   const rightArr = arr.slice(midIndex)
//   const sortedLeftArr = MergeSort(leftArr)
//   const sortedRightArr = MergeSort(rightArr)
//   return merge(sortedLeftArr,sortedRightArr)
// }
// function merge(leftArr,rightArr){
//   let i = 0;
//   let j = 0;
//   let mergedArr = []
//   while (i < leftArr.length && j < rightArr.length) {
//     if(leftArr[i]<=rightArr[j]){
//       mergedArr.push(leftArr[i])
//       i++
//     }else{
//       mergedArr.push(rightArr[j])
//       j++
//     }
//   }
//   mergedArr.push(...leftArr.slice(i),...rightArr.slice(j))
//   return mergedArr;
// }

// const arr = [10,5,4,9,12,77,8]
// console.log(MergeSort(arr),'---final output')

function MergeSort(arr) {
  if (arr.length <= 1) return arr;
  let midIndex = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, midIndex);
  let rightArr = arr.slice(midIndex);
  const sortedLeftArr = MergeSort(leftArr);
  const sortedRightArr = MergeSort(rightArr);
  return merge(sortedLeftArr,sortedRightArr)
}
function merge(leftArr,rightArr){
  let i = 0;
  let j=0;
  let mergedArr = []
  while( i<leftArr.length && j<rightArr.length){
    if(leftArr[i]<rightArr[j]){
      mergedArr.push(leftArr[i])
      i++
    }
    else{
      mergedArr.push(rightArr[j])
      j++
    }
  }
  mergedArr.push(...leftArr.slice(i),...rightArr.slice(j))
  return mergedArr
}

const arr = [10,5,445,8787,2,3,6]
console.log(MergeSort(arr),'----------')

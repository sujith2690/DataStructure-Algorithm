function SelectionSorting(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for(let j = i + 1; j< arr.length;j++)
    {
        if (arr[min] > arr[j]) {
          min = j;
    }
    let temp = arr[i] 
    arr[i]= arr[min]
    arr[min] = temp
      }
  }

}
const arr = [0,-4,5,8,-8]
SelectionSorting(arr)
console.log(arr)

// function SelectionSorting(arr){
//   for (let i= 0;i<arr.length-1;i++){
//     let min = i
//     for (let j=i+1;j<arr.length;j++){
//       if(arr[min]<arr[j]){
//         min = j
//       }
//       let temp = arr[i]
//       arr[i] = arr[min]
//       arr[min] = temp
//     }
//   }
// }
// const arr = [4,88,-8,-1,-7]
// SelectionSorting(arr)
// console.log(arr)


function bubbleSort(arr) {
  let swapped;
  do {
    swapped=false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped=true
      }
    }
  } while (swapped);
}

const arr = [8, 20, -2, 4, -6];
bubbleSort(arr);
console.log(arr);

// function bubbleSort(arr){
//   let swapped
//   do{
//     swapped = false
//     for (let i=0;i<arr.length;i++)
//     {
//       if (arr[i]<arr[i+1]){
//         let temp =  arr[i]
//         arr[i] = arr[i+1]
//         arr[i+1] = temp
//         swapped = true
//       }
//     }
//   }
//   while(swapped)
// }
// const arr = [4,1,0,-5,-8,-1,3,88]
// bubbleSort(arr)
// console.log(arr)




// function bubbleSort(arr) {
//   let swapped
//   do{
//     swapped = false
//     for(let i=0;i<arr.length;i++){
//       if(arr[i]>arr[i+1]){
//         let temp = arr[i]
//         arr[i] = arr[i+1]
//         arr[i+1] =temp
//         swapped = true
//       }
//     }
//   }
//   while(swapped)
// }
// const arr = [-1,5,-8,7,-2,0]
// bubbleSort(arr)
// console.log(arr)

// function insertionSorting(arr){
//   for(let i=1;i<arr.length;i++){
//     let insert =arr[i]
//     let j = i-1
//     while( j>=0 && arr[j]>insert)
//     {
//       arr[j+1] = arr[j]
//       j = j-1
//     }
//     arr[j+1] = insert
//   }
// }
// insertionSorting(arr)
// console.log(arr,'-------insert  ')

// function SelectionSorting(arr){
//   for(let i=0;i<arr.length-1;i++)
//   {
//     let min = i
//     for(let j=i+1;j<arr.length;j++){
//       if(arr[min]<arr[j]){
//         min = j
//       }

//         let temp = arr[j]
//         arr[j] =arr[min]
//         arr[min] = temp
      
//     }
//   }
// }
// SelectionSorting(arr)
// console.log(arr,'-------sele  ')



// function SelectionSorting(arr){
//   for(let i=0;i<arr.length-1;i++){
//     let min = i
//     for (let j=i+1;j<arr.length;j++){
//       if(arr[min]<arr[j]){
//         min = j
//       }
//       let temp = arr[min]
//       arr[min] = arr[j]
//       arr[j] = temp
//     }
//   }
// }
// const arr = [4,2,8,-7,44,-1,-5]
// SelectionSorting(arr)
// console.log(arr)
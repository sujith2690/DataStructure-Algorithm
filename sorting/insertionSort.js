

function insertionSorting(arr){
    for(let i = 1;i<arr.length;i++){
        let nti = arr[i]
        let j = i-1
        while( j>=0 && arr[j]>nti)
        {
            arr[j+1] = arr[j] 
            j = j-1
        }
        arr[j+1] = nti
    }
}
const arr = [-9,5,-2,4,0,-6,2]
insertionSorting(arr)
console.log(arr)
// function insertionSorting(arr){
//     for(let i=1;i<arr.length;i++){
//         let nti = arr[i]
//         j = i-1
//         while( j>=0 && arr[i]>nti){
//             arr[j+1]  = arr[j]
//             j=j-1
//         }
    
//     }
// }
// const arr = [-9,5,-2,4,0,-6,2]
// insertionSorting(arr)
// console.log(arr)
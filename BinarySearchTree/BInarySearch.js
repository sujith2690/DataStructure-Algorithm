
// Used to get a position of a value in a sorted array
function binarySearch (){
let start = 0
let end = arr.length -1

while (start <= end){
let mid = Math.floor((start+end)/2)
if (arr[mid] === x){
    return mid
}else if(arr[mid]<x){
    start = mid+1
}else {
    end = mid-1
}
}
return -1
}

const arr = [1,3,5,9,11]
let x= 11
console.log(binarySearch(arr,x))
function Mergesort(arr){
    
if(arr.length <=1 ) return arr
    let midleIndex= Math.floor(arr.length/2)
    let leftIndex = arr.slice(0,midleIndex)
    let rightIndex = arr.slice(midleIndex)

    let sortedLeftArr = Mergesort(leftIndex)
    let sortedRightArr = Mergesort(rightIndex)

    return merge(sortedLeftArr,sortedRightArr)
}
function merge(leftArr,rightArr){
    let i = 0
    let j= 0
  let  mergedArr = []
  while( i<=leftArr.length && j<= rightArr.length ){
    if(leftArr[i]<rightArr[j]){
        mergedArr.push(leftArr[i])
    }
    else{
        mergedArr.push(rightArr[i])
    }
  }
  mergedArr.push(...leftArr.slice(i),...rightArr.slice(j))
  return mergedArr
}

const arr = [10,5,4,8,9,3]
console.log(Mergesort(arr))
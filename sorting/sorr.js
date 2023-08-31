function selectionsort(arr){
    for (let i=0;i<arr.length-1;i++){
        let min =i;

        for(let j = i+1;j<arr.length;j++){
            if(arr[min]>arr[j]){
                min = j
            } 
        }
        let  temp = arr[i]
        arr[i] = arr[min]
        arr[min]= temp
    }
}
const arr = [0,2,-5,6,7,-7,-5,55,87,10,-10]
selectionsort(arr)
console.log(arr)


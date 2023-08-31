class MaxHeap{
    constructor(){
        this.heap = []
    }
    build(arr){
        this.heap = arr
        for(let i =Math.floor(this.heap.length/ 2);i>= 0;i--){
            this.heapfyDown(i)
        }
    }
    heapfyDown(i){
        let LC = 2*i +1
        let RC = 2*i +2
        let largest = i
        if(LC<this.heap.length && 
            this.heap[LC]>this.heap[largest]){
            largest = LC
        }
        if(RC<this.heap.length && 
            this.heap[RC]>this.heap[largest]){
            largest = RC
        }
        if(largest !== i){
            [this.heap[largest],this.heap[i]]=[
                this.heap[i],this.heap[largest]]
            this.heapfyDown(largest)
        }
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length -1 )
    }
    heapifyUp(i){
        let parentIndex = Math.floor((i-1) /2)
        while(i > 0 && this.heap[parentIndex] < this.heap[i] ){
            [this.heap[parentIndex],this.heap[i]]= 
            [this.heap[i],this.heap[parentIndex]]
            i = parentIndex
            parentIndex = Math.floor(i-1/2)
        }
    }
}

const maxHeap = new MaxHeap()
maxHeap.build([10,2,5,96,7,84])
console.log(maxHeap.heap)
maxHeap.insert(100)
console.log(maxHeap.heap,'---55')

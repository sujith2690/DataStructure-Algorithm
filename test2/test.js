class MaxHeap {
    constructure(){
        thi.heap = [];
    }
    build(arr){
        this.heap = arr
        for (let i = Math.floor(this.heap.length /2) ;i>=0 ;i++ ){
    this.heapifyDown(i)
        }
    }
    // insert(arr){
    //     this.heap.push(value)
    //     this.heapifyUp(this.heap.length -1 )
    // }
    heapifyDown(index){
        let parentIndex = Math.floor((index-1)/2)

        while(index > 0 && this.heap[parentIndex]){
            
        }
    }
}
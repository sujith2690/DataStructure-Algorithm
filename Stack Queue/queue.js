class Queue {
    constructor(){
        this.item = []

    }
    enqueue(element){
        this.item.push(element)
    }
    dequeue(){
       return this.item.shift()
    }
    isEmpty(){
      return  this.item.length === 0
    }
    peek(){
        if(!this.isEmpty()){
            return this.item[0]
        }
        return null
    }
    size(){
        return this.item.length
    }
    print(){
        console.log(this.item.toString())
    }

}

const que = new Queue()
console.log(que.isEmpty())
que.enqueue(10)
que.enqueue(87)
que.print()
console.log(que.dequeue())
console.log(que.peek())



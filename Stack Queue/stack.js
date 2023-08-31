class Stack {
    constructor(){
        this.item = []
    }
    push(element){
        this.item.push(element)
    }
    pop(){
     return   this.item.pop()
    }
    peek(){
        return this.item[this.item.length-1]
    }
    isEmpty(){
      return  this.item.length === 0
    }
    size(){
      return  this.item.length
    }
    print(){
        console.log(this.item.toString())
    }
}
const stack1 = new Stack()

stack1.push(10)
stack1.push(40)
stack1.push(45)
stack1.push(12)

console.log(stack1.isEmpty())

console.log(stack1.size())

stack1.print()
console.log(stack1.pop())
console.log(stack1.peek())

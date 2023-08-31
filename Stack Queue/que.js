class Queue {
    constructor(){
        this.item = []
    }
    equeue(element){
        this.item.push(element)
    }
    dequeue(){
      return  this.item.shift()
    }
    isEmpty(){
        return   this.item.length === 0
    }
    size(){
        return   this.item.length
    }
    print(){
        console.log(this.item.toString())
    }
}
const gh = new Queue()
gh.equeue(545)
gh.equeue(12)
gh.equeue(7)
gh.equeue(4646)
gh.print()
console.log(gh.size())
gh.dequeue()
gh.print()
console.log(gh.size())
class Stack {
  constructor() {
    this.item = [];
  }
  push(element) {
    this.item.push(element);
  }
  pop() {
    return this.item.pop();
  }
  print() {
    console.log(this.item.toString());
  }
  isEmpty() {
    return this.item.length === 0;
  }
  size() {
    return this.item.length;
  }
}

const stk = new Stack();
stk.push(15);
stk.push(10);
stk.push(62);
stk.push(55);
stk.print();
console.log(stk.size());
stk.pop();
console.log(stk.size());
stk.print();




class nStack {
  constructor() {
    this.item = [];
  }
  push(element) {
    this.item.push(element);
  }
  pop() {
    this.item.pop();
  }
  isEmpty() {
    this.item.length === 0;
  }
  print() {
    console.log(this.item.toString())
  }
}

const hh = new nStack()
hh.push(44)
hh.print()



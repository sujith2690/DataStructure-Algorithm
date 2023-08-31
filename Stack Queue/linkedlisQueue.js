const LinkedList = require("./linkedlist");

class LinkedListQueue {
	constructor() {
		this.list = new LinkedList();
	}

	enqueue(value) {
		this.list.append(value);
	}
	dequeue() {
		this.list.removeFromStart();
	}
	peek() {
		return this.list.head.value;
	}
	isEmpty() {
		return this.list.isEmpty();
	}
	print() {
		return this.list.print();
	}
	size() {
		return this.list.getSize();
	}
}

const queue = new LinkedListQueue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
console.log(queue.peek());
queue.print()
queue.dequeue()
queue.print()
class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}
	insert(value) {
		this.values.push(value);
		this.bubbleUp();
	}
	bubbleUp() {
		let index = this.values.length - 1;
		const element = this.values[index];
		while (index > 0) {
			let parentIndex = Math.floor((index - 1) / 2);
			let parent = this.values[parentIndex];
			if (element <= parent) {
				break;
			}
			this.values[parentIndex] = element;
			this.values[index] = parent;
			index = parentIndex;
		}
	}

	removeRoot() {
		const root = this.values[0];
		const lastElement = this.values.pop();
		this.values[0] = lastElement;
		this.sinkDown();
		return root;
	}

	sinkDown() {
		let index = 0;
		const length = this.values.length;
		const element = this.values[0];
		while (true) {
			let leftChildIndex = 2 * index + 1;
			let rightChildIndex = 2 * index + 2;
			let leftChildValue, rightChildValue;
			let swap = null;

			if (leftChildIndex < length) {
				leftChildValue = this.values[leftChildIndex];
				if (leftChildValue > element) {
					swap = leftChildIndex;
				}
			}

			if (rightChildIndex < length) {
				rightChildValue = this.values[rightChildIndex];
				if (
					(swap === null && rightChildValue > element) ||
					(swap !== null && rightChildValue > leftChildValue)
				) {
					swap = rightChildIndex;
				}
			}

			if (swap === null) break;
			this.values[index] = this.values[swap]
			this.values[swap] = element
			index = swap
		}
	}
}

const heap = new MaxBinaryHeap();
heap.insert(60);
heap.insert(50);
heap.insert(43);
heap.insert(55);
heap.insert(41);
heap.insert(30);
heap.insert(31);
heap.insert(58);
console.log(heap);
heap.removeRoot()
console.log(heap);
heap.removeRoot()
console.log(heap);
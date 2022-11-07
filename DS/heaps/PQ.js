class Node {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}

class PQ {
	constructor() {
		this.values = [];
	}
	// create new node and push it to the right place
	enqueue(val, priority) {
		let node = new Node(val, priority);
		this.values.push(node);
		this.bubbleUp();
		return this;
	}
	// take the last node and place it correctly
	bubbleUp() {
		let idx = this.values.length - 1;
		const childNode = this.values[idx];

		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			let parentNode = this.values[parentIdx];
			if (childNode.priority > parentNode.priority) break;
			this.values[parentIdx] = childNode;
			this.values[idx] = parentNode;
			idx = parentIdx;
		}
	}

	// remove the root and return it
	dequeue() {}
}

// let node1 = new Node("me", 0);

let pq = new PQ();
pq.enqueue("me", 0);
pq.enqueue("me1", 2);
pq.enqueue("me2", 1);
pq.enqueue("me3", 3);
pq.enqueue("me3", 7);
pq.enqueue("me3", 9);
pq.enqueue("me3", 1);

console.log(pq);

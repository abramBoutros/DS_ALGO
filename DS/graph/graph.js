class Graph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
		return this;
	}
	addEdge(v1, v2) {
		if (!this.adjacencyList[v1]) this.adjacencyList[v1] = [];
		if (!this.adjacencyList[v2]) this.adjacencyList[v2] = [];
		if (this.adjacencyList[v1].includes(v2)) return this;
		if (this.adjacencyList[v2].includes(v1)) return this;
		this.adjacencyList[v1].push(v2);
		this.adjacencyList[v2].push(v1);
	}
	removeEdge(v1, v2) {
		this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
		this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
	}
	removeVertex(v) {
		this.adjacencyList[v].forEach((el) => {
			this.removeEdge(v, el);
		});
		delete this.adjacencyList[v];
		return this;
	}

	DFS(vertex) {}
	BFS(start) {
		const queue = [start];
		const result = [];
		const visited = {};
		let currentVertex;
		visited[start] = true;

		while (queue.length) {
			currentVertex = queue.shift();
			result.push(currentVertex);

			this.adjacencyList[currentVertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					queue.push(neighbor);
				}
			});
		}
		return result;
	}
}

const g = new Graph();
g.addVertex("Tokyo").addVertex("Cairo");
g.addEdge("Tokyo", "LA");
g.addEdge("Tokyo", "LA");
// g.removeEdge("Tokyo", "LA");
g.removeVertex("LA");

console.log(g);

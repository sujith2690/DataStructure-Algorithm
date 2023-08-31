class Graph {
    constructor() {
      this.vertices = {};
    }
  
    addVertex(vertex) {
      if (!this.vertices[vertex]) {
        this.vertices[vertex] = [];
      }
    }
  
    addEdge(vertex1, vertex2) {
      this.addVertex(vertex1);
      this.addVertex(vertex2);
      this.vertices[vertex1].push(vertex2);
      this.vertices[vertex2].push(vertex1);
    }
  
    printGraph() {
      for (let vertex in this.vertices) {
        console.log(`${vertex} -> ${this.vertices[vertex].join(' ')}`);
      }
    }
  }
  
  // Example usage
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addEdge('A', 'B');
  graph.addEdge('B', 'C');
  graph.addEdge('C', 'A');
  graph.printGraph();
class Graph {
    constructor() {
      this.vertices = [];
      this.edges = {};
    }
  
    addVertex(vertex) {
      this.vertices.push(vertex);
      this.edges[vertex] = [];
    }
  
    addEdge(vertex1, vertex2) {
      this.edges[vertex1].push(vertex2);
      this.edges[vertex2].push(vertex1);
    }
  
    printGraph() {
      for (let vertex of this.vertices) {
        console.log(`${vertex} -> ${this.edges[vertex].join(' ')}`);
      }
    }
  }
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('5');
  graph.addEdge('A', 'B');
  graph.addEdge('B', 'C');
  graph.addEdge('C', 'A');
  graph.printGraph();
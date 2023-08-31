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
      let graphString = '';
      for (let i = 0; i < this.vertices.length; i++) {
        const vertex = this.vertices[i];
        graphString += vertex + ' -> ';
        const edges = this.edges[vertex];
        for (let j = 0; j < edges.length; j++) {
          const edge = edges[j];
          graphString += edge + ' ';
        }
        graphString += '\n';
      }
      console.log(graphString);
    }
  }
  
  // example usage
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('5');
  graph.addEdge('A', 'B');
  graph.addEdge('B', 'C');
  graph.addEdge('C', 'A');
  graph.printGraph();
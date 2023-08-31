// Define a Graph class
class Graph {
    // Constructor method initializes the vertices list and adjacency list
    constructor() {
      this.vertices = [];
      this.adjList = new Map();
    }
  
    // Add a vertex to the graph
    addVertex(vertex) {
      // Add vertex to the vertices list
      this.vertices.push(vertex);
      // Initialize its adjacency list to an empty array
      this.adjList.set(vertex, []);
    }
  
    // Add an edge between two vertices in the graph
    addEdge(vertex1, vertex2) {
      // Add vertex2 to the adjacency list of vertex1
      this.adjList.get(vertex1).push(vertex2);
      // Add vertex1 to the adjacency list of vertex2
      this.adjList.get(vertex2).push(vertex1);
    }
  
    // Get the list of vertices in the graph
    getVertices() {
      return this.vertices;
    }
  
    // Get the adjacency list of the graph
    getAdjList() {
      return this.adjList;
    }
  }
  
  // Create a new graph
  const graph = new Graph();
  
  // Add vertices to the graph
  graph.addVertex(1);
  graph.addVertex(2);
  graph.addVertex(3);
  graph.addVertex(4);
  
  // Add edges between vertices
  graph.addEdge(1, 2);
  graph.addEdge(2, 3);
  graph.addEdge(3, 4);
  graph.addEdge(4, 1);
  
  // Get the list of vertices and adjacency list
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  
  // Print the vertices and their neighbors
  for (const vertex of vertices) {
    console.log(`${vertex} -> ${adjList.get(vertex).join(", ")}`);
  }
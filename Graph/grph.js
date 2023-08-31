class Graph {
  constructor() {
    this.vertices = [];
    this.edges = {};
  }
  addVertex(vertex) {
    this.vertices.push(vertex);
    this.edges[vertex]=[]
  }
  addEdges(vertex1,vertex2){
    this.edges[vertex1].push(vertex2)
    this.edges[vertex2].push(vertex1)
  }
  printGraph(){
    for(let vertex of this.vertices){
        console.log(`${vertex}-> ${this.edges[vertex].join(' ')}`)
    }
  }
}
const graph  = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdges('B','C')
graph.addEdges('A','C')
graph.addEdges('C')
graph.printGraph()
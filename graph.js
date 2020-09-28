class Graph {
  constructor() {
    this.list = {};
  }

  addVertex(value) {
    this.list[value] = this.list[value] || [];
  }

  addEdge(vertex1, vertex2) {
    if (this.list[vertex1] && this.list[vertex1]) {
      this.list[vertex1].push(vertex2);
      this.list[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    if (this.list[vertex1] && this.list[vertex2]) {
      this.list[vertex1] = this.list[vertex1].filter(
        (item) => item !== vertex2
      );
      this.list[vertex2] = this.list[vertex2].filter(
        (item) => item !== vertex1
      );
    }
  }

  removeVertex(vertex) {
    if (this.list[vertex]) {
      this.list[vertex].forEach((edge) => {
        this.list[edge] = this.list[edge].filter((item) => item !== vertex);
      });
      delete this.list[vertex];
    }
  }
}

const g = new Graph();
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4);
g.addVertex(5);
g.addVertex(6);
g.addVertex(7);
g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(1, 4);
g.addEdge(2, 7);

console.log(g);
g.removeVertex(2);
console.log(g);

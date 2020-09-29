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

  depthFirstRecursive(start) {
    const list = [];
    const visited = new Set();

    const helper = (vertex) => {
      visited.add(vertex);
      list.push(vertex);
      if (this.list[vertex].length === 0) {
        return;
      } else {
        this.list[vertex].forEach((edge) => {
          if (!visited.has(edge)) {
            helper(edge);
          }
        });
      }
    };

    helper(start);
    return list;
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
g.addEdge(3, 5);
g.addEdge(5, 6);

console.log(g);
console.log(g.depthFirstRecursive(1));

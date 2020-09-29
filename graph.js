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
    const vertices = [];
    const visited = new Set();

    const helper = (vertex) => {
      visited.add(vertex);
      vertices.push(vertex);
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
    return vertices;
  }

  depthFirstIterative(start) {
    const vertices = [];
    const visited = new Set();
    const stack = [start];
    let current;
    while (stack.length > 0) {
      current = stack.pop();
      if (!visited.has(current)) {
        visited.add(current);
        vertices.push(current);
        this.list[current].forEach((edge) => stack.push(edge));
      }
    }
    return vertices;
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

const raph = new Graph();
raph.addVertex('A');
raph.addVertex('B');
raph.addVertex('C');
raph.addVertex('D');
raph.addVertex('E');
raph.addVertex('F');
raph.addEdge('A', 'B');
raph.addEdge('A', 'C');
raph.addEdge('B', 'D');
raph.addEdge('C', 'E');
raph.addEdge('D', 'E');
raph.addEdge('D', 'F');
raph.addEdge('E', 'F');

console.log(raph.depthFirstRecursive('A'));
console.log(raph.depthFirstIterative('A'));

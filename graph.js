class Graph {
  constructor() {
    this.list = {};
  }

  addVertex(value) {
    this.list[value] = this.list[value] || [];
  }

  addEdge() {}
}

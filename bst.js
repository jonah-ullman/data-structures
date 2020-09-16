class BST {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
  insert(value) {
    if (value <= this.value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new BST(value);
      }
    } else {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new BST(value);
      }
    }
  }
  find(value) {
    if (this.value === value) {
      return this;
    } else if (value < this.value) {
      return this.left ? this.left.find(value) : null;
    } else {
      return this.right ? this.right.find(value) : null;
    }
  }
  traverseBreadthFirst(callback = console.log) {
    const queue = [this];
    while (queue.length) {
      const current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      callback(current.value);
    }
  }
  traverseDepthFirst(callback = console.log) {}
}

const tree1 = new BST(57);
tree1.insert(33);
tree1.insert(25);
tree1.insert(44);
tree1.insert(72);
tree1.insert(95);
tree1.insert(66);

console.log(tree1);
console.log(tree1.find(55));
console.log(tree1.find(33));

tree1.traverseBreadthFirst();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.length) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) {
      return undefined;
    } else if (this.length === 1) {
      const popped = this.tail;
      this.head = null;
      this.tail = null;
      this.length--;
      return popped;
    } else {
      const popped = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length--;
      return popped;
    }
  }
  shift() {
    if (this.length === 0) {
      return undefined;
    } else if (this.length === 1) {
      const shifted = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return shifted;
    } else {
      const shifted = this.head;
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return shifted;
    }
  }
  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    } else if (index < this.length / 2) {
      let current = this.head;
      let currentIdx = 0;
      while (currentIdx < index) {
        current = current.next;
        currentIdx++;
      }
      return current;
    } else {
      let current = this.tail;
      let currentIdx = this.length - 1;
      while (currentIdx > index) {
        current = current.prev;
        currentIdx--;
      }
      return current;
    }
  }
  set(index, value) {
    let node = this.get(index);
    if (!node) return false;
    node.value = value;
    return true;
  }
  insert(index, value) {
    if (index < 0 || index >= this.length) return false;
    let newNode = new Node(value);
    if (index === 0) {
      this.unshift(newNode);
      return true;
    } else if (index === this.length - 1) {
      this.push(newNode);
      return true;
    } else {
      let prev = this.get(index - 1);
      let next = prev.next;
      prev.next = newNode;
      newNode.prev = prev;
      next.prev = newNode;
      newNode.next = next;
      this.length++;
      return true;
    }
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      return false;
    } else if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      const removed = this.get(index);
      const { prev, next } = removed;
      prev.next = next;
      next.prev = prev;
      this.length--;
      return removed;
    }
  }
  reverse() {
    if (this.length <= 1) return this;
    let current = this.head;
    let next = current.next;
    this.head = this.tail;
    this.tail = current;
    let temp;
    while (next) {
      temp = next.next;
      next.next = current;
      current.prev = next;
      current = next;
      next = temp;
    }
    return this;
  }
}

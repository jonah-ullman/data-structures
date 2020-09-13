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
  insert() {}
  remove() {}
  reverse() {}
}

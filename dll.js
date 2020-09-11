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
  unshift() {}
  get() {}
  set() {}
  insert() {}
  remove() {}
  reverse() {}
}

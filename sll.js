class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.length) {
      this.tail.next = newNode;
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
      let newTail = this.head;
      while (newTail.next !== this.tail) {
        newTail = newTail.next;
      }
      const popped = newTail.next;
      newTail.next = null;
      this.tail = newTail;
      this.length--;
      return popped;
    }
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    } else {
      const temp = this.head;
      this.head = this.head.next;
      if (this.length === 1) {
        this.tail = null;
      }
      this.length--;
      return temp;
    }
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}

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

  get(index) {
    if (index >= this.length) return null;
    let currentIdx = 0;
    let currentNode = this.head;
    while (currentIdx < index) {
      currentNode = currentNode.next;
      currentIdx++;
    }
    return currentNode;
  }

  set(val, index) {
    const node = this.get(index);
    if (!node) return false;
    node.value = val;
    return true;
  }

  insert(val, index) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === 0) {
      this.unshift(val);
      return true;
    } else if (index === this.length) {
      this.push(val);
      return true;
    } else {
      const newNode = new Node(val);
      const prev = this.get(index - 1);
      newNode.next = prev.next;
      prev.next = newNode;
      this.length++;
      return true;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    } else if (index === 0) {
      this.length--;
      return this.shift();
    } else if (index === this.length - 1) {
      this.length--;
      return this.pop();
    } else {
      const prev = this.get(index - 1);
      const removed = prev.next;
      prev.next = removed.next;
      this.length--;
      return removed;
    }
  }

  reverse() {
    if (this.length <= 1) return this;
    let current = this.head;
    let next = this.head.next;
    this.head = this.tail;
    this.tail = current;
    current.next = null;
    let temp;
    while (next) {
      temp = next.next;
      next.next = current;
      current = next;
      next = temp;
    }
    return this;
  }
}

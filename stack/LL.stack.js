class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.head = null;
    }
  
    isEmpty() {
      return this.head === null;
    }
  
    push(value) {
      let node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
    }
  
    pop() {
      let deleteNode = this.head;
      this.head = deleteNode.next;
      return deleteNode;
    }
  
    display() {
      let curr = this.head;
      while (curr) {
        console.log(curr.value);
        curr = curr.next;
      }
    }
  
    peek() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
      } else {
        return this.head.value;
      }
    }
  }
  
  let stack = new Stack();
  
  stack.push(10);
  stack.push(20);
  stack.push(30);
  stack.push(40);
  stack.push(50);
  
  stack.pop();
  
  stack.display();
  
  console.log("Top element is: " + stack.peek());
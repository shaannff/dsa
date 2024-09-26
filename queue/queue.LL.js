// class Node {
//     constructor(value) {
//       this.value = value;
//       this.next = null;
//     }
//   }
  
//   class Queue {
//     constructor() {
//       this.head = null;
//     }
  
//     isEmpty() {
//       return this.head === null;
//     }
  
//     enqueue(value) {
//       let node = new Node(value);
//       if (this.isEmpty()) {
//         this.head = node;
//       } else {
//         let curr = this.head;
//         while (curr.next) {
//           curr = curr.next;
//         }
//         curr.next = node;
//       }
//     }
  
//     dequeue() {
//       let deleteNode = this.head;
//       this.head = deleteNode.next;
//       return deleteNode;
//     }
  
//     print() {
//       let curr = this.head;
//       while (curr) {
//         console.log(curr.value);
//         curr = curr.next;
//       }
//     }
//   }
  
//   let que = new Queue();
//   que.enqueue(10);
//   que.enqueue(20);
//   que.enqueue(30);
//   que.enqueue(40);
//   que.enqueue(50);
  
//   que.dequeue();
//   que.print();



  class Queue{
    constructor(){
        this.front = null
        this.rear = null
        this.size =0
    }
    enqueue(val){
        const node = new Node(val)
        if(this.rear){
            this.rear.next = node
        }
        this.rear = node
        if(!this.front){
            this.front = node
        }
        this.size++
    }
    deque(){
        this.front = this.front.next
        if(!this.front) this.rear = null
        this.size--
    }
    display(){
        let cur  = this.front 
        let elem =[]
        while (cur) {
            elem.push(cur.value)
            cur = cur.next
        }
        console.log(elem);
    }
}
class Node{
    constructor(val){
        this.value = val
        this.next = null
    }
}
const q=new Queue()
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.display()
q.deque()
q.display()
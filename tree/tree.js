

// // class Tree{
// //     constructor(value){
// //         this.value=value
// //         this.childern=[]
// //     }
// //     childNode(node){
// //         this.childern.push(node)
// //     }
// //     display(){
// //         console.log(this.value)
// //         for(let child of this.childern){
// //             child.display()
// //         }
// //     }
// // }
// // const node = new Tree(10)
// // const node2 = new Tree(30)
// // const node1 = new Tree(20)
// // const node3 = new Tree(40)
// // const node4 = new Tree(50)


// // node.childNode(node1)
// // node.childNode(node2)
// // node1.childNode(node3)
// // node1.childNode(node4)
// // node.display()


// class tree{
//     constructor(val){
//         this.value = val 
//         this.child = null 
//         this.next = null 

//     }
// }

// const root = new tree(55)
// const parant = new tree(23)
// const parant1 = new tree(33)
// const child1 = new tree(44)
// const child2 = new tree(50)

// root.child = parant
// parant.next = parant1;
// parant.child = child1
// parant1.child=child2

// // // Set up the tree relationships
// // root.child = parent1;
// // parent1.next = parent2; // Use 'next' to link sibling nodes
// // parent1.child = child1;
// // parent2.child = child2;


// function traverse(node) {
//     let curr = node;
//     while (curr !== null) {
//       console.log(curr.value);
//       if (curr.child !== null) {
//         traverse(curr.child);
//       }
//       curr = curr.next;
//     }
//   }

  
//   traverse(root);
// class MaxHeap {
//     constructor() {
//         this.heap = [];
//     }

//     getParentIndex(index) {
//         return Math.floor((index - 1) / 2);
//     }

//     getLeftChildIndex(index) {
//         return 2 * index + 1;
//     }

//     getRightChildIndex(index) {
//         return 2 * index + 2;
//     }

//     swap(index1, index2) {
//         [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
//     }

//     insert(value) {
//         this.heap.push(value);
//         this.heapifyUp(this.heap.length - 1);
//     }

//     heapifyUp(index) {
//         let currentIndex = index;

//         while (currentIndex > 0) {
//             let parentIndex = this.getParentIndex(currentIndex);

//             if (this.heap[parentIndex] >= this.heap[currentIndex]) break;
//             this.swap(currentIndex, parentIndex);
//             currentIndex = parentIndex;
//         }
//     }

//     extractMax() {
//         if (this.heap.length === 0) return null;
//         if (this.heap.length === 1) return this.heap.pop();

//         const max = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.heapifyDown(0);

//         return max;
//     }

//     heapifyDown(index) {
//         let currentIndex = index;
//         const length = this.heap.length;

//         while (true) {
//             let leftChildIndex = this.getLeftChildIndex(currentIndex);
//             let rightChildIndex = this.getRightChildIndex(currentIndex);
//             let largestIndex = currentIndex;

//             if (leftChildIndex < length && this.heap[leftChildIndex] > this.heap[largestIndex]) {
//                 largestIndex = leftChildIndex;
//             }

//             if (rightChildIndex < length && this.heap[rightChildIndex] > this.heap[largestIndex]) {
//                 largestIndex = rightChildIndex;
//             }

//             if (largestIndex === currentIndex) break;

//             this.swap(currentIndex, largestIndex);
//             currentIndex = largestIndex;
//         }
//     }

//     peek() {
//         return this.heap.length > 0 ? this.heap[0] : null;
//     }

//     size() {
//         return this.heap.length;
//     }
// }

// // Example usage:
// const maxHeap = new MaxHeap();
// maxHeap.insert(4);
// maxHeap.insert(2);
// maxHeap.insert(8);
// maxHeap.insert(1);
// maxHeap.insert(5);

// console.log(maxHeap.extractMax()); // 8
// console.log(maxHeap.peek()); // 5
// console.log(maxHeap.size()); // 4

class Heap{
    constructor(){
        this.heap = []
    }

    getParant(index){
        return Math.floor((index-1)/2)
    }
    getleft(index){
        return 2 * index +1
    }
    getRight(index){
        return 2 * index +2
    }
    swap(index1,index2){
        [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]]
    }

    insert(value){
        this.heap.push(value)
        this.heapfy(this.heap.length-1)
    }

    heapfy(index){
        let curr = index
        let part = this.getParant(curr)

        while(curr>0 && this.heap[part] < this.heap[curr] ){
            this.swap(curr,part)
            curr = part
            part = this.getParant(curr)
        }
    }

    removeMax(){
        if(this.heap.length == 0)return null 
        if(this.heap.length == 1) return this.heap[0]

        let max=this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapyDown(0)
        
        return max
    }

    heapyDown(index){
        let curr= index
        let left = this.getleft(curr)
        let right = this.getRight(curr)
        let size = this.heap.length

        if(curr< size && this.heap[curr]<this.heap[left]){
            curr = left
        }

        if(curr < size && this.heap[curr]<this.heap[right]){
            curr = right 
        }

        if(curr !== index){
            this.swap(index,curr)
            this.heapyDown(curr)
        }

    }

    peek(){
        return this.heap.length > 0 ? this.heap[0] : null
    }
    size(){
        return this.heap.length
    }

}

const heap = new Heap()

heap.insert(10)
heap.insert(15)
heap.insert(7)
heap.insert(8)
heap.insert(5)
heap.insert(9)
console.log('............... peek...........')
console.log(heap.peek())
console.log('................ remove max ..........')
console.log(heap.removeMax())
console.log('........... size ........')
console.log(heap.size())
// console.log('hello world')

class Heap{
    constructor(){
        this.heap = []
    }
    getParntIndex(index){
        return Math.floor((index-1)/2)
    }
    getChildleft(index){
        return index * 2 + 1
    }
    getChildRight(index){
        return index * 2 +2
    }

    swap(index1,index2){
        let temp = this.heap[index2]
        this.heap[index2] = this.heap[index1]
        this.heap[index1] = temp
    }
    
    inset(value){
        this.heap.push(value)
        this.heapUp(this.heap.length-1)
    }
    heapUp(index){
        let curr = index
        let parnt = this.getParntIndex(index)

        while(curr > 0 && this.heap[curr]< this.heap[parnt]){
            this.swap(curr,parnt)
            curr = parnt 
            parnt = this.getParntIndex(curr)

        }

    }
    removeMin(){

        if( this.heap.length === 0 ) return null
        if( this.heap.length ===1 ) return this.heap.pop()

        let min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapfyDown(0)

        return min
    }

    heapfyDown( index ){

        let curr = index
        let left = this.getChildleft(curr)
        let right = this.getChildRight(curr)
        let size = this.heap.length 

        if( curr < size && this.heap[left] < this.heap[curr]){
            curr = left
        }

        if( curr < size && this.heap[right] < this.heap[curr]){
            curr = right
        }

        if(curr !== index){
            this.swap(index,curr)
            this.heapfyDown(curr)
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

heap.inset(10)
heap.inset(19)
heap.inset(15)
heap.inset(18)
heap.inset(22)
heap.inset(5)
heap.inset(12)
console.log(heap.size())
console.log(heap.peek())
heap.removeMin()
console.log(heap.peek())
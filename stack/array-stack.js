class Stack{
    constructor(){
        this.item = []
    }
    push(val){
        this.item.push(val)
    }
    pop(){
        this.item.pop()
    }
    peek(){
        return this.item[this.item.length-1]
    }
    size(){
        console.log(this.item.length)
    }
    display(){
        if(!this.item){
            console.log('nothg here ')
        }else{
            console.log( this.item.toString())
        }
    }
    removemid() {
        const tempStack = [];
        const mid = Math.floor(this.item.length / 2);

        for (let i = 0; i < mid; i++) {
            tempStack.push(this.item.pop());
        }

        this.item.pop();

        while (tempStack.length > 0) {
            this.item.push(tempStack.pop());
        }

        return this.item;
    }

    stringReverece(str,n){
        n--
        if(n<0)return ''
        return `${str[n]}`+ this.stringReverece(str,n)

    }
}
const stack = new Stack()

stack.push(7)
stack.push(9)
stack.push(3)
stack.push(5)
stack.push(8)
stack.push(11)
let str='happpy'
stack.display()
stack.size()
stack.pop()
console.log(stack.peek())
stack.display()
console.log(stack.removemid())


console.log(stack.stringReverece(str,str.length))




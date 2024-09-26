class Node {
    constructor(value){
        this.value = value 
        this.next = null 
    }
}
class linkedList {
    constructor(){
        this.head = null 
        this.tail = null
        this.size = 0

    }


    append(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node 
            this.tail = node  

        }else{
                this.tail.next = node 
                this.tail = node 
        }
        this.size++
    }

    addhead(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node 
            this.tail = node 
        }else{
            node.next = this.head 
            this.head = node
        }
        this.size++
    }


    display(){
        if(!this.head){
            console.log('nothg the list ')
        }else{
            let curr = this.head 
            while(curr){
                console.log(curr.value)
                curr = curr.next
            }
        }
    }

    getSize(){
        console.log(this.size)
        
    }

    count (){
        let count = 0
        let curr = this.head
        
        while(curr){
            count++
            curr = curr.next 
        }

        console.log('total count the list is  ',count)
    }

    delete(value){

        if(!this.head){

            console.log('nothg the list srry')
            return 

        }


        if(this.head.value == value ){

            this.head = this.head.next

            if(!this.head){
                this.tail = null 
            }

            this.size--
            return


        }
        if(this.tail.value == value){

            let curr = this.head 

            while (curr.next !== this.tail) {
                  curr = curr.next;
                }

            curr.next = null 
            this.tail = curr

            this.size--
            return

        } 
        
            let curr = this.head 

            while(curr.next && curr.next.value !== value){
                curr = curr.next
            }

            if(curr.next){

                let removedOne = curr.next 
                curr.next = removedOne.next 

                if(curr.next == null){
                    this.tail = curr
                }

            }

            this.size--
            return
        
    }

    reverce () {
        if(!this.head){
            console.log('nthg the list srry ')
            return
        }
        let curr = this.head 
        let temp = null 
         while(curr){
            let store = curr.next 
            curr.next = temp 
            temp = curr 
            curr = store 
         }
         this.tail = this.head 
         this.head = temp 
    }

    deleteDuplicate(){
    if(!this.head){

        console.log('nothg the list')
    return
    }else{

        let curr = this.head 
        while(curr){
           while(curr.next && curr.value == curr.next.value){
            curr.next = curr.next.next
           } 
           curr = curr.next
        }
      }
    

    }

    findEven(){
        if(!this.head){

            console.log('notg the list ')
            return 

        }else{

            let str=''
            let curr = this.head 

            while(curr){

                if(curr.value % 2 == 0 ){

                    str += ` ${curr.value}`
                }

                curr = curr.next 
            }
            if(str.length>0){

                console.log('the even numbers', str)
            }else{
                console.log('no even numbers the list ')
            }
        }
    }

    search(val){
        let count = 0
        if(!this.head){
            console.log(-1)
            return
        }else{
            let curr = this.head 
            while(curr){
                if(curr.value === val){
                    console.log(count,'index the searching value')
                    return
                }
                count++
                curr = curr.next
            }
            console.log(-1)
            return
        }
    }
    

}
const link = new linkedList()




link.append(1)
link.append(2)
link.append(5)

link.append(3)
link.append(6)
link.append(4)

// link.display()
link.reverce()
link.display()
console.log('hai')
link.findEven()
link.display()
link.search(5)
link.search(11)


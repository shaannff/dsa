class hashtable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let tot=0
        for(let i=0;i<key.length;i++){
            tot += key.charCodeAt(i)
        }
        return tot%this.size
    }

    set(key,val){
        const ind = this.hash(key)
        this.table[ind] = val
    }
    get(key){
        const ind = this.hash(key)
        return this.table[ind]
    }

    remove(key){
        const ind = this.hash(key)
        this.table[ind] = undefined
    }
    display(){
        for(let i=0 ;i<this.table.length ;i++){
            if(this.table[i]){
                console.log(i,  this.table[i])
            }
        }
    }
}


const tab= new hashtable(45)
tab.set('name','bilaldotin')
tab.set('age',22)
tab.set('city','pune')

tab.display()
console.log(tab.get('age'))
console.log(tab.get('name'))

class hashtable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hasksey(key){
     let total = 0
     for(let i=0;i<key.length;i++){
         total += key.charCodeAt(i)
     }
     return total % this.size
    }
    
    set(key,value){
        let index = this.hasksey(key)
        let bucket = this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
            
        }else{
            let exist = bucket.find(e=>e[0]===key)
            if(exist){
                exist[1]=value
            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        let index = this.hasksey(key)
        let bucket = this.table[index]
        if(bucket){
            let exist = bucket.find(e=>e[0]===key)
            if(exist)return console.log(exist[1])
        }
        return 'not found'
    }
    remove(key){
        let index = this.hasksey(key)
        let bucket = this.table[index]
        if(bucket){
            let exist = bucket.find(e=>e[0]==key)
            if(exist){
                bucket.splice(bucket.indexOf(exist),1)
            }
        }
        
        
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(this.table[i])
            }
        }
    }
    
}
const n = new hashtable(10)
n.set('name','rahul')
n.set('nanme','shan')
n.display()
n.remove('name')
n.display()
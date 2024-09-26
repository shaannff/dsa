class trienode{
    constructor(){
        this.child={}
        this.wordend=false
    }

}
class trie{
    constructor(){
        this.root=new trienode()
    }
    insert(word){
        let currentnode=this.root
        for(let char of word ){
            if(!currentnode.child[char]){
                currentnode.child[char]=new trienode()
            }
            currentnode=currentnode.child[char]
        }
        currentnode.wordend=true;
        
    }
    search(word){
        let currentnode=this.root
        for(let char of word){
            if(!currentnode.child[char]){
                return false
            }
            currentnode=currentnode.child[char]
        }
        return currentnode.wordend
    }
    prefix(word){
        let str=''
        let currentnode=this.root
        for(let char of word){
            if(!currentnode.child[char]){
                return false
            }
            str += char
            currentnode=currentnode.child[char]
        }
        console.log(str)
        return true
        
    }
    remove(word){
        let stack=[];
        let currentnode=this.root
        for(let char of word){
            if(!currentnode.child[char]){
                return false
            }
            stack.push([currentnode,char])
            currentnode=currentnode.child[char]
        }
        currentnode.wordend=false

        while(stack.length ){
            let [node,char]= stack.pop()

            if(Object.keys(currentnode.child).length===0 &&!currentnode.wordend){
                delete node.child[char]
            }

            currentnode=node
        }
    }
    startsWith(prefix) {
        let currentnode = this.root
        for (let char of prefix) {
            if (!currentnode.child[char]) {
                return null
            }
            currentnode = currentnode.child[char]
        }
        return this._getAllWords(currentnode, prefix)
    }
    _getAllWords(currentnode, prefix) {
        let words = []
        if (currentnode.wordend) {
            words.push(prefix)
        }
        for (let char in currentnode.child) {
            words = words.concat(this._getAllWords(currentnode.child[char], prefix+char))
        }
        return words
    }
    
}

const tr= new trie()
tr.insert('apple')
tr.insert('appollo')
// tr.insert('app')
// console.log(tr.search('apple'));
// console.log(tr.prefix('appe'));
// tr.remove('apple')
// console.log(tr.search('appollo'));
console.log(tr.startsWith('app'));
// tr.remove('app')
// console.log(tr.prefix('apple'));
// console.log(tr.search('app'));
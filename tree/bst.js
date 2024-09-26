class node {
                 // creating nodes ..........


    constructor(val){
        this.value = val 
        this.left = null
        this.right = null
    }
    
}

class tree{
    constructor(){
        this.root = null 
    }

        // insert 

    insert(value){
        const new_node = new node(value)
        if(!this.root){
            this.root = new_node
        }else{
            this.insert_child(this.root,new_node)
            
        }
    }

    //  inserting child 

    insert_child(root,node){

        if(node.value<root.value){
            if(!root.left){
                root.left = node
            }else{
                this.insert_child(root.left,node)
            }
        }else{
            if(!root.right){
                root.right = node 
            }else{
                this.insert_child(root.right,node)
            }
        }


    }

    //  search ...
    search(value){
        return this.search_node(this.root,value)
    }

    // searching method
    search_node(root,value){

        if(!root) return false 

        if(value < root.value){
            this.search_node(root.left,value)
        }else if(value > root.value){
            this.search_node(root.right,value)
        }else{
            return true
        }
        return false
    }

    // inorder 
    in_order(node = this.root){
        if(node){
        this.in_order(node.left)
        console.log(node.value)
        this.in_order(node.right)
        }
    }

    // pre order 

    pre_order(node = this.root){
        if(node){
            console.log(node.value)
            this.pre_order(node.left)
            this.pre_order(node.right)
        }
    }

    // post order 

    post_order(node = this.root){
        if(node){
            this.post_order(node.right)
            this.post_order(node.left)
            console.log(node.value)
        }
    }

    // breadth search method 
    bfs(){
         if(!this.root){
            console.log('nthg here')
            return 
         }

         const queue = [this.root]
         while(queue.length>0){
            let node = queue.shift()
            console.log(node.value)
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
         }
    }

    // min 

    min (root = this.root){
        if(!root.left){
            return root.left
        }else{
            this.min(root.left)

        }
    }
    max(root =this.root){
        if(!root.right){
            return root.right
        }else{
            this.max(root.right)
        }
    }
    
    // delete

    delete(value){
        this.root = this.delete_node(this.root,value)
    }

    delete_node(root,value){
        if(!root)return root


        if(value<root.value){
           root.left = this.delete_node(root.left,value)
        }else if (value > root.value){
           root.right = this.delete_node(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }
            if(!root.right){
                return root.left
            }

            root.value = this.min(root.right)
            root.right = this.delete_node(root.right , root.value)


        }
        return root

    }


        no_nodes(root = this,root){
            if(!root)return 0
            return 1+this.no_nodes(root.left)+this.no_nodes(root.right)
        }

        
      validbst(){
        return this.cheakbst(this.root,null,null)
      }
      cheakbst(root,min,max){
        if(root==null)true 

        if(min !== null && root.value<= min || max !== null && root.value>=max){
            return false
        }

       return this.cheakbst(root.left,null,root.value)&&this.cheakbst(root.right,root.value,null)
      }

      hight(root=this.root){
        if(!root)return -1
        let left = this.hight(root.left)
        let right = this.hight(root.right)
        return Math.max(left,right)+1
      }

      findclose(tar,root=this.root,clos=this.root.value){
        if(!root)return clos 
        if(Math.abs(tar-clos)>Math.abs(tar-root.value)) {
          clos = root.value
        }  
        if(tar<root.value){
          return this.findclose(tar,root.left,clos)
        } else if(tar>root.value){
          return this.findclose(tar,root.right,clos)
        } else{
          return clos
        }
        }

        
          depth(node,root=this.root,dep=0){
            if(root.value==node){
              return dep
            }else if(node<root.value){
              return this.depth(node,root.left,dep+1)
            }else{
              return this.depth(node,root.right,dep+1)
            }
            return null
          }

}

const Tree = new tree()

Tree.insert(100)
Tree.insert(50)
Tree.insert(75)
Tree.insert(25)
Tree.insert(30)
Tree.insert(150)
Tree.insert(120)
Tree.insert(170)
Tree.in_order()
console.log('..........................')
Tree.pre_order()
console.log('..........................')
Tree.post_order()
console.log('..........................')
Tree.bfs()




// insert 
// insert child 
// search
// searching method
// inorder 
// preOrder
// postorder 
// bfs
// min 
// max
// delete 
// nonode


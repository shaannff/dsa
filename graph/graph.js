class Graph{
    constructor(){
        this.list={}
    }
    addVertex(vertex){
        if(!this.list[vertex]){
            this.list[vertex]= new Set()
        } 
    }

    
    addEdges(vert1,vert2){
        if(!this.list[vert1]){
            this.addVertex(vert1)
        }
        if(!this.list[vert2]){
            this.addVertex(vert2)
        }

            this.list[vert1].add(vert2)
            this.list[vert2].add(vert1)
    }

    hasEdges(vert1,vert2){
        return(this.list[vert1].has(vert2)&&this.list[vert2].has(vert1))
    }
    removeEdges(vert1,vert2){
        this.list[vert1].delete(vert2)
        this.list[vert2].delete(vert1)
    }

    removeVertex(vertex){
        if(!this.list[vertex])return

        for(let vert of this.list[vertex]){
            this.removeEdges(vert,vertex)
        }
        delete this.list[vertex]
    }

    dispaly(){
        for(let vert in this.list){
            console.log(vert + ' -> ' + [...this.list[vert]])
        }
    }
    bfs(start){
        if(!this.list[start])return false

        let visted = new Set()
        let queue = []

        queue.push(start)
        visted.add(start)

        while(queue.length>0){
            let node = queue.shift()
            console.log(node)

            for(let connect of this.list[node]){
                if(!visted.has(connect)){
                    queue.push(connect)
                    visted.add(connect)
                }
            }
        }


    }

    dfs(start){
        const visted=new Set()

       const dfsRecrtion=(list)=>{

        if(visted.has(list))return

        console.log(list)
        visted.add(list)

        for(let connction of this.list[list])
            if(!visted.has(connction)){
                dfsRecrtion(connction)
            }
       }
       dfsRecrtion(start)
    }
    
}
const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdges('A','B')
graph.addEdges('B','C')
console.log(graph.hasEdges('A','B'))
// graph.removeEdges('A','B')
// graph.removeVertex('A')
graph.dispaly()
graph.dfs('A')

// graph.addEdges()

class Node {
    constructor(value){
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class Graph {
    constructor(){
        this.head = null;
        this.size = 0;
        return this;
    }
    insert(value){
       const newNode = new Node(value);
       if(!this.size){
           this.head = newNode;
           ++this.size;
       } else {
          
       }
    }

    bfs(){
        if(!this.head) return;
        let queue = [];
        queue.push(this.head);
        while(queue.length){
            let node = queue.shift();
            console.log(node.val);
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }
    }
}
//      1
//   2     3
// 4   5 6   7


const graph = new Graph();
graph.insert(1);
graph.head.left = new Node(2);
graph.head.right = new Node(3);
graph.head.left.left = new Node(4);
graph.head.left.right = new Node(5);
graph.head.right.left = new Node(6);
graph.head.right.right = new Node(7);

graph.bfs();







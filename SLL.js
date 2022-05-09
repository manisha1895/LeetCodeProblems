class Node {
    constructor(value){
        this.val = value;
        this.next = null;
    }
}


class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        ++this.length
    }

    pop(){
        if(this.head){
           let prev = null;
            let start = this.head;
            while(start.next){
                prev = start;
                start = start.next;
            }
            if(!prev){
                this.head = null;
                this.tail = null;
            } else {
                prev.next = null;
                this.tail = prev;
            }
            --this.length; 
        } 
    }

    shift(){
        if(this.head){
           this.head = this.head.next;
           --this.length; 
        }
        if(this.length === 0)
            this.tail = null;
    }

    unshift(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        ++this.length;
        if(this.length === 1){
            this.tail = this.head;
        }
        
    }

    get(index){
        if(index < 0 || index > this.length){
            return null;
        } else {
           let counter = 0, ptr = this.head;
           while(counter !== index){
              ++counter;
              ptr = ptr.next;
           }
           return ptr;
        }
    }

    set(index, value){
        const node = this.get(index);
        if(node){
            node.val = value;
        }
    }

    reverse(){
        let prev = null, ptr = this.head;
        while(ptr){
            let remaining = ptr.next;
            ptr.next = prev;
            prev = ptr;
            ptr = remaining;
        }
        this.tail = this.head;
        this.head = prev;
    }
}
// <-10 <-20-> 30-> 40

const SLL = new SinglyLinkedList();
SLL.push(20);
SLL.push(50);
SLL.push(40);
SLL.unshift(10)
SLL.set(2,30)
SLL.reverse()
console.log(SLL)

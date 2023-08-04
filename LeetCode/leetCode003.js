var middleNode = function(head) {
    let count = 0;
    let temp = head;
    let temphead = head;
    while(temp){
        temp = temp.next;
        count++;
    }
    console.log(count);
    // if(midd % 2 !== 0){
    //     midd += 1;
    // }
    // while(midd){
    //     temphead = temphead.next;
    //     midd--;
    // }

    return temphead;
};

// Assuming the "Node" structure is something like this:
function Node(val) {
    this.val = val;
    this.next = null;
}

// Example usage:
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next = new Node(7);

const middle = middleNode(head);
console.log(middle); // 
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * TC: O(n), SC: O(1)
 */
var swapPairs = function(head) {
    let dummy = new ListNode(0, head);
    let node0 = dummy, node1 = head;
    while(node1&&node1.next){
        let node2 = node1.next;
        let node3 = node2.next;
        node0.next = node2;
        node2.next = node1;
        node1.next = node3;
        node0 = node1;
        node1 = node3;
    }
    return dummy.next;
}


/**
 * @param {ListNode} head
 * @return {ListNode}
 * TC :O(n), SC: O(n)
 */
var swapPairs = function(head) {
    if(head === null || head.next === null){
        return head;
    }
    let node0 = head;
    let node1 = head.next;
    let node2 = node1.next;
    node0.next = swapPairs(node2);
    node1.next = node0;
    return node1; 
}
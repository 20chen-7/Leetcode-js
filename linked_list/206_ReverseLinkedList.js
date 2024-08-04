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
 */
var reverseList = function(head) {
    let prev = null, curr = head;
    while(curr){
        let tmp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tmp;
    }
    return prev;
};

var reverseList2 = function(head) {
    if(head===null||head.next===null){
        return head;
    }
    const newHead = reverseList2(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};
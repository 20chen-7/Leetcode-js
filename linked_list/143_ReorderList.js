/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var reverseList = function(head){
    if(head === null || head.next === null)return head;
    let fakeH = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return fakeH;

}
var findMid = function(head){
    let fast = head, slow = head;
    while(fast&&fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow
}
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 * TC:O(n), SC:O(1)
 */
var reorderList = function(head) {
    let mid = findMid(head);
    let reverseH = reverseList(mid);
    while(reverseH.next!=null){
        let nxt = head.next;
        let nxt2 = reverseH.next;
        head.next = reverseH;
        reverseH.next = nxt;
        head = nxt;
        reverseH = nxt2;
    }
    return head;
};
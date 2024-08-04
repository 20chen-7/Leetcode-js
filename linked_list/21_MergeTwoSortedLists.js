/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 * 
 * TC:O(m+n), SC: O(1)
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0);
    let p = dummy;
    let p1 = list1, p2 = list2;
    while(p1&&p2){
        if(p1.val>p2.val){
            p.next = p2;
            p2 = p2.next;
        }else{
            p.next = p1;
            p1 = p1.next;
        }
         p = p.next
    }
    p.next = p1?p1:p2;
    return dummy.next;
};

/** TC:O(m+n), SC: O(m+n) */
var mergeTwoLists = function(list1, list2) {
    if(list1 === null)return list2;
    if(list2 === null)return list1;
    if(list1.val<list2.val){
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
}
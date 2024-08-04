/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 * TC:O(nlogk), SC:O(k)
 */
var mergeKLists = function(lists) {
    let pq = new MinPriorityQueue({priority: e=>e.val});
    for(const head of lists){
        if(head)pq.enqueue(head);
    }
    let dummy = new ListNode();
    let p = dummy;
    while(!pq.isEmpty()){
        const node = pq.dequeue().element;
        if(node.next)pq.enqueue(node.next);
        p.next = node;
        p = p.next;
    }
    return dummy.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var mergeTwoLists = function(list1, list2){
    let dummy = new ListNode();
    let p = dummy;
    while(list1&&list2){
        if(list1.val>list2.val){
            p.next = list2;
            list2 = list2.next;
        }else{
            p.next = list1;
            list1 = list1.next;
        }
        p = p.next;
    }
    p.next = list1? list1: list2;
    return dummy.next;
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 * TC:O(nlogk), SC:O(logk)
 */
var mergeKLists2 = function(lists) {
    function dfs(i, j){
        const m = j-i;
        if(m === 0)return null;
        if(m === 1)return lists[i];
        const left = dfs(i, i+(m>>1));
        const right = dfs(i+(m>>1), j);
        return mergeTwoLists(left,right);
    }

    return dfs(0, lists.length);
};
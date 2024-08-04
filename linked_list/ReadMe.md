# LinkedList
- [LC206](https://leetcode.cn/problems/reverse-linked-list/)
    - reverse LinkedList
    - ``` javascript
        //iterative
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
        var reverseList = function(head) {
            if(head===null||head.next===null)
            return head;
            const newHead = reverseList(head.next);
            head.next.next = head.next;
            head.next = null;
            return newHead;
            };
        ```
- [LC876](https://leetcode.cn/problems/middle-of-the-linked-list/)
- middle point LinkedList
    - ``` javascript
        //iterative
        var middleNode = function(head) {
            let fast = head, slow = head;
            while(fast&&fast.next){
                fast = fast.next.next;
                slow = slow.next;
            }
            return slow;
         };
        ```
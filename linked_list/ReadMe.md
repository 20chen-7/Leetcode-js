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
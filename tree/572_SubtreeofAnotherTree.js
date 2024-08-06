/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 * TC:O(n*min(m,n)); SC:O(n)
 */
var isSubtree = function(root, subRoot) {
    const same = (p,q)=>{
        if(!q||!p)return p===q;
        return p.val===q.val&&same(p.left, q.left)&&same(p.right,q.right);
    }
    return same(root, subRoot)||
            isSubtree(root.left, subRoot)||
            isSubtree(root.rigt, subRoot);
};

var isSubtree = function(root, subRoot) {
    return (JSON.stringify(root).indexOf(JSON.stringify(subRoot)))>-1?true:false;
};
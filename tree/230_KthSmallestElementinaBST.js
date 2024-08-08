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
 * @param {number} k
 * @return {number}
 * inorder
 * TC:O(n), SC:O(n)
 */
var kthSmallest = function(root, k) {
    let arr = [];
    function dfs(node, res){
        if(!node)return;
        dfs(node.left, res);
        res.push(node.val);
        dfs(node.right, res);
        return
    }
    dfs(root, arr);
    return k<=arr.length?arr[k-1]:-1;
};
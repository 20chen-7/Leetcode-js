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
 * @return {number}
 * TC:O(n), SC:O(n)
 */
var diameterOfBinaryTree = function(root) {
    let ans = 0
    function dfs(node){
        if(!node)return -1;
        const left = dfs(node.left);
        const right = dfs(node.right);
        ans = Math.max(left+right+2, ans);
        return Math.max(left, right)+1;
    }
    dfs(root);
    return ans;
};
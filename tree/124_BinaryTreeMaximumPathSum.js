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
 */
var maxPathSum = function(root) {
    let ans = -Infinity;
    function dfs(node){
        if(!node)return 0;
        const left = dfs(node.left);
        const right = dfs(node.right);
        ans = Math.max(left+right+node.val, ans);
        return Math.max(Math.max(left, right)+node.val, 0);
    }
    dfs(root);
    return ans;
};
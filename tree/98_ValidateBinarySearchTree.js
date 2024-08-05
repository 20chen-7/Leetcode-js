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
 * @return {boolean}
 * Preorder
 * TC:O(n), SC:O(n);
 */
var isValidBST = function(root) {
    return isvalid(root);
    
};
function isvalid(root, left=-Infinity, right=Infinity){
    if(root === null)return true;
    const x = root.val;
    return left<x && x<right && isvalid(root.left, left, x)&&
            isvalid(root.right, x, right);
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 * inorder
 */
var isValidBST = function(root) {
    let pre = -Infinity;
    function dfs(node){
        if(!node)return true;
        if(!dfs(node.left)||node.val<pre)return false;
        pre = node.val;
        return dfs(node.right);
    }
    return dfs(root);
    
    
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 * inorder
 */
var isValidBST = function(root) {
    function dfs(node){
        if(!node)return [Infinity, -Infinity];
        const x = node.val;
        const [lmin, lmax] = isValidBST(node.left);
        const [rmin, rmax] = isValidBST(node.right);
        if(x<=lmax||x>=rmin)return [-Infinity, Infinity];
        return [Math.min(lmin, x), Math.max(x, rmax)];
    }
    return dfs(root)[1]!=Infinity;
    
    
};

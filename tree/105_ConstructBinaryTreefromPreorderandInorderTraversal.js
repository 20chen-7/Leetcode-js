/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * TC: O(n^2), SC:O(n)
 */
var buildTree = function(preorder, inorder) {
    if(!preorder.length||!inorder.length)return null;
    let root = new TreeNode(preorder[0]);
    let rootIdx = inorder.indexOf(root.val);
    let left = inorder.slice(0, rootIdx);
    let right = inorder.slice(rootIdx+1);
    if(rootIdx===0){
        root.left = null 
    }else{
        root.left = buildTree(preorder.slice(1,rootIdx+1),left)
    }
    root.right = buildTree(preorder.slice(rootIdx+1), right);
    return root;
    
};

var buildTree2 = function(preorder, inorder) {
    const n = preorder.length;
    if(n===0)return null;
    const leftSize = inorder.indexOf(preorder[0]);
    const pre1 = preorder.slice(0, leftSize);
    const pre2 = preorder.slice(leftSize+1,n);
    const in1 = inorder.slice(0, leftSize);
    const in2 = inorder.slice(leftSize+1, n);
    const left = buildTree2(pre1, in1);
    const right = buildTree2(pre2, in2);
    return new TreeNode(preorder[0], left, right);
    
};
/**TC:O(n), SC:O(n) */

var buildTree3 = function(preorder, inorder) {
    const n = preorder.length;
    const map = new Map();
    for(let i = 0; i < n; i++){
        map.set(inorder[i], i);
    }
    function dfs(preL, preR, inL, inR){
        if(preL === preR)return null;
        const leftSize = map.get(preorder[preL])-inL;
        const left = dfs(preL+1, preL+1+left, inL, inL+leftSize);
        const right = dfs(preL+1+leftSize, preR, inL+1+leftSize, inR);
        return new TreeNode(preorder[preL], left, right);
    }
    return dfs(0, n, 0, n)
};
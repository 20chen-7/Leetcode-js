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
 * @return {number[][]}
 * bfs
 */
var levelOrder = function(root) {
    if(root === null)return [];
    let q = [];
    q.push(root);
    let ans = [];
    while(q.length){
        let nxt = [];
        let curr = [];
        for(const node of q){
            curr.push(node.val);
            if(node.left)nxt.push(node.left);
            if(node.right)nxt.push(node.right);
        }
        q = nxt;
        ans.push(curr);
    }
    return ans;
};
/**
 * 
 * @param {TreeNode} root 
 * @return {number[][]}
 * dfs
 */

var levelOrder = function(root) {
    if(root===null)return [];
    let res = [];
    dfs(root, 0, res);
    return res;
};

function dfs(root, step, res){
    if(root){
        if(!res[steo])res[step] = [];
        res[step].push(root.val);
        dfs(root.left, step+1, res);
        dfs(root.right, step+1, res);
    }
}
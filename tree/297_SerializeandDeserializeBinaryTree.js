/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 * TC:O(n), SC:O(n)
 */
var serialize = function(root) {
    return rserialize(root, '');
};
const rserialize = (root, str)=>{
    if(!root){
        str += 'None,';
    }else{
        str += root.val+''+',';
        str = rserialize(root.left, str);
        str = rserialize(root.right, str);
    }
    return str
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    return rdeserialize(data.split(','));
};

const rdeserialize = (data) =>{
    if(data[0] === 'None'){
        data.shift();
        return null;
    }
    const root = new TreeNode(parseInt(data[0]));
    data.shift();
    root.left = rdeserialize(data);
    root.right = rdeserialize(data);
    return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

//DFS

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 * TC:O(n), SC:O(n)
 */
var serialize = function(root) {
    if(!root)return 'X';
    const left = serialize(root.left);
    const right = serialize(root.right);
    return root.val+','+left+','+right;
};


/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const list = data.split(',');
    const dfs = (list) => {
        const rootVal = list.shift();
        if(rootVal === 'X')return null;
        const root = new TreeNode(rootVal);
        root.left = dfs(list);
        root.right = dfs(list);
        return root;
    }
    return dfs(list);
}



/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
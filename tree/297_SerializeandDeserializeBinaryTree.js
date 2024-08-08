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
 */
var serialize = function(root) {
    const q = [root];
    let res = [];
    while(q.length){
        const node = q.shift();
        if(node){
            res.push(node.val);
            q.push(node.left);
            q.push(node.right);
        }else{
            res.push('X');
        }
    }
    return res;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 * BFS
 */
var deserialize = function(data) {
    if(data[0] === 'X')return null;
    const list = data.split(',');
    const root = new TreeNode(list[0]);
    let q = [root];
    let cursor = 1;
    while(q.length){
        const node = q.shift();
        const leftVal = list[cursor];
        const rightVal = list[cursor+1];
        if(leftVal !== 'X'){
            const left = new TreeNode(leftVal);
            q.push(left);
            node.left = left;
        }
        if(rightVal !== 'X'){
            const right = new TreeNode(rightVal);
            q.push(right);
            node.right = right;
        }
        cursor += 2;
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
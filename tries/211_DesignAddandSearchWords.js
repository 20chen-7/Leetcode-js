
var WordDictionary = function() {
    this.children = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let nodes = this.children;
    for(const c of word){
        if(!nodes[c]){
            nodes[c] = {};
        }
        nodes = nodes[c];
    }
    nodes.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    let nodes = this.children;
    const n = word.length;
    const dfs = (index, node)=>{
        if(index === n){
            return node.isEnd===true;
        }
        const c = word[index];
        if(c !== '.'){
            if(!node[c])return false;
            return dfs(index+1, node[c])
        }else{
            for(const key in node){
                if(dfs(index+1, node[key])){
                    return true;
                }
            }
            return false;
        }
        
    }
    return dfs(0, this.children);
};
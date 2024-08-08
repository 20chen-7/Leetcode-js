
var Trie = function() {
    this.children = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let nodes = this.children;
    for(const c of word){
        if (!nodes[c]){
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
Trie.prototype.search = function(word) {
    let nodes = this.startsWith(word);
    return nodes!==undefined&&nodes.isEnd!==undefined
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let nodes = this.children;
    for(const c of prefix){
        if(!nodes[c])return false;
        nodes = nodes[c];
    }
    return nodes;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
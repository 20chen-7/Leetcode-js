/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var longestPath = function(parent, s) {
    const n = parent.length;
    let ans = 0;
    let g = new Array(n).fill(0).map(()=>[]);
    for(let i = 1; i < n; i++){
        g[parent[i]].push(i);
    }
    const dfs = (i) =>{
        let maxL = 0;
        for(let j of g[i]){
            if(s[j] !== s[i]){
                let l = dfs(j)+1;
                ans = Math.max(l+maxL, ans);
                maxL = Math.max(l, maxL);
            }
        }
        return maxL;

    }
    dfs(0);
    return ans;
};
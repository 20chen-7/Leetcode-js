/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let ans = [];
    let path = [];
    function dfs(i, sum){
        if(sum === 0){
            ans.push([...path]);
            return;
        }
        if(i===candidates.length||sum<0)return;
        dfs(i+1, sum);
        path.push(candidates[i]);
        dfs(i, sum-candidates[i]);
        path.pop();
    }
    dfs(0, target);
    return ans;
};

var combinationSum = function(candidates, target) {
    let ans = [];
    let path = [];
    candidates.sort((a,b)=>a-b);
    function dfs(i, sum){
        if(sum === 0){
            ans.push([...path]);
            return;
        }
        if(i===candidates.length||sum<candidates[i])return;
        dfs(i+1, sum);
        path.push(candidates[i]);
        dfs(i, sum-candidates[i]);
        path.pop();
    }
    dfs(0, target);
    return ans;
};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let ans = [];
    let path = [];
    const n = candidates.length;
    f = Array.from({length: n+1},()=>Array(target+1).fill(false));
    f[0][0] = true;
    for(let i = 0; i < n; i++){
        for(let j = 0; j< target+1;j++){
            f[i + 1][j] = f[i][j] || (j >= x && f[i + 1][j - x]);
        }
    }
    function dfs(i, left){
        if(left === 0){
            ans.push([...path]);
            return;
        }
        if(i<0||left<0||!f[i+1][left])return;
        dfs(i-1,left);
        path.push(candidates[i]);
        dfs(i, left-candidates[i]);
        path.pop();
    }
    dfs(n-1, target);
    return ans;
};
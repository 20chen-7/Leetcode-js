/***
 * add '+' sum = p;
 * add '-' sum = s - p; s = sum(nums)
 * p - (s-p) = t;
 * p = (s+t)/2
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const s = nums.reduce((acc, num)=>acc+num,0);
    target += s;
    if(target<0||target%2)return 0;
    target = target>>1;
    function dfs(i, c){
        if(i<0)return c===0?1:0;
        if(i===nums.length||c<nums[i]){
            return dfs(i-1,c);
        }
        return dfs(i-1,c)+dfs(i-1, c-num[i]);
    }
    return dfs(n-1, target);
};

var findTargetSumWays2 = function(nums, target) {
    const s = nums.reduce((acc, num)=>acc+num,0);
    target += s;
    if(target<0||target%2)return 0;
    target = target>>1;
    const n = nums.length;
    f = Array.from({length: n+1},()=> Array(target+1).fill(0));
    f[0][0] = 1;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < target+1; j++){
            if(j<nums[i]){
               f[i+1][j] =  f[i][j]
            }else{
                f[i+1][j] = f[i][j]+f[i][j-nums[i]]
            }
            
        }
    }
    return f[n][target];
};
/** Tc:o(mn) SC: o(m) */

var findTargetSumWays3 = function(nums, target) {
    const s = nums.reduce((acc, num)=>acc+num,0);
    target += s;
    if(target<0||target%2)return 0;
    target = target>>1;
    const n = nums.length;
    f = Array.from({length: 2},()=> Array(target+1).fill(0));
    f[0][0] = 1;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < target+1; j++){
            if(j<nums[i]){
               f[(i+1)%2][j] =  f[i%2][j]
            }else{
                f[(i+1)%2][j] = f[i%2][j]+f[i%2][j-nums[i]]
            }
            
        }
    }
    return f[n%2][target];
};

var findTargetSumWays4 = function(nums, target) {
    const s = nums.reduce((acc, num)=>acc+num,0);
    target += s;
    if(target<0||target%2)return 0;
    target = target>>1;
    const n = nums.length;
    f = Array(target+1).fill(0);
    f[0][0] = 1;
    for(let i = 0; i < n; i++){
        for(let j = target; j < nums[i]-1; j--){
            if(j>=nums[i]){
                f[j] = f[j]+f[j-nums[i]]
            }
            
        }
    }
    return f[target];
};
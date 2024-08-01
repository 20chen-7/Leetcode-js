/**
 * 
 * @param {number[]} nums 
 * @return {number[]}
 * TC:O(n)
 * SC:O(n)
 */
var productExceptSelf = function(nums){
    const n = nums.length;
    const pre = Array(n);
    pre[0] = 1;
    for(let i = 0; i < n; i++){
        pre[i] = pre[i-1]*nums[i];
    }
    const suf = Array(n);
    suf[n-1] = 1;
    for(let i = n-2; i >= 0; i--){
        suf[i] = suf[i+1]*nums[i+1];
    }
    const ans = Array(n);
    for(let i = 0; i < n; i++){
        ans[i] = pre[i]*suf[i];
    }
    return ans;
}

/**
 * 
 * @param {number[]} nums 
 * @return {number[]}
 * TC:O(n)
 * SC:O(1)
 */
var productExceptSelf2 = function(nums){
    const n = nums.length;
    const suf = Array(n);
    suf[n-1] = 1;
    for(let i = n-2; i>= 0;i--){
        suf[i] = suf[i+1]*nums[i+1];
    }
    let pre = 1;
    for(let i = 0; i < n; i++){
        suf[i] *= pre;
        pre*=nums[i];
    }
    return suf;

}
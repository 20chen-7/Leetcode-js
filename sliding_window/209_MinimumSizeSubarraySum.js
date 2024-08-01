/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 * TC: O(n)
 * SC: O(1)
 */
var minSubArrayLen = function(target, nums) {
    const n = nums.length;
    let l = 0;
    let ans = n+1;
    let sum = 0
    for(let r = 0; r<n; r++){
        sum += nums[r];
        while(sum - nums[l] >= target){
            sum -= nums[l++];
        }
        if(sum >= target){
            ans = Math.min(ans, r-l+1);
        }
    }
    return ans <= n? ans: 0;
};

var minSubArrayLen2 = function(target, nums) {
    const n = nums.length;
    let l = 0;
    let ans = n+1;
    let sum = 0
    for(let r = 0; r<n; r++){
        sum += nums[r];
        while(sum >= target){
            ans = Math.min(ans, r-l+1);
            sum -= nums[l++];
        }
    }
    return ans <= n? ans: 0;
};
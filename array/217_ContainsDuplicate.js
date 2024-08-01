
/**
 * @param {number[]} nums
 * @return {boolean}
 */

/** TC: O(NlogN), SC: O(NlogN) */
var containsDuplicate = function(nums){
    nums.sort((a,b) => a-b);
    const n = nums.length;
    for(let i = 0; i < n-1; i++){
        if(nums[i] === nums[i+1]){
            return true;
        }
    }
    return false;
}
/** TC: O(N), SC: O(N) */
var containsDuplicate2 = function(nums){
    const set = new Set();
    for(const x of nums){
        if(set.has(x)){
            return true;
        }
        set.add(x);
    }
    return false;
}
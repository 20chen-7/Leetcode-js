/**
 * 
 * @param {*} nums 
 * @param {*} target 
 * @returns {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(map.has(target-curr)){
            return [map.get(target-curr), i];
        }
        map.set(nums[i],i)
    }
    return []
};
/**
 * 
 * @param {*} nums 
 * @param {*} target 
 * @returns {number[]}
 * TC: O(n), SC: O(n)
 */
var twoSum2 = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i,j];
            }
        }
    }
    return [-1,-1]
};
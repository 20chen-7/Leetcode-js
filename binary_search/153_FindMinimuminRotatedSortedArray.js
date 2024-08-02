/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    const n = nums.length;
    let l = 0, r = n-1;
    while(l<r){
        let mid = (l+r)>>1;
        if(nums[mid]>nums[r]){
            l = mid+1;
        }else{
            r = mid;
        }
    }
    return nums[l]
};
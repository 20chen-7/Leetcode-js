var findMin = function(nums){
    let l = 0, r = nums.length-1, mid;
    while(l<=r){
        mid = l+((r-l)>>1);
        if(nums[mid]>nums[r]){
            l = mid+1;
        }else{
            r = mid-1;
        }
    }
    return r;
}
var bound = function(nums,l,r, target){
    while(l<=r){
        mid = l+((r-l)>>1);
        if(nums[mid]>target){
            l = mid+1;
        }else{
            r = mid-1;
        }
    }
    return nums[r] === target? r:-1;
}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const minIdx = findMin(nums);
    if(target>nums[nums.length-1]){
        return bound(nums,0,minIdx,target);
    }else{
        return bound(nums,minIdx,nums.length-1,target);
    }
};
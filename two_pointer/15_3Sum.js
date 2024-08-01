/**
 * @param {number[]} nums
 * @return {number[][]}
 * TC: O(n^2)
 * SC: O(1)
 */
var threeSum = function(nums) {
    const ans = [];
    const n = nums.length;
    if(n < 3)return ans;
    nums.sort((a,b)=>a-b);
    for(let i = 0; i < n-2; i++){
        let x = nums[i];
        if(x>0) break;
        if(i >= 1 && x ===nums[i-1]) continue;
        if(x+nums[i+1]+nums[i+2]>0)break;
        if(x+nums[n-1]+nums[n-2]<0)continue;
        let l = i+1;
        let r = n-1;
        while(l<r){
            const sum = x+nums[l]+nums[r];
            if(sum===0){
                ans.push([x, nums[l], nums[r]]);
                while(l<r&&nums[l] === nums[l+1])l++;
                while(l<r&&nums[r] === nums[r-1])r--;
                l++;
                r--;
            }else if(sum>0){
                r--;
            }else if(sum < 0){
                l++;
            }
        }
    }
    return ans;
};
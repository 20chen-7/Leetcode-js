/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0;
    let r = height.length -1;
    let ans = 0;
    while(l<r){
        let currArea = (r-l)*Math.min(height[l], height[r]);
        ans = Math.max(currArea, ans);
        if(height[l]<height[r]){
            l++;
        }else{
            r--;
        }
    }
    return ans;
};
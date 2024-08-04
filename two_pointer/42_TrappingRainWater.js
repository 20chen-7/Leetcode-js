/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let l = 0, r = height.length-1;
    let lH = 0, rH = 0;
    let ans = 0;
    while(l<r){
        lH = Math.max(lH, height[l]);
        rH = Math.max(rH, height[r]);
        if(rH<lH){
            ans += rH-height[r];
            r--;
        }else{
            ans += lH-height[l];
            l++;
        }
    }
    return ans;
};
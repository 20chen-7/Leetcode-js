/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x === 1)return 1;
    let l = 1, r = Math.floor(x/2);
    while(l <= r){
        let mid = l+((r-l)>>1);
        if(mid*mid===x){
            return mid
        }
        if(mid*mid<x){
            l = mid+1;
        }else{
            r = mid-1;
        }
    }
    return r;
};
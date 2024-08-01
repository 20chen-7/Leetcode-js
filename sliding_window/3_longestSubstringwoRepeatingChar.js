/**
 * @param {string} s
 * @return {number}
 * TC: o(n)
 * SC: o(|\sigma|)
 */
var lengthOfLongestSubstring = function(s) {
    let ans = 0;
    let set = new Set();
    let l = 0;
    for(let i = 0; i < s.length; i++){
        while(l < i && set.has(s[i]) ){
            set.delete(s[l]);
            l++;
        }
        ans = Math.max(ans, i-l+1);
        set.add(s[i]);
    }
    return ans;
};
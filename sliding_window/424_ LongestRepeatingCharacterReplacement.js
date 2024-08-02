/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    if(s === null)return 0;
    const cnt = new Array(26).fill(0);
    const A_CODE = 'A'.charCodeAt();
    let l = 0, r = 0,  max = 0;
    while(r < s.length){
        const index = s[right].charCodeAt() - A_CODE;
        cnt[index]++;
        max = Math.max(max, cnt[index]);
        if(r-l+1>max+k){
            cnt[s[left].charCodeAt()-A_CODE]--;
            l++;
        }
        r--;
    }
    return r-l;
};
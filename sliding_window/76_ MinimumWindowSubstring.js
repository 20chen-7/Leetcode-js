function isCovered(cntS, cntT){
    for(let i = 'A'.charCodeAt(0); i < 'Z'.charCodeAt(0); i++){
        if(cntS[i] <cntT[i]){
            return false;
        }
    }
    for(let i = 'a'.charCodeAt(0); i < 'z'.charCodeAt(0); i++){
        if(cntS[i] <cntT[i]){
            return false;
        }
    }
    return true;

}
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const m = s.length;
    let ansL = -1, ansR = m;
    let l = 0, less = 0;
    const cntS = new Array(128).fill(0);
    const cntT = new Array(128).fill(0);
    for(const c of t){
        if(cntT[c.codePointAt(0)]++ === 0){
            less++;
        }
    }
    for(let r = 0; r<m; r++){
        const c = s[r].codePointAt(0);
        if(++cntS[c] === cntT[c]){
            less --;
        }
        while(less === 0){
            if(r-l<ansR-ansL){
                ansR = r;
                ansL = l;
            }
            const x = s[l++].codePointAt(0);
            if(cntS[x]-- === cntT[x]){
                less++;
            }
        }
    }
    return ansL<0? "":s.substring(ansL, ansR+1);
};
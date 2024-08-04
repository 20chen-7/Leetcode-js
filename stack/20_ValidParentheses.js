/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length%2)return false;
    const st = [];
    const map = {')':'(','}':'{',']':'['};
    for(const c of s){
        if(!map.hasOwnProperty(c)){
            st.push(c);
        }else if(st.length === 0 || st.pop()!== map[c]){
            return false;
        }
    }
    return st.length === 0;

};
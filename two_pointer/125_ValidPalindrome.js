/**
 * 
 * @param {string} s
 * @return {boolean} 
 */
var isPalindrome = function(s){
    let l = 0
    let r = s.length-1;
    s = s.toLowerCase();
    const alphabetRegex = /^[a-z0-9]$/;
    while(l<r){
        if(!alphabetRegex.test(s[l])||!alphabetRegex.test(s[r])){
            if(!alphabetRegex.test(s[l])){
                l++;
            }else{
                r--;
            }
        }else if(s[l] === s[r]){
            l++;
            r--;
        }else{
            return false;
        }
    }
    return true;
}

var isPalindrome2 = function(s){
    s = s.replace(/[^a-zA-Z0-9]|\s/gi,"").toLowerCase();
    console.log("s",s,[...s].reverse().join(""))
    return s===[...s].reverse().join("");
}
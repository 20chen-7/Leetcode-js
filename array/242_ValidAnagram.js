/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 /** TC: O(nlogn) SC: O(logn) */
 /**
  * The codePointAt() method returns the Unicode value of the character at the specified index in a string.
  * i++ (Post-increment) vs ++i (Pre-increment)
  */
var isAnagram = function(s, t){
    return s.length === t.length && [...s].sort().join('') === [...t].sort().join('');
}
/**
 * 
 * @param {*} s 
 * @param {*} t 
 * @return {boolean}
 * TC: O(n), SC: O(s)
 */
var isAnagram2 = function(s, t){
    if(s.length !== t.length){
        return false;
    }
    const table = new Array(26).fill(0);
    for(let i = 0; i < s.length; i++){
        table[s.codePointAt(i) - 'a'.codePointAt(0)] ++;
    }
    for(let i = 0; i < t.length; i++){
        table[s.codePointAt(i) - 'a'.codePointAt(0)]--;
        if(table[s.codePointAt(i) - 'a'.codePointAt(0)] < 0){
            return false;
        }
    }
    return true;
}
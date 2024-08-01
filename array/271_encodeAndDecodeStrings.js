/**
 * 
 * @param {string[]} strs 
 * @return {string}
 */
var encode = function(strs){
    return strs.map((str)=> `${str.length}#${str}`).join('');
}

/**
 * 
 * @param {string} s 
 * @return {string[]} 
 */
var decode = function(s){
    let res = [];
    let i = 0;
    while(i<s.length){
        let hash = s.indexOf('#', i);
        let length = parseInt(s.slice(i, hash));
        i = hash+1;
        const str = s.slice(i, i+length);
        res.push(str);
        i = i + length;
    }
    return res;
}
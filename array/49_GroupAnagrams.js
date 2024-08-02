/**
 * 
 * @param {string[]} strs 
 * @return {string[][]}
 */
var groupAnagram = function(strs){
    let map = new Map();
    strs.forEach((ele) => {
        let sortedEle = ele.split('').sort().join('');
        if(map.has(sortedEle)){
            map.set(sortedEle, [ele, ...map.get(sortedEle)])
        }else{
            map.set(sortedEle, [ele])
        }
    })
    return (Array.from(map.values()))
}

var groupAnagram2 = function(strs){
    var map = {}
    for(let i = 0; i < strs.length; i++){
        if(!map[strs[i].split().sort().join('')])map[strs[i].split().sort().join('')]
    }
}

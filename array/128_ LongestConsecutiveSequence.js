/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums){
    let hashMap = new Map();
    let ans = 0;
    for(const x of nums){
        if(!hashMap.has(x)){
            const preL = hashMap.get(x-1)||0;
            const postL = hashMap.get(x+1)||0;
            const currL = preL+postL+1;
            hashMap.set(x, currL);
            hashMap.set(x-preL, currL);
            hashMap.set(x+postL, currL);
            ans = Math.max(ans, currL);
        }
    }
    return ans;
}

class UnionFind{
    constructor(){
        this.parents = new Map();
        this.sizes = new Map();
    }
    add(val){
        this.parents.set(val, val);
        this.sizes.set(val, 1);
    }
    find(val){
        if(!this.parents.has(val))return null;
        if(this.parents.get(val)===val)return val;
        const parent = this.find(this.parents.get(val));
        this.parents.set(val, parent);
        return parent;
    }
    union(a,b){
        const aParent = this.find(a);
        const bParent = this.find(b);
        if(aParent === null || bParent === null)return
        if(aParent === bParent)return
        const aSize = this.sizes.get(aParent);
        const bSize = this.sizes.get(bParent);
        if(aSize>bSize){
            this.parents.set(bParent, aParent);
            this.sizes.set(aParent, aSize+bSize);
        }else{
            this.parents.set(aParent, bParent);
            this.sizes.set(bParent, aSize+bSize);
        }
    }
    maxSize(){
        let maxSize = 0;
        for(const [_, size] of this.sizes){
            maxSize = Math.max(size, maxSize);
        }
        return maxSize;
    }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums){
    const uf = new UnionFind();
    for(const x of nums) uf.add(x);
    for(const x of nums){
        uf.union(x, x-1);
        uf.union(x, x+1);
    }
    return uf.maxSize();
}
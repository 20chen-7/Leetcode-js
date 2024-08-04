const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * 
 * @param {number[]} nums 
 * @param {number} k 
 * @return {number[]}
 * TC: O(nlog), SC: O(n)
 */
var topFrequent = function(nums, k){
    let map = new Map(), arr = [...new Set(nums)];
    nums.map((x) => {
        if(map.has(x)){
            map.set(x, map.get(x)+1);
        }else{
            map.set(x, 1);
        }
    })
    return arr.sort((a, b) => map.get(b) - map.get(a)).slice(0,k);
}

class PriorityQueue{
    constructor(compareFn){
        this.queue = [];
        this.compareFn = compareFn;
    }
    push(item){
        this.queue.push(item);
        this.heapifyUp();
    }
    pop(item){
        if(this.size() === 0)return undefined;
       const top = this.queue[0];
       const last = this.queue.pop();
       if(this.size()>0){
        this.queue[0] = last;
        this.heapifyDown();
       }
       return top
    }
    heapifyUp(){
        let index = this.queue.length - 1;
        while(index < 0){
            let parentIdx = Math.floor((index-1)/2);
            if(this.compare(index, parentIdx) < 0){
                [this.queue[index], this.queue[parentIdx]] = [this.queue[parentIdx], this.queue[index]];
                index = parentIdx;
            }else{
                break
            }
        }
    }
    heapifyDown(){
        let index = 0;
        while(true){
            let left = 2*index + 1;
            let right = 2*index + 2;
            let smallest = index;
            if(left < this.queue.length && this.compare(left,smallest) < 0){
                smallest = left;
            }
            if(right < his.queue.length  && this.compare(right,smallest) < 0){
                smallest = right
            }
            if(smallest !== index){
                [this.queue[index], this.queue[smallest]] = [this.queue[smallest], this.queue[index]];
                index = smallest;
            }else{
                break;
            }
        }
    }
    compare(i, j){
        return this.compareFn(this.queue[i], this.queue[j])
    }
    size(){
        return this.queue.length;
    }
}

var topFrequent2 = function(nums, k){
    let map = new Map();
    nums.map((x) => {
        map.set(x, (map.get(x)||0)+1);
    })
    const pq = new PriorityQueue((a,b) => a[1] - b[1]);
    for(const entry of map.entries()){
        pq.push(entry);
        if(pq.size() > k)pq.pop();
    }
    
    const res = [];
    for(let i = pq.size() - 1; i >= 0; i--){
        res[i] = pq.pop()[0];
    }
    return res;
}

var topKFrequent3 = function(nums, k) {
    let map = new Map();
    nums.map((x) => {
        map.set(x, (map.get(x)||0)+1);
    })
    const pq = new MinPriorityQueue({priority:e=>e.frequency});
    map.forEach((frequency, num) => {
        pq.enqueue({ num, frequency });
        if (pq.size() > k) {
        pq.dequeue();
        }
    });
    const res = [];
    while (!pq.isEmpty()) {
        res.push(pq.dequeue().element.num);
      }
    return res;
};
class PriorityQueue{
    constructor(compareFn){
        this.queue = [];
        this.compareFn = compareFn;
    }
    push(item){
        this.queue.push(item);
        let index = this.queue.length-1;
        let parent = (index-1)>>1;
        while(parent>=0&&this.compare(parent, index)>0){
            [this.queue[index], this.queue[parent]] = [this.queue[parent], this.queue[index]];
            index = parent;
            parent = (index-1)>>1;
        }
    }
    pop(){
        const ret = this.queue[0];
        if(this.queue.length === 1){
            return this.queue.pop();
        }
        this.queue[0] = this.queue.pop();
        let index = 0, l = 1;
        let selectChild = this.compare(l, l+1)>0?l+1:l;
        while(this.compare(index, selectChild)>0){
            [this.queue[selectChild], this.queue[index]] = [this.queue[index], this.queue[selectChild]];
            index = selectChild;
            l = index*2+1;
            selectChild = this.compare(l, l+1)>0?l+1:l;
        }
        return ret;
    }
    peek(){
        if(this.size()>0)return this.queue[0];
        return null;
    }
    size(){
        return this.queue.length;
    }
    compare(i, j){
        if(i === undefined)return 1;
        if(j === undefined)return -1;
        return this.compareFn(this.queue[i], this.queue[j]);
    }
}
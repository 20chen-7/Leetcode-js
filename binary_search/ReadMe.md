# Basic Binary Search
- ***monotonic***
- ***boundary, index***
## Template
```javascript
function searchNum(target, nums){
    if(!nums.length)return -1;
    let l = 0, r = nums.length - 1; mid;
    while(l<r){
        mid = l+((r-l)>>1);
        if(nums[mid]===target)return mid;
        if(nums[mid]<target){
            l = mid+1;
        }
        if(nums[mid]>target){
            r = mid-1;
        }
    }
    return -1;
}
```
## Rotated Array
- [LC153](https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/)
    - Sorted: `first element < last element`
    - Rotated: `first element > last element`
    - Idea: 
        - find mid
        - mid > first element, minimum in right side(l = mid+1)
        - mid < first element, minimum in left side(r = mid-1)
        - termination: mid > mid+1, minimum is mid+1; mid < mid+1, minimum is mid;
    - ```javascript
        const findMin = function(nums){
            if(!nums.length) return null;
            if(nums.length === 1)return nums[0];
            let l = 0, r = nums.length-1, mid;
            while(l<=r){
                mid = l+((r-l)>>1);
                if(nums[mid]>nums[mid+1]){
                    return nums[mid+1];
                }
                if(nums[mid]<nums[mid+1]){
                    return nums[mid];
                }
                if(nums[mid]>nums[l]){
                    l = mid+1;
                }else{
                    r = mid-1;
                }
            }
            return null;
        }

        ```
- [LC33](https://leetcode.cn/problems/search-in-rotated-sorted-array/)
    - Idea:
        - find mid
        - mid compare with first element
        - left side(ascending interval), if target< mid and target>=left, r = mid+1;
        - right side(ascending interval), if target>mid and target>= rigt, l = mid-1;
        - ```javascript
            const search = function(nums, target){
                if(!nums.length) return null;
                if(nums.length === 1)return nums[0];
                let l = 0, r = nums.length-1, mid;
                while(l<=r){
                    mid = l+((r-l)>>1);
                    if(nums[mid] === target){
                        return mid;
                    }
                    if(nums[mid]>=nums[l]){
                        if(target>=nums[l]&&target<nums[mid]){
                            r = mid-1;
                        }else{
                            l = mid+1;
                        }
                    }else{
                        if(target<=nums[r]&&target>nums[mid]){
                            l = mid+1;
                        }else{
                            r = mid-1;
                        }
                    }
                }
                return -1;
            }  
            ```
- [LC81](https://leetcode.cn/problems/search-in-rotated-sorted-array-ii/)
    - Idea:
        - find mid
        - mid compare with first element
        - left side(ascending interval), if target< mid and target>=left, r = mid+1;
        - right side(ascending interval), if target>mid and target>= rigt, l = mid-1;
        - duplicate items: compare left and mid;
        - ```javascript
            const search = function(nums, target){
                if(!nums.length) return null;
                if(nums.length === 1)return nums[0];
                let l = 0, r = nums.length-1, mid;
                while(l<=r){
                    mid = l+((r-l)>>1);
                    if(nums[mid] === target){
                        return mid;
                    }
                    if(nums[mid]===nums[l]){
                        l++;
                        continue;
                    }
                    if(nums[mid]>=nums[l]){
                        if(target>=nums[l]&&target<nums[mid]){
                            r = mid-1;
                        }else{
                            l = mid+1;
                           }
                    }else{
                        if(target<=nums[r]&&target>nums[mid]){
                            l = mid+1;
                        }else{
                            r = mid-1;
                        }
                    }
                }
                return -1;
            }  
            ```

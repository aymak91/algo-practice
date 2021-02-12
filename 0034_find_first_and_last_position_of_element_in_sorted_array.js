// 34. Find First and Last Position of Element in Sorted Array
// Medium

// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// Follow up: Could you write an algorithm with O(log n) runtime complexity?

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let searchRange = function(nums, target) {
    let res = [-1,-1];
    res[0] = bSearch(nums, target, true);
    res[1] = bSearch(nums, target, false);
    
    return res;
};

    
let bSearch = function (array, target, first) {
    let index = -1;
    let start = 0;
    let end = array.length-1
    
    if (array.length === 0) return -1;

    if (first){
        while (start <= end) {
            let midpoint = start + Math.floor((end-start )/ 2);

            if (array[midpoint] >= target) {
                end = midpoint-1;
            } else {
                start = midpoint+1;
            }
            if(array[midpoint] === target) index = midpoint;
        }
    } else {
        while (start <= end) {
            const midpoint = start + Math.floor((end-start) / 2);

            if (array[midpoint] <= target) {
                start = midpoint+1;
            } else {
                end = midpoint-1;
            }
            if(array[midpoint] === target) index = midpoint;
        }      
    }
    
    return index;
}

// college
// after grad, wanted to work on creative side => entertainment
// realized things were web based, so pursue web dev FS
// talked about technologies
// story from college to how you got here
// working partime as email dev

// email dev job- react hooks on front end
// flexbox
// job related; had to learn something new

// segmented clusters of ppl
// bridge gap 
// negotiate expectations
// outcome: newsroom came together and made landing page
// 15. 3Sum
// Medium

// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Example 2:
// Input: nums = []
// Output: []

// Example 3:
// Input: nums = [0]
// Output: []
 
// Constraints:
// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let threeSum = function(nums) {
    if (nums.length < 3) return [];
    
    nums.sort((x,y) => x - y);
    let sums = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || (i > 0 && nums[i] !== nums[i-1])) {
            let low = i+1;
            let high = nums.length-1;
            let sum = 0 - nums[i];
            
            while (low < high) {
                if (nums[low] + nums[high] === sum) {
                    sums.push([nums[i], nums[low], nums[high]]);
                    while (low < high && nums[low] === nums[low+1]) low++;
                    while (low < high && nums[high] === nums[high-1]) high--;
                    low++;
                    high--;
                } else if (nums[low] + nums[high] > sum) {
                    high--;
                } else {
                    low++;
                }
            }
        }  
    }
    return sums;
    
};
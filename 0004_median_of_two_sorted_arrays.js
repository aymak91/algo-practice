// 4. Median of Two Sorted Arrays
// Hard

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

 

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Example 3:
// Input: nums1 = [0,0], nums2 = [0,0]
// Output: 0.00000

// Example 4:
// Input: nums1 = [], nums2 = [1]
// Output: 1.00000

// Example 5:
// Input: nums1 = [2], nums2 = []
// Output: 2.00000
 

// Constraints:
// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    const length1 = nums1.length;
    const length2 = nums2.length;
    
    let mergedArr = [];
    
    while (nums1.length > 0 && nums2.length > 0) {
        let num;
        if (nums1[0] < nums2[0]) {
            num = nums1.shift();
        } else {
            num = nums2.shift();
        }
        mergedArr.push(num);
    }
    
    mergedArr = mergedArr.concat(nums1, nums2);
    
    let median;
    
    if (mergedArr.length % 2 === 0) {
        
        let right = mid = mergedArr.length / 2;
        let left = right - 1;
        
        median = (mergedArr[right] + mergedArr[left]) / 2;
        
    } else {
        let mid = Math.floor(mergedArr.length / 2);
        median = mergedArr[mid];
    }
    
    return median;
    
};
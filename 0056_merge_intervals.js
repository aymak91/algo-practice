// 56. Merge Intervals
// Medium

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

// Constraints:
// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
let merge = function(intervals) {
    if (intervals.length <= 1) return intervals;
    
    intervals.sort((a,b) => a[0] -b[0]);
    let outputArr = [intervals[0]];
    
    for (let i=1; i<intervals.length; i++) {
        let last = outputArr.length-1;
        if (intervals[i][0] <= outputArr[last][1] && intervals[i][1] > outputArr[last][1]) {
            outputArr[last] = [outputArr[last][0], intervals[i][1]];
        } else if (intervals[i][0] <= outputArr[last][1] && intervals[i][1] <= outputArr[last][1]) {
            continue;
        } else {
            outputArr.push(intervals[i]);
        }
       
    }
    return outputArr;
};
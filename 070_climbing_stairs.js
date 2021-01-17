// 70. Climbing Stairs
// Easy

// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 
// Constraints:
// 1 <= n <= 45

/**
 * @param {number} n
 * @return {number}
 */
let climbStairs = function(n) {
    
    let countingFunc = function(stairsRemaining, savedResults) {
        if (stairsRemaining < 0) return 0;
        if (stairsRemaining === 0) return 1;
        if (savedResults[stairsRemaining]) return savedResults[stairsRemaining];
        
        savedResults[stairsRemaining] = countingFunc(stairsRemaining - 1, savedResults) + countingFunc(stairsRemaining - 2, savedResults)
        return savedResults[stairsRemaining]
    }
    
    return countingFunc(n, {})
};
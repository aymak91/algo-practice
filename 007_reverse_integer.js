// 7. Reverse Integer
// Easy


// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Example 4:
// Input: x = 0
// Output: 0
 
// Constraints:
// -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let neg = x < 0;
    let reversed = 0;
    
    if (neg) x *= -1;
    
    while (x > 0) {
        reversed = (reversed *10) + (x % 10);
        x= Math.floor(x/10);
    }
    
    if (reversed > (2**31 - 1)) return 0;
    return neg ? reversed*-1 : reversed;
};
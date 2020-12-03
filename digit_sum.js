// You are given a two-digit integer n. Return the sum of its digits.

// Example

// For n = 29, the output should be
// addTwoDigits(n) = 11.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// A positive two-digit integer.

// Guaranteed constraints:
// 10 ≤ n ≤ 99.

// [output] integer

// The sum of the first and second digits of the input number.

// [JavaScript] Syntax Tips

function addTwoDigits(n) {
    intArr = n.toString().split("")
    sum = 0
    
    for (let i = 0; i < intArr.length; i++) {
        sum += parseInt(intArr[i])
    }
    
    return sum
}

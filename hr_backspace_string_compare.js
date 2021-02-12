// 1. Backspace String Compare
// Two strings are said to be the same if they are of the same length and have the same character at each index. Backspacing in a string removes the previous character in the string.

 

// Given two strings containing lowercase English letters and the character '#' which represents a backspace key, determine if the two final strings are equal. Return 1 if they are equal or 0 if they are not. Note that backspacing an empty string results in an empty string.

 

// Example

// s1 = 'axx#bb#c' 

// s2 = 'axbd#c#c'

 

// In the first string, one 'x' and one 'b' are backspaced over. The first string becomes axbc. The second string also becomes axbc. The answer is 1.

 
// Function Description

// Complete the function compareStrings in the editor below.

 

// compareStrings has the following parameter(s):

//     string s1: the first string

//     string s2: the second string

 

// Returns

//     int: either 0 or 1

 

 

// Constraints

// 1 ≤  length of s1 ≤ 2*105
// 1 ≤  length of s2 ≤ 2*105
// Both s1 and s2 contain lowercase English letters and/or the character '#' only.

function compareStrings(s1, s2) {
    // Write your code here
    
    let stack1 = [];
    let stack2 = [];
    
    for (let i=0; i<s1.length; i++) {
        if (s1[i] === '#') {
            stack1.pop();
        } else {
            stack1.push(s1[i]);
        }
    }
    for (let i=0; i<s2.length; i++) {
        if (s2[i] === '#') {
            stack2.pop();
        } else {
            stack2.push(s2[i]);
        }
    }
    if (stack1.join('') === stack2.join('')) return 1;
    return 0;
}
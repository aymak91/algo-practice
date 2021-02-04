// 28. Implement strStr()
// Easy

// Implement strStr().
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:
// What should we return when needle is an empty string? This is a great question to ask during an interview.
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Example 1:
// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2:
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// Example 3:
// Input: haystack = "", needle = ""
// Output: 0

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    if (needle.length === 0) return 0;
    if (needle.length > haystack.length) return -1;
    
    for (let i=0; i<=haystack.length-needle.length; i++) {
        
        let j;
        for (j=0; j<needle.length; j++) {
            if (haystack[i+j] !== needle[j]) break;
            
        }
        if (j === needle.length) return i;
    }
    
    return -1;
};
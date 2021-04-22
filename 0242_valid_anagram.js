// 242. Valid Anagram
// Easy

// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isAnagram = function(s, t) {
    
    if (s.length !== t.length) return false;
    
    let sCount = {};
    let tCount = {}
    
    for (let i = 0; i < s.length; i++) {
        if (sCount[s[i]] === undefined) {
            sCount[s[i]] = 1;
        } else {
            sCount[s[i]]++    
        }
        
        if (tCount[t[i]] === undefined) {
            tCount[t[i]] = 1;
        } else {
            tCount[t[i]]++    
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        if (sCount[s[i]] !== tCount[s[i]]) return false;
    }
    
    return true;
    
};
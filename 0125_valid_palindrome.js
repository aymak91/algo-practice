// 125. Valid Palindrome
// Easy

// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:
// Input: "A man, a plan, a canal: Panama"
// Output: true

// Example 2:
// Input: "race a car"
// Output: false
 
// Constraints:
// s consists only of printable ASCII characters.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let dictionary = "abcdefghijklmnopqrstuvwxyz1234567890".split("");
    let letters = "";
    let lettersRev = "";
    
    for (let i = 0; i < s.length; i++) {
        if (dictionary.includes(s[i].toLowerCase())) {
            letters += s[i].toLowerCase();
        }
    }
    
    for (let i = s.length - 1; i >= 0; i--) {
        if (dictionary.includes(s[i].toLowerCase())) {
            lettersRev += s[i].toLowerCase();
        }
    }
    
    if (letters === lettersRev) return true;
    return false;
    
};
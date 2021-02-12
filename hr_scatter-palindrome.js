// 1. Scatter-Palindrome
// A palindrome is a string which reads the same forward and backwards, for example, tacocat and mom. A string is a scatter-palindrome if its letters can be rearranged to form a palindrome. Given an array consisting of n strings, for each string, determine how many of its substrings are scatter-palindromes. A substring is a contiguous range of characters within the string.

 

// Example

// strToEvaluate = ['aabb']

 

// The scatter-palindromes are a, aa, aab, aabb, a, abb, b, bb, b. There are 9 substrings that are scatter-palindromes.

 

// Function Description

// Complete the scatterPalindrome function in the editor below.

 

// scatterPalindrome has one parameter:

//     string strToEvaluate[n]: the n strings to be evaluated

// Returns

//     int[n]: each element i represents the number of substrings of strToEvaluate[i] which are scatter-palindromes.

 

// Constraints

// 1 ≤ n ≤ 100
// 1 ≤ size of strToEvaluate[i] ≤ 1000
// all characters of strToEvaluate[i] ∈ ascii[a-z]

function scatterPalindrome(strToEvaluate) {
    // Write your code here
    
    let substrings = [];
    
    for (let i=0; i<strToEvaluate[0].length; i++) {
        for (let j=i+1; j<strToEvaluate[0].length+1; j++) {
            let str = strToEvaluate[0].split('').join('');
            substrings.push(str.slice(i,j));
        }
    }
    
    let scatterdromes = 0;
    
    for (let i=0; i<substrings.length; i++) {
        let charCount = {};
        // console.log(substrings[0].split.);
        for (let j=0; j<substrings[i].split('').length; j++) {
            let subArr = substrings[i].split('');
            if (!charCount[subArr[j]]) {
                charCount[subArr[j]] = 1;
            } else {
                charCount[subArr[j]]++;
            }
        }
        
        let evens = Object.values(charCount).filter(x => x % 2 === 0).length;
        let odds = Object.values(charCount).filter(x => x % 2 > 0).length;
        
        if (substrings[i].split('').length % 2 === 0) {
            if (odds === 0) {
                scatterdromes++;
            } 
        } else {
            if (odds === 1) {
                scatterdromes++;
            } 
        }
        
    }
    return scatterdromes;
}
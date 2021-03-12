// 1. Fun with Anagrams
// Two strings are anagrams if they are permutations of each other. In other words, both strings have the same size and the same characters. For example, "aaagmnrs" is an anagram of "anagrams". Given an array of strings, remove each string that is an anagram of an earlier string, then return the remaining array in sorted order.

 

// Example

// str = ['code', 'doce', 'ecod', 'framer', 'frame']

 

// "code" and "doce" are anagrams. Remove "doce" from the array and keep the first occurrence "code" in the array.
// "code" and "ecod" are anagrams. Remove "ecod" from the array and keep the first occurrence "code" in the array.
// "code" and "framer" are not anagrams. Keep both strings in the array.
// "framer" and "frame" are not anagrams due to the extra 'r' in 'framer'. Keep both strings in the array.
// Order the remaining strings in ascending order: [ "code","frame","framer"].
 
// Function Description

// Complete the function funWithAnagrams in the editor below.

 

// funWithAnagrams has the following parameters:

//     string text[n]:  an array of strings

// Returns:

//     string[m]:  an array of the remaining strings in ascending alphabetical order,.

 

// Constraints

//  0 ≤ n ≤ 1000
// 0 ≤ m ≤ n
// 1 ≤ length of text[i] ≤ 1000
// Each string text[i] is made up of characters in the range ascii[a-z].

/*
 * Complete the 'funWithAnagrams' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY text as parameter.
 */

function funWithAnagrams(text) {
    // Write your code here

    let newList = [text[0]];
    
    for (let i=1; i<text.length; i++) {
        let anagram = false;
        for (let j=0; j<i; j++) {
            if (isAnagram(text[i], text[j])) {
                anagram = true;
                console.log('test')
            }
            console.log('test2');
        }
        if (!anagram) {
            newList.push(text[i])
        }
    }
    
    return newList.sort();
}

function isAnagram(word1, word2) {
    
    if (word1.length !== word2.length) return false;
    
    let word1Count = {};
    let word2Count = {};
    
    for (let i=0; i<word1.length; i++) {
        let firstWordChar = word1[i];
        let secondWordChar = word2[i];
        
        if (!word1Count[firstWordChar]) {
            word1Count[firstWordChar] = 1;
        } else {
            word1Count[firstWordChar]++
        }
        
        if (!word2Count[secondWordChar]) {
            word2Count[secondWordChar] = 1;
        } else {
            word2Count[secondWordChar]++
        }
    }
    
    const firstLetters = Object.keys(word1Count).sort();
    const secondLetters = Object.keys(word2Count).sort();
    
    const firstCounts = Object.values(word1Count).sort();
    const secondCounts = Object.values(word2Count).sort();
    
    for (let i=0; i<firstLetters.length; i++) {
        if (firstLetters[i] !== secondLetters[i]) return false;
    }
    for (let i=0; i<firstCounts.length; i++) {
        if (firstCounts[i] !== secondCounts[i]) return false;
    }
    return true
}
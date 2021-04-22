// 3. First Unique Character
// A unique character is one which appears only once in a string. Given a string consisting of lowercase English letters only, return the index of the first occurrence of a unique character in the string using 1-based indexing. If the string does not contain any unique character, return -1.

 

// Example

// s = "statistics" 

 

// The unique characters are [a, c] among which a occurs first. Using 1-based indexing, it is at index 3.

 

// Function Description

// Complete the function getUniqueCharacter in the editor below.

 

// getUniqueCharacter has the following parameter(s):

//     string s:  a string

 

// Returns

//     int: either the 1-based index or -1

 

// Constraints

// 1 ≤ length of s ≤ 105
// The string s consists of lowercase English letters only.


/*
 * Complete the 'getUniqueCharacter' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function getUniqueCharacter(s) {
    // Write your code here

    let charCount = {};
    
    for (let i=0; i<s.length; i++) {
        if (!charCount[s[i]]) {
            charCount[s[i]] = 1;
        } else {
            charCount[s[i]]++
        }
    }
    
    let uniques = s.split('').filter(x => charCount[x] === 1)
    
    if (uniques.length === 0) return -1;
    return s.split('').indexOf(uniques[0])+1;
}

function getUniqueCharacter2(s) {
  // Write your code here

  let charCount = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!charCount[char]) charCount[char] = 0;
    charCount[char]++;
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charCount[char] === 1) return i + 1;
  }

  return -1;
}
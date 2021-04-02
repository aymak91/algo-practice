// 3. Intelligent Substring
// There are two types of characters in a particular language: special and normal. A character is special if its value is 1 and normal if its value is 0. Given string s, return the longest substring of s that contains at most k normal characters. Whether a character is normal is determined by a 26-digit bit string named charValue. Each digit in charValue corresponds to a lowercase letter in the English alphabet.

 

// Example:

// s = 'abcde'

// alphabet = abcdefghijklmnopqrstuvwxyz

// charValue = 10101111111111111111111111

 

// For clarity, the alphabet is aligned with charValue below:

//  alphabet = abcdefghijklmnopqrstuvwxyz
// charValue = 10101111111111111111111111
// The only normal characters in the language (according to charValue) are b and d. The string s contains both of these characters. For k = 2, the longest substring of s that contains at most k = 2 normal characters is 5 characters long, abcde, so the return value is 5. If k = 1 instead, then the possible substrings are ['b', 'd', 'ab', 'bc', 'cd', 'de', 'abc', 'cde']. The longest substrings are 3 characters long, which would mean a return value of 3.

 

// Function Description 

// Complete the function getSpecialSubstring in the editor below.

 

// getSpecialSubstring has the following parameter(s):

//     string s:  the input string

//     int k:  the maximum number of normal characters allowed in a substring

//     string charValue:  a string representing special or normal for each letter of the alphabet, ascii[a-z]

// Return:

//     int: an integer that denotes the length of the longest substring of s with at most k normal characters

 

// Constraints

// 1 ≤ length of s ≤ 105
// 1 ≤ length of k ≤ the length of s
// The length of charValue = 26
// All values in charValue will be either 0 or 1

/*
 * Complete the 'getSpecialSubstring' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 *  3. STRING charValue
 */

function getSpecialSubstring(s, k, charValue) {
  // Write your code here

  let substrings = [];

  for (let i = 0; i < s.length - 1; i++) {
    for (let j = i; j < s.length; j++) {
      let substring = s.slice(i, j + 1);

      if (!substrings.includes(substring)) {
        substrings.push(substring);
      }
    }
  }

  console.log(substrings);
  let normalCharCount = {};
  for (let i = 0; i < substrings.length; i++) {
    let count = 0;
    const word = substrings[i];
    for (let j = 0; j < word.length; j++) {
      console.log(word[j], charValue[word.charCodeAt(j) - 97]);
      if (charValue[word.charCodeAt(j) - 97] === "0") {
        count++;
      }
    }
    normalCharCount[word] = count;
  }
  console.log(normalCharCount);

  const cappedNormalCharCount = Object.keys(normalCharCount).filter(
    (key) => normalCharCount[key] <= k
  );

  console.log(cappedNormalCharCount);

  let lengths = [];

  for (let i = 0; i < cappedNormalCharCount.length; i++) {
    lengths.push(cappedNormalCharCount[i].length);
  }
  console.log(lengths);
  return Math.max(...lengths);
}

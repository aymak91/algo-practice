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
let isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let sCount = {};
  let tCount = {};

  for (let i = 0; i < s.length; i++) {
    if (!sCount[s[i]]) sCount[s[i]] = 0;
    sCount[s[i]]++;

    if (!tCount[t[i]]) tCount[t[i]] = 0;
    tCount[t[i]]++;
  }

  for (let i = 0; i < s.length; i++) {
    if (sCount[s[i]] !== tCount[s[i]]) return false;
  }

  return true;
};
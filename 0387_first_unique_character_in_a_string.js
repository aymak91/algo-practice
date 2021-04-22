// 387. First Unique Character in a String
// Easy

// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:
// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.

// Note: You may assume the string contains only lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
let firstUniqChar = function (s) {
  let frequencies = {};
  let res = -1;

  for (let char of s) {
    if (!frequencies[char]) frequencies[char] = 0;
    frequencies[char]++;
  }

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (frequencies[char] === 1) return i;
  }

  return res;
};
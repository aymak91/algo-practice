// 1. Mix, Match, and Mirror
// Given a string of only lowercase alphabetical characters, determine whether there is some arrangement of those characters that creates a word that is the same forwards and backwards:

 

// We can consider any rearrangement of the characters. For example, valid arrangements of abc are bca, acb, bac, cab, cba. 

 

// A mirrored word is any word that reads the same forwards, and backward. For example, mom, racecar, abba.

 

// Your objective is to determine if a given set of characters can be rearranged to read the same forwards and backward. 

 

// Function Description

// Complete the function mixMatchMirror in the editor below. The function returns a boolean describing whether the input word can be rearranged into a mirrored word.

 

// mixMatchMirror has the following parameter(s):

//     word:  a string of lowercase characters

 

// Constraints

// The input string will always consist of lowercase characters
// 0 ≤ length of the input string ≤ 1000
// Time Complexity: O(N)
// Space Complexity: O(N)

function AnagramPalindrome(word) {
  console.log(word);

  let letterCount = {};

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (!letterCount[letter]) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter]++;
    }
  }

  const values = Object.values(letterCount);
  console.log(letterCount);
  console.log(values);

  if (word.length % 2 === 0) {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 !== 0) return false;
    }
    return true;
  } else {
    let oddFound = false;
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0 && !oddFound) oddFound = true;
      if (values[i] % 2 === 0 && oddFound) return false;
    }
    return true;
  }
}

// 3. Power Set
// The Power Set of a string, consists of all unique combinations of substrings that can be generated from that original string.

 

// Power Set on Wikipedia

 

// Given a string of characters as your input, write a method that returns the power set of that string, sorted in lexicographical order.

 

// The output should be given as a list of strings.

 

// Constraints

// The length of the string will be between [0, 50]
// Assume all characters in the string will be unique
// Characters can be uppercase, lowercase or numbers

function PowerSet(inputStr) {
  let powerSet = [];

  for (let i = 0; i < inputStr.length; i++) {
    for (let j = i; j < inputStr.length; j++) {
      powerSet.push(inputStr.slice(i, j + 1));
    }
  }
  console.log(powerSet);
  return powerSet;
}

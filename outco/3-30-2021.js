// 1. Minimum Steps To One
// Given an integer as an input, num, return the fewest operations, or steps, needed to arrive at 1, when you can only perform 3 operations:

 

// Divide by 3, if num is divisible by 3
// Divide by 2, if num is divisible by 2
// Subtract 1
 
// For example: given an input of 5, there are many paths to arrive at 1. You can subtract 1 five times to arrive at 1. But that isn't the shortest path. The largest step you can take first is to subtract 1, which gets you to 4. Then you can divide by 2, which gets you to 2. Finally, you subtract 1, which gets you to 1. So in total, we performed 3 operations: 5 => 4 => 2 => 1

 

// Your goal is to return the minimum number of operations from the input integer to 1.

 

// If num is 1, then return 0, since you don't need to perform any operations to arrive at 1.

 

// Note: There are some approaches that will pass some test cases but not all. The correct approach should pass all the test cases.

 
// Function Description

// Complete the function minStepsToOne in the editor below. The function must return an integer representing the fewest operations needed to arrive at 1 from the input.

 

// minStepsToOne has the following parameter:

//     num: a positive integer

 

// Constraints

// 1 ≤ num ≤ 10,000,000

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'minimumStepsToOne' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER num as parameter.
 */

function minimumStepsToOne(num) {

    let countOne = 0;
    let countTwo = 0;
    
    let temp = num;
    while (temp !== 1){
        if (temp % 3 === 0) {
            temp = temp/3;
            countOne++;
            continue;
        }
        if (temp % 2 === 0) {
            temp = temp/2;
            countOne++;
            continue;
        }
        if (temp === 1) break;

        temp--;
        countOne++
    }
    
    temp = num;
    while (temp !== 1){
        if (temp % 2 === 0) {
            temp = temp/2;
            countTwo++;
            // console.log(countTwo);
            continue;
        }
        if (temp % 3 === 0) {
            temp = temp/3;
            countTwo++;
            // console.log(countTwo);
            continue;
        }
        if (temp === 1) break;
        temp--;
        countTwo++
        // console.log(countTwo);
    }
    
    return Math.min(countOne, countTwo);
}

function minSteps(n) {

    let cache = {};

    function recurse(curr) {
        // Base case
        if (curr === 1) return 0;
        
        // Check cache
        if (curr in cache) return cache[curr];

        // Recursive relations
        // sub1
        let steps = recurse(curr-1);

        // div2
        if (curr % 2 === 0) {
            let divTwo = recurse(curr/2);
            steps = Math.min(steps, divTwo);
        }

        // div3
        if (curr % 3 === 0) {
          let divThree = recurse(curr / 3);
          steps = Math.min(steps, divThree);
        }

        // return min # of steps to 1 from 'curr'
        let result = steps+1;
        cache[curr] = result;
        return result;
    }

    let res = recurse(n);
    return res;
}

// O(n) space; worst case when you subtract all the way down
// O(3^n) time;

function minStepsToOneTab(n) {
  // init tab
  let tab = new Array(n + 1);

  // apply base case to tab
  tab[1] = 0;

  // loop table filling in solns
  for (let curr = 2; curr <= n; curr++) {
    // sub1
    let steps = tab[curr - 1];

    // divby2
    if (curr % 2 === 0) {
      let divby2 = tab[curr / 2];
      steps = Math.min(steps, divby2);
    }

    // divby3
    if (curr % 3 === 0) {
      let divby3 = tab[curr / 3];
      steps = Math.min(steps, divby3);
    }

    // return min # steps to 1 from `curr`
    let result = 1 + steps;
    // Store result in cache
    tab[curr] = result;
  }

  return tab[n];
}


// test case with 11 doesnt work
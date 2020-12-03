// 1. Find the Sequence Sum
// Given three integers, i, j, and k, a sequence sum to be the value of i + (i + 1) + (i + 2) + (i + 3) + … + j + (j − 1) + (j − 2) + (j − 3) + … + k 
// (increment from i until it equals j, then decrement from j until it equals k). Given values i, j, and k, calculate the sequence sum as described.

 

// Example
// i = 5
// j = 9
// k = 6

// Sum all the values from i to j and back to k: 5 + 6 + 7 + 8 + 9 + 8 + 7 + 6 = 56.

// Function Description 

// Complete the function getSequenceSum in the editor below.

//  getSequenceSum has the following parameter(s):

//     int i, int j, int k:  three integers

 

// Return
//     long: the value of the sequence sum

// Constraints
// -108 ≤ i, j, k ≤ 108
// i, k ≤ j

// Complete the getSequenceSum function below.
function getSequenceSum(i, j, k) {

    let sum = 0;
    
    while (i < j) {
        sum += i;
        i++
    }
    
    while (i >= k) {
        sum += i;
        i--;
    }
    
    return sum;

}
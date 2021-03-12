// 4. Counting Pairs
// Given an integer k and a list of integers, count the number of distinct valid pairs of integers (a, b) in the list for which a + k = b. Two pairs of integers (a, b) and (c, d) are considered distinct if at least one element of (a, b) does not also belong to (c, d).

 

// Example

// n = 4

// numbers = [1, 1, 1, 2]

// k = 1

 

// This array has two different valid pairs: (1, 1) and (1, 2). For k = 1, there is only 1 valid pair which satisfies a + k = b: the pair (a, b) = (1, 2).

 

// Function Description 

// Complete the function countPairs in the editor below.

 

// countPairs has the following parameter(s):

//     int numbers[n]:  array of integers
//     int k: target difference

// Returns

//     int: number of valid (a, b) pairs in the numbers array that have a difference of k

    

// Constraints

// 2 ≤ n ≤ 2 × 105
// 0 ≤ numbers[i] ≤ 109, where 0 ≤ i < n
// 0 ≤ k ≤ 109

function countPairs(numbers, k) {
    // Write your code here

    let count = 0;
    let pairs = [];
        
    for (let i=0; i<numbers.length-1; i++) {
        for (let j=i+1; j<numbers.length; j++) {
            let a = numbers[i];
            let b = numbers[j];
            
            if ((a + k === b) && (!pairs.includes(`${a}-${b}`))) {
                pairs.push(`${a}-${b}`);
                pairs.push(`${b}-${a}`);
                count++;
            }
        }
    }

    return count;
}
// 2. Degree of an Array
// Given an array of integers, its degree is defined as the number of occurrences of the element that occurs most frequently in the array. Given a list of integers, determine two properties:

// the degree of the array
// the length of the shortest sub-array that shares that degree
 

// Example

// arr = [1, 2, 1, 3, 2]

 

// The array has a degree of 2 based on the occurrences of values 1 and 2. The subarray of degree 2 based on the 1's is [1, 2, 1] and based on 2's is [2, 1, 3, 2]. Their lengths are 3 and 4, so the shortest is length 3. Return the shortest length.

 

// Function Description 

// Complete the function degreeOfArray in the editor below. The function must return an integer denoting the minimum size of the subarray such that the degree of the subarray is equal to the degree of the array.

 

// degreeOfArray has the following parameter(s):

//     int arr[n]:  an array of integers indexed from 0 to n-1

 

// Return

//     int:  the minimum size of the subarrays that have a degree equal to the degree of the array

 

// Constraints

// 1 ≤ n ≤ 105
// 1 ≤ arr[i]≤ 106

/*
 * Complete the 'degreeOfArray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function degreeOfArray(arr) {
    // Write your code here

    let occurances = {};
    
    for (let i=0; i<arr.length; i++) {
        let num = arr[i];
        if (!occurances[num]) {
            occurances[num] = 1;
        } else {
            occurances[num]++;
        }
    }
    
    console.log(occurances)
    
    const values = Object.values(occurances)
    const maxVal = Math.max(...values);
    const mostFreqNums = Object.keys(occurances).filter(num => occurances[num] === maxVal);
    
    let lengths = [];

    for (let i=0; i<mostFreqNums.length; i++) {
        let firstIdx;
        let secondIdx;
        
        for (let j=0; j<arr.length; j++) {
            if (arr[j] == mostFreqNums[i]) {
                firstIdx = j;
                break;
            }
        }
        for (let j=arr.length-1; j>0; j--) {
            if (arr[j] == mostFreqNums[i]) {
                secondIdx = j;
                break;
            }
        }

        const length = secondIdx - firstIdx + 1;
        lengths.push(length);
    }
    
    if (lengths.length !== arr.length) return Math.min(...lengths);
    return 1;
}
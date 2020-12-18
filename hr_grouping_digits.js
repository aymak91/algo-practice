// 1. Grouping Digits
// Given an array of binary digits, 0 and 1, sort the array so that all zeros are at one end and 
// all ones are at the other. Which end does not matter. To sort the array, swap any two adjacent 
// elements. Determine the minimum number of swaps to sort the array.

// Example
// arr=[0,1,0,1]

// With 1 move, switching elements 1 and 2, yields [0,0,1,1], a sorted array.

// Function Description
// Complete the function minMoves in the editor below.

// minMoves has the following parameter(s):
//     int arr[n]:  an array of binary digits

// Returns
//     int: the minimum number of moves necessary


// still wrong?
function minMoves(arr) {
    // Write your code here
    let mid = Math.floor(arr.length / 2);
    let rightArr = arr.splice(mid);
    let ones = arr.reduce((a, b) => a + b, 0);
    
    // if (ones > rightArr.length) {
    let rightZeros = 0;
    let rightOnes = 0;
    for (let i = 0; i < rightArr.length; i++) {
        if (rightArr[i] === 0) {
            rightZeros++
        } else {
            rightOnes++
        }
    }
    
    if (rightOnes < rightZeros) {
        return rightOnes;
    } else {
        return rightZeros;
    }
}
// 2. Finding Balance
// Given an array of integers, numbers, write a method that returns the fulcrum of this array.

 

// We define the fulcrum as the index where the sum of the numbers to the left is equal to the sum of the numbers to the right.

 

// Consider the sum of all the integers to the left of the first element in the array and all the integers to the right of the last element in the array to add up to 0.

 

// If no such index exists, we should return -1. If there are multiple fulcrum indexes, you should return the left-most fulcrum index.

 
// Function Description

// Complete the function findFulcrum in the editor below. The function must return an integer corresponding to the first index where all the numbers to the left and to the right add up to the same amount.

 

// findFulcrum has the following parameter:

//     numbers:  an array of integers

 

// Constraints

// The length of numbers is between 0 and 1000
// Each element of numbers will be in the range [-1000, 1000]
// If there are multiple pivot indices, return the left-most index

function findFulcrum(numbers) {
  let leftSum = [];
  let rightSum = [];

  let runningLeftSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    runningLeftSum += numbers[i];
    leftSum.push(runningLeftSum);
  }
  let runningRightSum = 0;
  for (let i = numbers.length - 1; i >= 0; i--) {
    runningRightSum += numbers[i];
    rightSum.unshift(runningRightSum);
  }
  console.log("rightSum", rightSum);
  console.log("leftSum", leftSum);
  for (let i = 0; i < numbers.length; i++) {
    if (leftSum[i] === rightSum[i]) return i;
  }
  return -1;
}

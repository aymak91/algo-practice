// 238. Product of Array Except Self
// Medium

// Given an array nums of n integers where n > 1,  return an array output such that output[i] 
// is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix 
// of the array (including the whole array) fits in a 32 bit integer.



// O(n^2)
let productExceptSelf = function(numbers) {
	let new_arr = [];
	for (let i = 0; i < numbers.length; i++) {
		let product = 1;
		for (let j = 0; j < numbers.length; j++) {
			if (i != j) {
				product = product * numbers[j]
			}
		}
		new_arr.push(product)
	}
	return new_arr;
}

//  O(n) with O(1) space
let productExceptSelf = function(numbers) {
	let length = numbers.length;
    // let leftProds = new Array(length);
    // let rightProds = new Array(length);
    let finalProds = new Array(length).fill(null);
    
    // leftProds[0] = 1;
    // rightProds[length - 1] = 1;
    finalProds[0] = 1;
    
    for (let i = 1; i < length; i++) {
        finalProds[i] = numbers[i-1] * finalProds[i - 1];
    }
    
    let right = 1;
    
    for (let i = length - 1; i >= 0; i--) {
        finalProds[i] = finalProds[i] * right;
        right = right * numbers[i];
    }
    
    return finalProds;    
}

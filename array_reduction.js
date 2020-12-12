// 2. Array Reduction
// There is an array of n integers called num. The array can be reduced by 1 element by performing a move. Each move consists of the following three steps:

// Pick two different elements num[i] and num[j], i ≠ j.
// Remove the two selected elements from the array.
// Add the sum of the two selected elements to the end of the array.
 
// Each move has a cost associated with it: the sum of the two elements removed from the array during the move.  Calculate the minimum total cost of reducing the array to one element.

 

// Example
// num = [4,6,8]
// Remove 4 and 6 in the first move at a cost of 4 + 6 = 10, and the resultant array is num' = [8,10].
// Remove 8 and 10 in the second move at a cost of 8 + 10 = 18, and the resultant array is num'' = [18].
// The total cost of reducing this array to one element using this sequence of moves is 10 + 18 = 28. This is just one set of possible moves. For instance, 
// one could have started with 4 and 8. Then 4 + 8 = 12, num' = [6, 12], 6 + 12 = 18, num'' = [18], cost = 12 + 18 = 30.

function reductionCost(num, cost = 0) {
    // Write your code here
    
    if (num.length === 1) return cost;
    
    let sorted = num.sort();
    let sum = 0;
    
    for (let i = 0; i < 2; i++) {
        sum += sorted.shift()
        if (i === 1) cost += sum;
    }
    
    sorted.push(sum)
    
    console.log(sorted)
    console.log(cost)
    return reductionCost(sorted, cost);
}

let test = [10, 43, 71, 16, 16, 74, 92, 27, 72, 52, 85, 33, 19, 25, 31, 66, 84, 19, 37, 15, 39, 95, 11, 17, 59, 96, 26, 92, 83];
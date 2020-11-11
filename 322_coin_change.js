// 322. Coin Change
// Medium

// You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.

 

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0
// Example 4:

// Input: coins = [1], amount = 1
// Output: 1
// Example 5:

// Input: coins = [1], amount = 2
// Output: 2
 

// Constraints:

// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104

let coinChange = function(coins, amount) {
    

    if (amount === 0) return 0;
    
    let dpMat = [];
    
    // set up the matrix with 0 on col 1 and infinity everywhere else
    for (let row = 0; row <= coins.length; row++) {
        dpMat[row] = []; // creating empty row arrays to put into the matrix
        for (let col = 0; col <= amount; col++) {
            if (col === 0) {
                dpMat[row][col] = 0; // if the amount is 0, then it takes 0 coins to create
            } else {
                dpMat[row][col] = Infinity; // if the amount is != 0, then it will never create it
            }
        }
    }
    
    
    for (let row = 1; row <= coins.length; row++) { // since row=0 is done, start at row=1
        for (let col=1; col <= amount; col++) { // all the first cols are also done
            let denom = coins[row - 1]; // must check each denomination
            if (col - denom >= 0) { // check diff btwn amount and denom; must offset row by 1 since row.length = coins.length + 1
                dpMat[row][col] = Math.min(dpMat[row-1][col], 1 + dpMat[row][col-denom]); // what's smaller? one row up or 1 + row before?
            } else {
                dpMat[row][col] = dpMat[row-1][col]; // cant possibly be less than one row up
            }
        }
    }
    
    if (dpMat[coins.length][amount] === Infinity) { // if bottom right cell is still infinity
        return -1
    } else {
        return dpMat[coins.length][amount]; // bottom right cell
    }
};
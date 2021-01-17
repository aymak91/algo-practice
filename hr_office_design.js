// 2. Office Design
// A company is repainting its office and would like to choose colors that work well together. They are presented with several various-priced color options presented in a specific order so that each color complements the surrounding colors. The company has a limited budget and would like to select the greatest number of consecutive colors that fit within this budget. Given the prices of the colors and the company's budget, what is the maximum number of colors that can be purchased for this repainting project?

 

// Example

// prices = [2, 3, 5, 1, 1, 2, 1]

// money = 7

 

// All subarrays that sum to less than or equal to 7:

// Length 1 subarrays are [2], [3], [5], [1], [1], [2], [1]

// Length 2 - [2, 3], [5, 1], [1, 1], [1, 2], [2, 1]

// Length 3 - [5, 1, 1], [1, 1, 2], [1, 2, 1]

// Length 4 - [1, 1, 2, 1]

 

// The longest of these, or the maximum number of colors that can be purchased, is 4.

 
// Function Description

 

// Complete the function getMaxColors in the editor below.

 

// getMaxColors has the following parameters:

//     int prices[n]:  the prices of the various paint colors

//     int money:  the amount of money the company can spend on paints

// Returns:

//     int: the maximum number of colors the company can purchase

 

// Constraints

// 1 ≤ n ≤ 105

// 1 ≤ prices[i] ≤ 100

// 1 ≤ money ≤ 106

/*
 * Complete the 'getMaxColors' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY prices
 *  2. INTEGER money
 */

function getMaxColors(prices, money) {
    // Write your code here
    
    let maxColors = 0;
    
    for (let i = 0; i < prices.length - maxColors; i++) {
        let priceCopy = [...prices];
        console.log(priceCopy);
        let pricesSubArr = priceCopy.splice(i, maxColors + 1);
        if (pricesSubArr.reduce((x,y) => x + y) <= money) {
            maxColors = pricesSubArr.length;
            i = 0;
            // break;
        }
        // if (i >= prices.length - maxColors) {
        //     break;
        // }
        // console.log(prices);
        console.log(priceCopy);
        console.log(maxColors);
    }
    
    return maxColors;

}

function getMaxColorsBetter(prices, money) {
    let max = 0;
    let bool = true;

    while (bool = true) {
        bool = false;
        for (let i = 0; i < prices.length - max; i++) {
            let subArray = prices.slice(i, i+max+1);
            let sumOfArray = subArray.reduce((a,b) => a+b);
            if (sumOfArray <= money) {
                bool = true;
                max++;
                break;
            }
        }
    }
}

// def getMaxColors(prices, money):
//   maxLength = 0
//   workingCost = 0
//   i = 0
//   j = 0
//   while j < len(prices):
//     if workingCost + prices[j] <= money:
//       maxLength = max(maxLength, j-i+1)
//       workingCost += prices[j]
//       j += 1
//     else:
//       workingCost -= prices[i]
//       i += 1
//       if i > j:
//         workingCost = 0
//         j = i      
//   return maxLength

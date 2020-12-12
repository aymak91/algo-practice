// 3. Counting Closed Paths
// Some numbers are formed with closed paths. The digits 0, 4, 6 and 9 each have 1 closed path, and 8 has 2.  
// None of the other numbers is formed with a closed path. Given a number, determine the total number of closed paths in all of its digits combined.

// Example
// number = 649578
// The digits with closed paths are 6, 4, 9 and 8.  The total number of closed paths is 1 + 1 + 1 + 2 = 5.

function closedPaths(number) {
    // Write your code here
    
    let strNumArr = number.toString().split("");
    let pathSum = 0;
    
    for (let i = 0; i < strNumArr.length; i++) {
        if (strNumArr[i] === "0" || strNumArr[i] === "4" || strNumArr[i] === "6" || strNumArr[i] === "9") {
            pathSum++;
        } else if (strNumArr[i] === "8") {
            pathSum += 2;
        }
    }
    
    return pathSum;
}
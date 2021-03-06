// 326. Power of Three
// Easy

// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3^x.

 
let isPowerOfThree = function(n) {
    if (n < 1) return false;
    
    while (n % 3 === 0) {
        n /= 3;
    }
    
    return n === 1;
};
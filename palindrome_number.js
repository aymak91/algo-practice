// let highestPalindromeNum = function() {

// 	let end = 1000
// 	let highestPally = 0;

// 	for (let i = 100; i < end; i++) {
// 		for (let j = 100; j < end; j++) {
// 			let prod = i * j; // 100 * 100 = 10000
//             const prodString = prod.toString().split(""); // [1, 0, 0, 0, 1]
//             // let prodString2 = prodString;
// 			let revProdString = prod.toString().split("").reverse(); // [1, 0, 0 , 0, 1]
// 			if (prodString === revProdString && prod > highestPally) {
//                 highestPally = prod;
//             }
// 		}
// 	}
// 	return highestPally;
	
// }

function isNumberPalindromic(int) {
   const intCharArr = int.toString().split("")
   const revIntCharArr = int.toString().split("").reverse()
   for (let idx in intCharArr) {
      if (intCharArr[idx] !== revIntCharArr[idx]) return false
   }
   return true
}

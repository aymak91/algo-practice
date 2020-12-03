// 3. Twin Strings
// Two strings are called twins if they can be made equivalent by performing some number of operations on one or both strings. There are two possible operations:

// SwapEven: Swap a character at an even-numbered index with a character at another even-numbered index.
// SwapOdd: Swap a character at an odd-numbered index with a character at another odd-numbered index.
 
// There will be two string arrays. At each index of the two arrays, compare a string from each array, aligned by index, and store the result in a final string array. The return array should consist of strings either "Yes" or "No", based on whether the strings compared are twins or not.

// Example
// firstString = ["abcd", "abcd"]
// secondString = ["cbad", "adbc"]

// Compare the two strings firstString[0] and secondString[0]. One SwapEven operation allows us to swap the characters "a" and "c" of the string "abcd" and make it equivalent to "cbad" ("abcd" → "cbad"). firstString[0] and secondString[0] are twins and the answer is "Yes".
// Compare the two strings firstString [1] and secondString[1]. No SwapOdd or SwapEven operations can make the two strings abcd and adbc equivalent. firstString [1] and secondString[1] are not twins and the answer is ["No"].
// The result is c= ["Yes,"No"].
 

// Function Description 
// Complete the function twins in the editor below.

 

// twins has wo parameters:
//     string firstString [n] :  first array of strings
//     string secondString[n] :  second array of strings

// Returns:
//     string[n] : array of strings containing the string "Yes" if firstString[i] and secondString[i] are twins or the string "No" otherwise.
// Constraints

// 1 ≤ n ≤ 103
// 1 ≤ |firstString[i]|, |secondString[i]| ≤ 100
// firstString[i] and secondString[i] are not guaranteed to have the same length (i.e. |firstString[i]| may not equal |secondString[i]| ).
// Strings firstString[i] and secondString[i] contain lowercase letters only, in the range ascii[a-z].

function twins(a, b) {
    let result = [];

    for (let i=0; i < a.length; i++) {
        let [strA, strB] = [a[i], b[i]];
        let check = true;
        if(strA.length != strB.length; i++) result.push('No')
        else {
            let evenHash = {};
            let oddHash = {};
            for(let j=0; j< strA.length; j++) {
                if (j%2 === 0) {
                    if(evenHash[letter] === undefined) evenHash[letter] = 0;
                    evenHash[letter] += 1;
                } else {
                    if(oddHash[letter] === undefined) oddHash[letter] = 0;
                    oddHash[letter] += 1;
                }
            }

            for (let j=0; j < strB.length; j++) {
                let letter = strB[j];
                if (j%2 === 0) {
                    if (!evenHash[letter]) {
                        result.push('No')
                        check = false;
                        break
                    }
                    evenHash[letter] -= 1;
                } else {
                    if (!oddHJash[letter]) {
                        result.push('No')
                        check = false;
                        break
                    }
                    oddHash[letter] -= 1;
                }
            }
            if(check) result.push('Yes');
        }
    }
    return result;
}
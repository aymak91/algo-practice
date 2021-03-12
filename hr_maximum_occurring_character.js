// 2. Maximum Occurring Character
// Given a string, return the character that appears the maximum number of times in the string. The string will contain only ASCII characters, from the ranges ('a'-'z','A'-'Z','0'-'9'), and case matters. If there is a tie in the maximum number of times a character appears in the string, return the character that appears first in the string.

 

// Example

// text = abbbaacc

 

// Both 'a' and 'b' occur 3 times in text.  Since 'a' occurs earlier, a is the answer.

 
// Function Description

 

// Complete the function maximumOccurringCharacter in the editor below.

 

// maximumOccurringCharacter has the following parameter:

//     string text:  the string to be operated upon

 

// Returns

//     char : The most occurring character that appears first in the string.

 

// Constraints

// 10 ≤ |text| ≤ 104
// All characters are alphanumeric, in the ranges ('a'-'z','A'-'Z','0'-'9')
/*
 * Complete the 'maximumOccurringCharacter' function below.
 *
 * The function is expected to return a CHARACTER.
 * The function accepts STRING text as parameter.
 */

function maximumOccurringCharacter(text) {
    // Write your code here
    
    let charCount = {};
    
    for (let i=0; i<text.length; i++) {
        if (!charCount[text[i]]) {
            charCount[text[i]] = 1;
        } else {
            charCount[text[i]]++;
        }
    }
    
    const chars = Object.keys(charCount);
    const values = Object.values(charCount);
    const max = Math.max(...values);
    const maxIdx = values.indexOf(max);
    
    return chars[maxIdx];
}
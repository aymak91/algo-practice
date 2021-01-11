// 1. Number of characters escaped
// Given a string that consists of lowercase English letters and the characters '#' (ASCII value 35) and '!' (ASCII value 33), determine the number of times a character will be escaped. A character will be escaped if:

// It is a lowercase English letter, and
// There is a '!' character immediately before it, and
// Both the lowercase English letter and the '!' character are between a starting and an ending '#' character
 

// Example
// expression = '#ab!c#de!f'
// The string is escaped once at '!c'. The substring '!f' is not between '#' characters so it is not escaped. Return 1. 

// Function Description
// Complete the numberOfCharactersEscaped function in the editor below.

// numberOfCharactersEscaped has the following parameter(s):
//     expression: a string to evaluate

// Returns
//     int: the number of characters that are escaped

// Constraints

// 1 ≤ length of expression ≤ 105
// The # characters will not be nested
// Every opening # character will have a closing # character

function numberOfCharactersEscaped(expression) {

    let hashStart = false;
    let escaped = 0;
    
    for (let i = 0; i < expression.length - 1; i++) {
        if (expression[i] === '#') {
            hashStart = !hashStart; 
        } else if (expression[i] != '#' && expression[i] != '!' && expression[i - 1] === '!' && hashStart === true) {
            escaped++;
        }
    }
    
    return escaped;

}
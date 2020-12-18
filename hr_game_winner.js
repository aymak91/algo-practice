// 3. Game Winner
// Two players are playing a game where white or black pieces are represented by a string, colors. The 
// game rules are as follows:

// Wendy moves first and then they take alternate turns.
// With each move, Wendy may remove a white piece that has adjacent white pieces on both sides.
// Likewise, with each move, Bob may remove any black piece that has adjacent black pieces on both sides.
// After a piece is removed, the string is reduced in size by one piece. For instance, removing 'Y' from 'XYZ' results in 'XZ'.
// When a player can no longer move, they have lost the game.
 

// Example

// colors = 'wwwbbbbwww'

// Wendy removes the piece w at index 1, colors = 'wwbbbbwww'
// Bob removes the piece b at index 3, colors = 'wwbbbwww'
// Wendy removes the piece w at index 6, colors = 'wwbbbww'
// Bob removes the piece b from index 3, colors = 'wwbbww'
// Wendy has no other move, so Bob wins. Return 'bob'.

// Determine who wins if Wendy and Bob both play with optimum skill. Return the string 'wendy' or 'bob'.

// Function Description 
// Complete the function gameWinner in the editor below.

// gameWinner has the following parameter(s):
//     string colors: each colors[i] represents the color located at the index of i within the string

// Returns;
//     string: the winner of the game, either 'wendy' or 'bob'.

function gameWinner(colors) {
    // Write your code here
    
    let colorsArray = colors.split("");
    let wendyTurn = true;
    
    for (let i = 1; i < colorsArray.length - 1; i++) {        
        if (colorsArray[i-1] === 'w' && colorsArray[i+1] === 'w' && colorsArray[i] === 'w' && wendyTurn) {
            colorsArray.splice(i, 1);
            i = 0;
            wendyTurn = !wendyTurn;
        } else if (colorsArray[i-1] === 'b' && colorsArray[i+1] === 'b' && colorsArray[i] === 'b' && !wendyTurn) {
            colorsArray.splice(i, 1);
            i = 0;
            wendyTurn = !wendyTurn;
        }
    }
    
    if (!wendyTurn) {
        return 'wendy';
    } else {
        return 'bob';
    }

}
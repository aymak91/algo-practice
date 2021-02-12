// 3. Reach the End in Time
// A 2-D grid consisting of some blocked (represented as '#') and some unblocked (represented as '.') cells is given. The starting position of a pointer is in the top-left corner of the grid. It is guaranteed that the starting position is in an unblocked cell. It is also guaranteed that the bottom-right cell is unblocked. Each cell of the grid is connected with its right, left, top, and bottom cells (if those cells exist). It takes 1 second for a pointer to move from a cell to its adjacent cell. If the pointer can reach the bottom-right corner of the grid within k seconds, return the string 'Yes'. Otherwise, return the string 'No'. 

 

// Example

// rows = 3

// grid = ['..##', '#.##', '#...']

// maxTime = 5

// ..##
// #.##
// #...
// It will take the pointer 5 seconds to reach the bottom right corner. As long as k ≥ 5, return 'Yes'.

 

// Function Description

// Complete the function reachTheEnd in the editor below.

 

// reachTheEnd has the following parameter(s):

//     string grid[r]: the rows of the grid

//     int maxTime: the maximum time to complete the traversal

 

// Returns:

//     string: the final string; either 'Yes' or 'No'

 

// Constraints

// 1 ≤ rows ≤ 500
// 0 ≤ maxTime ≤ 106

/*
 * Complete the 'reachTheEnd' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING_ARRAY grid
 *  2. INTEGER maxTime
 */

function reachTheEnd(grid, maxTime) {
    // Write your code here
    let movements = 0;
    
    let shortestTime = shortestPath(grid);
    
    if (shortestTime <= maxTime) return 'Yes';
    return 'No';
}

let shortestPath = function(grid) {
    if (grid[0][0] === 1) return -1;
    const visited = new Set();
    
    const length = grid.length;
    let steps = 1;
    const queue = [[0,0]];
    const isAvailable = ([i,j]) => {
        const key = `${j}_${j}`;
        if (i<0 || i >= length || j >= length || grid[i][j] === 1 || visited.has(key)) {
            return false
        }
        return true;
    }
    
    while (queue.length > 0) {
        queue.push(null);
        let head;
        while (head = queue.shift()) {
            if (head[0] === length - 1 && head[1] === length-1) return steps;
            
            const key = `${head[0]}_${head[1]}`;
            if (visited.has(key)) {
                continue
            }
            visited.add(key);
            for (let i=-1;i<=1;i++) {
                for (let j=-1;j<=1;j++) {
                    if (i===0 && j===0) continue;
                    const next = [head[0]+1, head[1]+j];
                    
                    if (isAvailable(next)) {
                        queue.push(next);
                    }
                }
            }
        }
        steps+=1;
    }
    return Infinity;
}


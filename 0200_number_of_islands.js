// 200. Number of Islands
// Medium


// Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3
 
// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

/**
 * @param {character[][]} grid
 * @return {number}
 */

let numIslands = function(grid) {
    if (grid === null || grid.length === 0) return 0;
    
    let islands = 0;
    
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[0].length; j++) {
            if (grid[i][j] === '1') {
                islands += dfsFillCount(grid, i, j);
            } 
        }
    }
    
    return islands;
    
};

let dfsFillCount = function(board, i, j) {
    
    if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] !== '1') {
        return 0;
    }
    
    board[i][j] = '0';
    
    dfsFillCount(board, i+1, j);
    dfsFillCount(board, i-1, j);
    dfsFillCount(board, i, j+1);
    dfsFillCount(board, i, j-1);
    
    return 1;
}

// was talking about time complexity
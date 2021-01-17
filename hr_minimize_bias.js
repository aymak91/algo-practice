'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'minimizeBias' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ratings as parameter.
 */

function minimizeBias(ratings) {
    // Write your code here
    
    let totalBias = 0;
    
    for (let i = 0; i < (ratings.length - 1)/2; i++) {
        let currentBias = Infinity;
        let biasCoord = [0, 0];
        for (let j = 1; j < ratings.length; j++) {
            if (Math.abs(ratings[0] - ratings[j]) < currentBias ) {
                currentBias = Math.abs(ratings[0] - ratings[j]);
                biasCoord = [0, j];
            }
        }
        
        totalBias += currentBias;
        ratings.splice(biasCoord[1]);
        ratings.splice(biasCoord[0]);
        console.log(ratings);
    }
    
    // 6
    // 4
    // 0-5
    
    
    return totalBias;
    
    
}
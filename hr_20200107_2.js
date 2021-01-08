// 2. Signal Filter
// Sometimes it is necessary to filter a signal by frequency, e.g. to reduce noise outside of the expected frequency range.  Filters can be stacked, allowing only the frequencies within the range allowed by all filters to get through.  For example, three filters with ranges of (10, 17), (13, 15) and (13, 17) will only allow signals between 13 and 15 through.  The only range that all filters overlap is (13, 15).  Given n signals' frequencies and a series of m filters that let through frequencies in the range x to y, inclusive, determine the number of signals that will get through the filters.
// For example, given n = 5 signals with frequencies = [8, 15, 14, 16, 21] and m = 3 filtersRanges = [[10, 17], [13, 15], [13, 17]], the 2 frequencies that will pass through all filters are 15 and 14.  Return 2.

// Function Description
// Complete the countSignals function in the editor below. The function must return an integer that denotes the number of signals that pass through all filters.
// countSignals has the following parameter(s):
//     frequencies: an integer array, the frequencies of the signals sent through the filters
//     filterRanges: a 2D integer array, the lower and upper frequency bounds for each filters


// Constraints
// 1 ≤ n ≤ 105
// 1 ≤ frequencies[i] ≤ 109
// 1 ≤ m ≤ 105
// 1 ≤ filterRanges[j][k] ≤ 109

function countSignals(frequencies, filterRanges) {
    // Write your code here
    
    let passed = 0;

    for (let i = 0; i < frequencies.length - 1; i++) {
        let inBound = 0;
        
        for (let j = 0; j < filterRanges.length; j++) {
            if (frequencies[i] >= filterRanges[j][0] && frequencies[i] <= filterRanges[j][1]) {
                inBound++
            }
            if (inBound === filterRanges.length) {
                passed++
                // console.log(inBound);
            }
        }
    }
    
    return passed;
}

let test = [5, 20, 5, 6, 7, 12, 3, 2];
let ranges = [[10, 20], [5, 15], [5, 30]]
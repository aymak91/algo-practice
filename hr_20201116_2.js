// 2. Bus Stand
// There are n people standing in a queue for bus numbered from left to right, 1 to n. Each person has a patience limit, p and will only wait 
// until the time p expires. If the bus reaches after time p, the person will leave the queue and miss the bus. Initially the bus is empty and 
// has a fixed capacity, k. Given a number of queries q, where each query is a time of bus arrival, q[i], for each query, print the index/number (1-indexed) 
// of the kth person who catches the bus. If all passengers remaining in the queue can board the bus, return 0 because there will be no kth person.

// For example, given a bus size k = 2, patience limits of p = [1, 2, 3, 4], and queries at times q = [1, 3, 4], there are three scenarios all dealing with the same initial queue. Where the bus arrives at q[0] = 1, all passengers are still queued but only the first two will fit on the bus. The last passenger who will fit is number 2. If the bus arrives at q[1] = 3, passengers 1 and 2 have left the queue, the first two remaining (3 and 4) get on the bus, filling it to capacity. When q[2] = 4, passengers 1, 2 and 3 have left, so passenger 4 can get on. Since the bus is not filled, there is no kth passenger .  The returned array of answers is [2, 4, 0].
 
// Function Description
// Complete the function kthPerson in the editor below. The function must return an array of integers where each integer i represents the results of a query, q[i].

// kthPerson has the following parameter(s):
//     k: an integer that represents the size of the bus
//     p[p[0],...p[n-1]]:  an array of integers that represents the patience of n people from left to right
//     q[q[0],...q[j-1]]:  an array of integers that represents the queries containing times q[i] of the arrival of the bus

// Constraints

// 0 < n, k, q[i], p[i], q[j]  ≤ 100000

function kthPerson(k, p, q) {
    let result = [];
    for (let i=0; i < q.length; i++) {
        let filled = 0;
        let j = 0;
        while (filled < k && j < p.length) {
            if (p[j] >= q[i]) filled++
            j++
        }
        if(filled===k) {
            result.push(j)
        } else {
            result.push(0)
        }
    }
}
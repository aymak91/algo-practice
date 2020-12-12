function reductionCost(num, cost = 0) {
    // Write your code here
    
    if (num.length === 1) return cost;
    
    let sorted = num.sort();
    let sum = 0;
    
    for (let i = 0; i < 2; i++) {
        sum += sorted.shift()
        if (i === 1) cost += sum;
    }
    
    sorted.push(sum)
    
    console.log(sorted)
    console.log(cost)
    return reductionCost(sorted, cost);
}

let test = [10, 43, 71, 16, 16, 74, 92, 27, 72, 52, 85, 33, 19, 25, 31, 66, 84, 19, 37, 15, 39, 95, 11, 17, 59, 96, 26, 92, 83];
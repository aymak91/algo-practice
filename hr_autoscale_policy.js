// 3. Autoscale Policy
// A scaling computing system checks its average utilization every second while it monitors. It implements an autoscale policy to increase or reduce instances depending on the current load as described below. Once an action of increasing or reducing the number of instances is performed, the system will stop monitoring for 10 seconds. During that time, the number of instances does not change.
 

// If the average utilization < 25%, then an action is instantiated to reduce the number of instances by half if the number of instances is greater than 1. Take the ceiling if the number is not an integer. If the number of instances is 1, take no action. 
// If 25% ≤ average utilization ≤ 60%, take no action.
// If the average utilization > 60%, then an action is instantiated to double the number of instances if the doubled value does not exceed 2 * 108. If the number of instances exceeds this limit upon doubling, take no action.
 

// Given an array of integers that represent the average utilization at each second, determine the number of instances at the end of the time frame.

 

// Example

// instances = 2

// averageUtil = [25, 23, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 76, 80]

 

// At second 1, the average utilization averageUtil[0] = 25 ≤ 25, so take no action.
// At second 2, the average utilization averageUtil[1] = 23 < 25, so reduce the number of instances by half to get 2 / 2 = 1.
// Since an action was taken, the system will stop checking for 10 seconds, from averageUtil[2] through averageUtil[11].
// At averageUtil[12] = 76, 76 > 60, so the number of instances is doubled from 1 to 2.
 

// There are no more readings to consider and 2 is the final answer.

 

// Function Description

// Complete the function finalInstances in the editor below.

 

// finalInstances has the following parameter(s):

//     int instances: the original number of instances running

//     int averageUtil[n]: the average utilization at each second of the time frame

 

// Returns:

//     int: the final number of instances running

 

// Constraints

// 1 ≤ instances < 105

// 1 ≤ n < 105

// 0 ≤ averageUtil[i] ≤ 100

/*
 * Complete the 'finalInstances' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER instances
 *  2. INTEGER_ARRAY averageUtil
 */

function finalInstances(instances, averageUtil) {
    // Write your code here

    // let cooldown = 0;
    const instanceLimit = 2 * Math.pow(10, 8);
    
    for (let i=0; i<averageUtil.length; i++) {
                
        if (averageUtil[i] < 25) {
            let newInstances = Math.ceil(instances/2);
            
            if (newInstances !== instances) {
                instances = newInstances;
                i += 10;
            }
        } else if (averageUtil[i] > 60) {
            if (instances * 2 <= instanceLimit) {
                instances *= 2;
                i += 10;
            }
        }
    }
    return instances;
}
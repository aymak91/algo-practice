// 3. Racing Car
// Chris is playing the "Racing Car" arcade game. In this game, Chris is controlling a car which can move sideways but the car keeps moving forward at all times. Chris can move the car into any lane at any moment. There are some obstacles on the track and no two obstacles share the same position on the track. There are 3 lanes in the game and Chris starts the game from the middle lane. Determine the minimum sideways movement needed in order to complete the game. Note that a movement at one moment, be it from lane 1 to lane 2 or from lane 1 to lane 3, is counted as a single movement.
// For example, for n = 3 obstacles, with the lane of obstacles as given by obstacleLanes = [2, 1, 2], Chris can move the car in the first second to lane 3 and the total number of motions required will be 1.

// Function Description
// Complete the function minimumMovement in the editor below. The function must return an integer, the minimum sideways movements that Chris must make to successfully complete the game.

// minimumMovement has the following parameter(s):
//     obstacleLanes[obstacleLanes[0],...obstacleLanes[n-1]]:  an array of integers, denoting the lanes in which each obstacle is present.

 
// Constraints
// 1 ≤ n ≤ 105
// 1 ≤ obstacleLanes[i] ≤ 3 (0 ≤ i < n)

function minimumMovement(obstacleLanes) {
    // Write your code here
    
    let location = 2;
    let switches = 0;
    
    for (let i = 0; i < obstacleLanes.length - 1; i++) {
        if (obstacleLanes[i] === location) {
            if (obstacleLanes[i+1] > obstacleLanes[i+2]) {
                
            }
        }
    }

}
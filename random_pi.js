// Math.random() will generate a number from 0 to 1 randomly. Use this to create 
// a function estimate_pi(n) where Math.random is used to create an n number of 
// uniformly distributed random points within a square sized 1x1 and estimate the 
// number pi.

let estimate_pi = function(n) {
    let num_point_circle = 0;
    let num_point_total = 0;

    for (let i = 0; i < n; i++) {
        let x = Math.random();
        let y = Math.random();
        let distance = Math.pow(x, 2) + Math.pow(y, 2);

        if (distance <= 1) {
            num_point_circle++
        } 
        num_point_total++
    }

    return 4 * num_point_circle / num_point_total;
}
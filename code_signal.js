// Codewriting

// Background

// The marketing team at CodeSignal would like to know how many users there are in each Coding Score range for standardized tests like the General Coding Assessment, so that they can share that information on our website. They've asked you to create a report containing that information.

// Your Mission

// As input, you are given a list of scores. Coding Score can be anywhere between 300 and 850. For the purpose of this task, levels are defined in the following way:

// Poor: 300-599
// Fair: 600-699
// Good: 700-749
// Excellent: 750-799
// Elite: 800+
// Calculate how many users are there in each level, then return a list of strings where each string represents a level and the percentage of users who fall within that range, formatted like LevelName: XX.XX%. Percentages should be displayed with two decimal points of precision. Levels should be sorted in decreasing order of those numbers, omitting any levels that have no users. In case of a tie, the higher level should appear first.

// For example, if you had this input...

//   [330, 723, 730, 825]
// ...then you should return the following:

// [
//   'Good: 50.00%',
//   'Elite: 25.00%',
//   'Poor: 25.00%'
// ]
// [execution time limit] 4 seconds (js)

// [input] array.integer scores

// An array of integers in the range [300, 850].

// [output] array.string

// An array of strings formatted like LevelName: XX.XX%.

// [JavaScript] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

function codingScoreReportPercent(scores) {
    let res = {};
    let levels = {poor: 0, fair: 0, good: 0, excellent: 0, elite: 0}
    
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] < 600) {
            levels["poor"] += 1;
        } else if (scores[i] < 700) {
            levels["fair"] += 1;
        } else if (scores[i] < 750) {
            levels["good"] += 1;
        } else if (scores[i] < 800) {
            levels["excellent"] += 1;
        } else {
            levels["elite"] += 1;
        }
    }
    
    let poorPerc = (levels["poor"] * 100.0 / scores.length).toFixed(2);
    if (poorPerc > 0) {
        res["Poor"] = parseInt(poorPerc)
    }
    let fairPerc = (levels["fair"] * 100.0/ scores.length).toFixed(2);
    if (fairPerc > 0) {
        res["Fair"] = parseInt(fairPerc)
    }
    let goodPerc = (levels["good"] * 100.0/ scores.length).toFixed(2);
    if (goodPerc > 0) {
        res["Good"] = parseInt(goodPerc)
    }
    let excellentPerc = (levels["excellent"] * 100.0/ scores.length).toFixed(2);
    if (excellentPerc > 0) {
        res["Excellent"] = parseInt(excellentPerc)
    }
    let elitePerc = (levels["elite"] * 100.0/ scores.length).toFixed(2);
    if (elitePerc > 0) {
        res["Elite"] = parseInt(elitePerc)
    }
    
    let sortable = []
    
    for (var level in res) {
        sortable.push([level, res[level]])
    }
    
    let objEnt = Object.entries(res).sort((a,b) => b[1]-a[1])
    
    let output = []
    
    for (let i = 1; i < objEnt.length; i++) {
        if (objEnt[i][1] === objEnt[i - 1][1] && objEnt[i - 1][0] === "Poor") {
            [objEnt[i], objEnt[i - 1]] = [objEnt[i - 1], objEnt[i]]
        }
    }
    
    for (let i = 0; i < objEnt.length; i++) {
        output.push(`${objEnt[i][0]}: ${objEnt[i][1].toFixed(2)}%`)
    }
    
    return output;
}

// 2. Monsoon Umbrellas
// Umbrellas are available in different sizes that are each able to shelter a certain number of people. Given the number of people needing shelter and a list of umbrella sizes, determine the minimum number of umbrellas necessary to cover exactly the number of people given, and no more. If there is no combination that covers exactly that number of people, return -1. 

 

// Example

// requirement = 5

// sizes = [3, 5]

// One umbrella can cover exactly 5 people, so the function should return 1.

 

// Example

// requirement = 6

// sizes = [3, 5]

// It is possible to use 2 umbrellas of size 3 to cover exactly 6 people, so the function should return 2.

 

// Example

// requirement = 7

// sizes = [3, 5]

// There is no combination of umbrellas that cover exactly 7 people, so the function should return -1.

 

// Function Description 

// Complete the function getUmbrellas in the editor below.

 

// getUmbrellas has the following parameter(s):

//     int requirement:  the number of people to shelter

//     int sizes[n]:  an array of umbrella sizes available

// Returns:

//     int: the minimum number of umbrellas required to cover exactly requirement people, or -1 if it is impossible

// Constraints

// 1 ≤ requirement, m, sizes[i] ≤ 1000
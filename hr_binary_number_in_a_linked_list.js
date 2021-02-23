// 3. Binary Number in a Linked List
// A binary number is represented as a series of 0's and 1's. In this challenge, the series will be in the form of a singly-linked list. Each node instance, a LinkedListNode, has a value, data, and a pointer to the next node, next. Given a reference to the head of a singly-linked list, convert the binary number represented to a decimal number.

 

// Example

// PS Example
// (binary)->(0)->(1)->(0)->(0)->(1)->(1)->(null)
// Linked list corresponding to the binary number (010011)2 or (19)10.
 

// Function Description

// Complete the function getNumber in the editor below.

 

// getNumber has the following parameter(s):

//     binary:  reference to the head of a singly-linked list of binary digits

 

// Returns:

//     int: a (long integer)10 representation of the binary number

 

// Constraints

// 1 ≤ n ≤ 64
// All LinkedListNode.data ∈ {01}
// The described (integer)2 < 264
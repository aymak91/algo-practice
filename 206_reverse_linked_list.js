// 206. Reverse Linked List
// Easy

// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

// Follow up:
// A linked list can be reversed either iteratively or recursively. Could you implement both?

let reverseList = function(head) {
   
    if (!head || !head.next) {
        return head;
    }
    
    let node = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return node;
};
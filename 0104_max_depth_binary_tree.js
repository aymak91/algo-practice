// 104. Maximum Depth of Binary Tree
// Easy

// Given a binary tree, find its maximum depth.
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.

let maxDepth = function(root) {
    // start with depth value of 1
    return maxDepthHandler(root,1)
};

let maxDepthHandler = function(root,num) {
    // base case - if you get an empty root, return a depth of 0 since there is nothing in the tree
    
    if (root === null) {
        return 0;
    }
    
    if (root.right === null && root.left === null) {
        return num;
    }
    
    if (root.right && root.left){
        return Math.max(maxDepthHandler(root.right, num+1), maxDepthHandler(root.left, num+1));
    } else if (root.right != null) {
        return maxDepthHandler(root.right, num+1);
    } else {
        return maxDepthHandler(root.left, num+1);
    }
 }
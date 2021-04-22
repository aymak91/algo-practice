// 226. Invert Binary Tree
// Easy

// Example:

// Input:

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// Output:

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

let invertTree = function(root) {
    if (root === null) {
        return root;
    }
    
    let left = invertTree(root.left);
    let right = invertTree(root.right);
    
    root.right = left;
    root.left = right;
    
    return root;
};
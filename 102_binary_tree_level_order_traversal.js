// 102. Binary Tree Level Order Traversal
// Medium

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

let levelOrder = function(root) {
    
    const levels = []; 
    
    if (root === null) {
        return levels;
    }
    
    const queue = [root];
    
    while (queue.length) {
        const queueLength = queue.length;
        const level = [];
        
        for (let i = 0; i< queueLength; i++) {
            const node = queue.shift();
            
            if(node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            
            level.push(node.val);
        }
        levels.push(level);
        
    }
    return levels;
    
};
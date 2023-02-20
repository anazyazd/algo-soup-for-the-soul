// ----- Rotate Right ----- //

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// Given the head of a linked list, rotate the list to the right k places.

// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

// last two elements of the head move to the right, therefore 4, 5 go to the start of the linked list

// start at the end of the list, add to the beginning and push everything to the right by one
// keep going until k times is met

// Questions to ask:
//   1. Would you prefer this to be solved in an OOP way? (classes)
//   2. Can the original head be manipulated, or should a new linked list be returned?
//   3. Would you like this problem to solved recursively?

var rotateRight = function(head, k) {
  if (k === 0 || !head) return head;
    // find length and connect the tail to the head, making a circle
    // for each rotation, move the node forward length - 1 times
    // after k rotations, the current node will be the tail.
        // reassign head to the next node and point current node to null;
    // find the length and the point at tail node, and make a circle
    let length = 1;
    let current = head;
    while(current.next) {
        current = current.next;
        length++
    }
    let tail = current;
    tail.next = head;
    // for each rotation, count length - 1 nodes ahead. when k is zero, current node will be new tail
    while (k > 0) {
        let cycle = length - 1
        while (cycle > 0) {
            current = current.next;
            cycle--;
        }
        k--;
    }
    // point head at new head and point current node at null
    head = current.next
    current.next = null;
    return head;
};

// ----- Binary Tree Level Order Traversal ----- //

// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]


//   Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    const result = [];
    const queue = [root];
    while (queue.length){
        const subArr = [];
        for (let i = 0; i < queue.length; i++){
            let node = queue.pop();
            subArr.push(node.val);
            if (node.left) queue.unshift(node.left);
            if (node.right) queue.unshift(node.right);
        }
        result.push(subArr);
    }
    return result;
};


var levelOrder = function(root) {
    const result = []

    if(!root) {
        return result
    }

    const queue = [root]
    while (queue.length){
        const queueLength = queue.length
        const level = []

        for(let i = 0; i < queueLength; i++){
            const node = queue.shift()

            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }

            level.push(node.val)
        }
        result.push(level)
    }
    return result
};

// ----- Minimum Depth of Binary Tree ----- //

// Given a binary tree, find its minimum depth.
// The min depth is the number of nodes along the shortest path from the root node down to the nearest lead node.

// input: root = [3,9,20,null,null,15,7] 
// output: 2


//  Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */

// recursive approach
var minDepth = function(root) {
    if (!root) return 0;
    if (!root.left) return minDepth(root.right) + 1;
    if (!root.right) return minDepth(root.left) + 1;
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

// ------ Add Two Numbers ------ //

// You are given two non-empty linked lists representing two non-negatibe integers. 
// The digits are stored in reverse order, and each of their nodes contain a single digit. 
// Add the two numbers and return the sum as a linked list.

// Assume the two numbers do not contain any leading zero except the number 0 itself.


//  * Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// input: l1 = [2,4,3], l2 = [5,6,4]
// output: [7,0,8] because 342 + 465 = 807, everything is backwards

var addTwoNumbers = function(l1, l2) {
    let head = null;
    let temp = null;
    let acc = 0;
    while (l1 || l2){
        let sum = acc;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        let node = new ListNode(Math.floor(sum) % 10);
        acc = Math.floor(sum / 10);
        if (!temp){
            temp = head = node;
        }
        else {
            temp.next = node;
            temp = temp.next;
        }
    }
    if (acc > 0){
        temp.next = new ListNode(acc);
    }
    return head;
};


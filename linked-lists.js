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


/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function detectCycle(head: ListNode | null): ListNode | null {
  let slow, fast;
  slow = fast = head;
  try {
    do {
      slow = slow.next;
      fast = fast.next.next;
    } while (slow !== fast);

    slow = head;
    while (slow !== fast) {
      slow = slow.next;
      fast = fast.next;
    }
    return slow;
  } catch (_e) {
    return null;
  }
}
// @lc code=end

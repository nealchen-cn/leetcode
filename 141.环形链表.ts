/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
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

function hasCycle(head: ListNode | null): boolean {
  let slow, fast;
  slow = fast = head;

  try {
    do {
      slow = slow.next;
      fast = fast.next.next;
    } while (slow !== fast);

    return true;
  } catch (_e) {
    return false;
  }
}
// @lc code=end

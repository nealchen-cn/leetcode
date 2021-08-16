/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let slow, fast;
  slow = fast = head;
  let x = 0;

  while (fast.next) {
    fast = fast.next;
    if (x === n) {
      slow = slow.next;
    } else {
      x++;
    }
  }
  if (x < n) {
    return head.next;
  }
  if (head.next) {
    slow.next = slow.next?.next ?? null;
    return head;
  } else {
    return null;
  }
}
// @lc code=end

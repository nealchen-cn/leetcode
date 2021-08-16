/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const res = new ListNode();
  let p = res;

  while (l1 || l2) {
    if (l1 === null) {
      p.next = l2;
      break;
    } else if (l2 === null) {
      p.next = l1;
      break;
    } else if (l1.val < l2.val) {
      p.next = l1;
      l1 = l1.next;
      p = p.next;
    } else {
      p.next = l2;
      l2 = l2.next;
      p = p.next;
    }
  }
  return res.next;
}
// @lc code=end

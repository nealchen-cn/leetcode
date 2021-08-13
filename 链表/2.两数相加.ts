/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let l = l1;
  let r = l2;
  // number left
  let x = 0;
  let res = new ListNode();
  let tmp = 0;
  let p = res;

  while (l || r || x) {
    tmp = (l?.val ?? 0) + (r?.val ?? 0) + x;
    r = r?.next;
    l = l?.next;
    x = 0;
    if (tmp >= 10) {
      x = parseInt((tmp / 10).toString());
      tmp = tmp % 10;
    }

    p.next = new ListNode(tmp);

    p = p.next;
  }

  return res.next;
}
// @lc code=end

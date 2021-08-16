/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并K个升序链表
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const res = new ListNode();
  let p = res;
  let min = Infinity;
  let x;
  while (lists.length) {
    for (let i = 0; i < lists.length; i++) {
      if (lists[i] === null) {
        lists.splice(i, 1);
        i--;
        continue;
      }
      if (lists[i].val < min) {
        min = lists[i].val;
        x = i;
      }
    }
    if (min !== Infinity) {
      p.next = new ListNode(min);
      p = p.next;
      min = Infinity;
      lists[x] = lists[x].next;
    }
  }
  return res.next;
}
// @lc code=end

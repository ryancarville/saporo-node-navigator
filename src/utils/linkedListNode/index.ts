import type { IHistoryNode, ILinkedListNode } from "../../types/linkedListNode"

/**
 * @description Linked List Node
 */

export class LinkedListNode implements ILinkedListNode {
  value: IHistoryNode;
  next?: ILinkedListNode;

  constructor(value: IHistoryNode) {
    this.value = value;
    this.next = null;
  }
}

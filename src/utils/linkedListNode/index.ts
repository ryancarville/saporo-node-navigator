import type { ILinkedListNode } from "../../types/linkedListNode"

/**
 * @description Linked List Node
 */

export class LinkedListNode implements ILinkedListNode {
  value: string;
  next?: ILinkedListNode;

  constructor(value: string) {
    this.value = value;
    this.next = null;
  }
}

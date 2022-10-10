import type { ILinkedListNode } from "../../types/linkedListNode"

/**
 * @description Linked List Node
 */

export class LinkedListNode<T> implements ILinkedListNode<T> {
  value: T;
  next?: ILinkedListNode<T>;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

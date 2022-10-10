import type { ILinkedListNode } from "../linkedListNode"

// Linked List interface
export interface ILinkedList<T> {
  head: ILinkedListNode<T>;
  size: number;
  addNode: (newNode: ILinkedListNode<T>) => void;
  removeNodes: (idx: number) => void;
  listAllValues: () => T[];
  getFirst: () => ILinkedListNode<T> | null;
  getLast: () => ILinkedListNode<T>;
  isEmpty: () => boolean;
  clear: () => void;
}

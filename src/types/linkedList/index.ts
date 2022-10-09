import type { ILinkedListNode } from "../linkedListNode"

// Linked List interface
export interface ILinkedList {
  head: ILinkedListNode;
  size: number;
  addNode: (newNode: ILinkedListNode) => void;
  removeNodes: (idx: number) => void;
  listAllValues: () => string[];
  getList: () => ILinkedList;
  getFirst: () => ILinkedListNode | null;
  getLast: () => ILinkedListNode;
  isEmpty: () => boolean;
  clear: () => void;
}

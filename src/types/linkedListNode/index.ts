// Linked List Node interface
export interface ILinkedListNode<T> {
  value: T;
  next?: ILinkedListNode<T> | null;
}

// History Node data structure interface
export interface IHistoryNode {
  id: string;
  name: string;
}

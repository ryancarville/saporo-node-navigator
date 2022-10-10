// Linked List Node interface

export interface IHistoryNode {
  id: string;
  name: string;
}

export interface ILinkedListNode {
  value: IHistoryNode;
  next?: ILinkedListNode | null;
}

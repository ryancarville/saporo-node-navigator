import type { ILinkedList } from "../../types/linkedList"
import type { ILinkedListNode } from "../../types/linkedListNode"

/**
 * @description Linked List class - will create a new linked list along with all CRUD methods
 */

export class LinkedList<T> implements ILinkedList<T> {
  public head: ILinkedListNode<T> | null;
  public size: number;

  constructor(head = null) {
    this.head = head;
    this.size = 0;
    this.addNode = this.addNode;
    this.removeNodes = this.removeNodes;
    this.listAllValues = this.listAllValues;
    this.getFirst = this.getFirst;
    this.getLast = this.getLast;
    this.isEmpty = this.isEmpty;
    this.clear = this.clear;
  }

  // add a new node to the list
  public addNode(newNode: ILinkedListNode<T>): void {
    let node = this.head;
    // empty list
    if (node === null) {
      this.head = newNode;
    } else {
      //loop thru until the end of the list
      while (node.next) {
        node = node.next;
      }
      // add new node to the end of the list
      node.next = newNode;
    }
    this.size++;
  }

  // remove the nodes past a given index inclusive
  public removeNodes(startIdx: number): void {
    // if only one node in list and the index is zero or less we want to clear the list (less as a fail safe)
    if (this.size <= 1 && startIdx <= 0) this.clear();
    // else loop thru the list until we reach the index we want to remove
    // then set the previous pointer to null
    else {
      let currIdx: number = 0;
      let prev: ILinkedListNode<T> = this.head;
      let tail: ILinkedListNode<T> = this.head.next;
      // if the next is null then we are at the head (fail safe)
      if (tail === null) {
        this.clear();
        return;
      }
      // initialize the size to one since the loop starts at the second node
      this.size = 1;
      while (tail.next) {
        // we reached the index to remove
        if (currIdx === startIdx) break;
        // move to the next node
        prev = tail;
        tail = tail.next;
        this.size++;
        currIdx++;
      }
      prev.next = null;
    }
  }

  // traverse the list to add values to a collection to return
  public listAllValues(): T[] {
    let node: ILinkedListNode<T> = this.head;
    const allValues: T[] = [];
    if (node === null) return null;
    while (node) {
      allValues.push(node.value);
      node = node.next;
    }
    return allValues;
  }

  // get first node
  public getFirst(): ILinkedListNode<T> {
    return this.head;
  }

  // get the last node
  public getLast(): ILinkedListNode<T> {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  // clear the list
  public clear(): void {
    this.head = null;
    this.size = 0;
  }

  // checks if the list has any nodes
  public isEmpty(): boolean {
    return this.head === null;
  }
}

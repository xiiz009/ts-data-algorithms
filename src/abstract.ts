export interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
}

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
  size(): number;
}

export abstract class Collection<T> {
  protected storage: T[] = [];
  size(): number {
    return this.storage.length;
  }
  abstract isFull(): boolean;
}